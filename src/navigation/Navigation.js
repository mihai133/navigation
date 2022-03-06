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

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator()



const iconHome = {
    tabBarIcon: ({color}) => <Feather name='home' size={26} color={color} />
}

const iconSearch = {
    tabBarIcon: ({color}) => <Feather name='search' size={26} color={color}/>
}

const iconNotifications = {
    tabBarIcon: ({color}) => <Feather name='bell' size={26} color={color}/>
} 

const iconMessages = {
    tabBarIcon: ({color}) => <Feather name='mail' size={26} color={color}/>
} 

const TabNav = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle:{
                    borderRadius:5,
                    padding:10,
                },
                tabBarActiveTintColor:'teal'
            }}
        >
            <Tabs.Screen name='Feed' component={StackNav} options={iconHome} />
            <Tabs.Screen name='Search' component={SearchScreen} options={iconSearch}/>
            <Tabs.Screen name='Notifications' component={NotificationsScreen} options={iconNotifications}/>
            <Tabs.Screen name='Messages' component={MessagesScreen} options={iconMessages}/>
        </Tabs.Navigator>
    )
}

// drawer nav nested inside stack nav
// stack nav with button on the right -> onPress toggle drawer

// const DrawerNav = () => {
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen name='Home' component={HomeScreen}/> 
//             <Drawer.Screen name='Details' component={DetailsScreen}/> 
//         </Drawer.Navigator>
//     )
// }

// const StackNav = () =>{
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name='Home' component={TabNav}/> 
//         </Stack.Navigator>
//     )
// }


const StackNav = ({route, navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                
                    // if (route = {HomeScreen}) {
                    //         return (
                    //     <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    //         <Feather name='menu' size={26} />
                    //     </TouchableOpacity> 
                    //     )
                    //     } else if (route = {DetailsScreen}){
                    //         return ( 
                    //     <TouchableOpacity>
                    //         <Feather name='arrow-left' size={26}/> 
                    //     </TouchableOpacity>
                    //         )
                    //     }
                    
                    // },
                cardOverlayEnabled:true,
                cardStyle:{
                    backgroundColor:'white'
                }
            }}
        >
            <Stack.Screen 
            options={{
                headerLeft: () => {
                    return (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Feather name='menu' size={26} />
                            </TouchableOpacity> 
                    )
                }
            }}
            name='Home' component={HomeScreen}/>
            <Stack.Screen 
            options={{
                headerLeft: () => {
                    return(
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Feather name='arrow-left' size={26}/>
                        </TouchableOpacity>
                    )
                }
            }}
            name='Details' component={DetailsScreen}/>
        </Stack.Navigator>
    )
}


const DrawerNav = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name='Home' component={TabNav}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav