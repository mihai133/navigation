import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../../screens/Home'
import DetailsScreen from '../../screens/Details'
import PostScreen from '../../screens/PostScreen'
import SearchScreen from '../../screens/SearchScreen'
import NotificationsScreen from '../../screens/NotificationsScreen'
import MessagesScreen from '../../screens/MessagesScreen'

import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator()



// TAB SCREENS CONFIG
const iconHome = {
    tabBarIcon: ({color}) => <Feather name='home' size={26} color={color} />
}

const iconSearch = {
    tabBarIcon: ({color}) => <Feather name='search' size={26} color={color}/>,
   
}

const iconNotifications = {
    tabBarIcon: ({color}) => <Feather name='bell' size={26} color={color}/>,
   
} 

const iconMessages = {
    tabBarIcon: ({color}) => <Feather name='mail' size={26} color={color}/>,
   
    headerLeft:({navigation, color}) =>{
        return(
            <TouchableOpacity style={{paddingLeft: 20}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Feather name='menu' size={30} />
            </TouchableOpacity>
        )
    },
    
} 

const StackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor:'white'
                }
            }}
        >
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Details' component={DetailsScreen}/>
        </Stack.Navigator>
    )
}

const TabNav = () => {
    return (
        <Tabs.Navigator
            screenOptions={({route, navigation}) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor:'teal',
            })}
        >
            <Tabs.Screen name='Feed' component={StackNav} options={iconHome} />
            <Tabs.Screen name='Search' component={SearchScreen} options={iconSearch}/>
            <Tabs.Screen name='Notifications' component={NotificationsScreen} options={iconNotifications}/>
            <Tabs.Screen name='Messages' component={MessagesScreen} options={iconMessages}/>
        </Tabs.Navigator>
    )
}




const DrawerNav = () => {
    // Title based on the route of the Tab Navigation
    function getHeaderTitle(route) {
        const TabRouteName = getFocusedRouteNameFromRoute(route) 

        switch(TabRouteName) {
            case 'Feed':
                return 'Home';
            case 'Search':
                return 'Seach';
            case 'Notifications':
                return 'Notifications';
            case 'Messages':
                return 'Messages';
            case 'Details':
                return 'Details'
        }
    }
    
    return (
        <Drawer.Navigator
            screenOptions={({route, navigation}) => ({
                headerShown: true,
                headerTitle: getHeaderTitle(route),
                headerRight:({color})=>{
                    return(
                    <TouchableOpacity style={{paddingRight: 20}}>
                        <Feather name='message-square' size={30} color={color}/>
                    </TouchableOpacity>
                    )
                },
                headerLeft: ({focused, size}) => (
                    <TouchableOpacity style={{marginLeft:10}} onPress={() => navigation.openDrawer()}>
                    <Feather 
                    name='menu'
                    size={26}
                    color={focused ? '#7cc' : 'black'}
                    
                    /> 
                    </TouchableOpacity>
                ),
            })}
        >
            <Drawer.Screen name='Home' component={TabNav}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav