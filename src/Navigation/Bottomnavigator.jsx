import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import Profile from '../screens/MainScreens/Profile'
const Tab=createBottomTabNavigator()
const Bottomnavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="HomeStack"  options={{ headerShown: false }} component={HomeStack}/>
        <Tab.Screen name="Profile" options={{headerShown:false}} component={Profile}/>
    </Tab.Navigator>
  )
}

export default Bottomnavigator