import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboardingnavigator from './Onboardingnavigator'
import Bottomnavigator from './Bottomnavigator'
import PostDetails from '../screens/MainScreens/PostDetails'
const stack = createNativeStackNavigator()
const RootNavigator = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="onboarding" component={Onboardingnavigator}/>
        <stack.Screen name="bottomtabs" component={Bottomnavigator}/>
        <stack.Screen name="PostDetails" component={PostDetails}  options={{ headerShown: false }}/ >
    </stack.Navigator>
  )
}

export default RootNavigator