import React from 'react'
import { Button } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../../screens/Home'
import DetailsScreen from '../../screens/Details'
import SettingsScreen from '../../screens/SettingsScreen'
import PostScreen from '../../screens/PostScreen'
import SearchScreen from '../../screens/SearchScreen'
import NotificationsScreen from '../../screens/NotificationsScreen'
import MessagesScreen from '../../screens/MessagesScreen'

import { Feather } from '@expo/vector-icons'

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

const StackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown:false,
                cardOverlayEnabled:true,
                cardStyle:{
                    backgroundColor:'white'
                }
            }}
        >
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen options={{
                headerShown:true,
            }} name='Details' component={DetailsScreen}/>
        </Stack.Navigator>
    )
}


const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={TabNav}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav