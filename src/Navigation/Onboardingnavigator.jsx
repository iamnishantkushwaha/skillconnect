import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'

import ChooseSkills from '../screens/Onboarding/Chooseskills';
import FindYourCircle from '../screens/Onboarding/Findyourcircle';
import Login from '../screens/Auth/Login';
import Onboarding1 from "../screens/Onboarding/Onboarding1";
import Signup from '../screens/Auth/Signup';
import Home from "../screens/MainScreens/Home"
import PostDetails from "../screens/MainScreens/PostDetails";
const Stack = createNativeStackNavigator();
const Onboardingnavigator = () => {

    
  return (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Onboarding1}/ >
        <Stack.Screen name="ChooseSkills" component={ChooseSkills}/ >
        <Stack.Screen name="FindYourCircle" component={FindYourCircle}/ >
        <Stack.Screen name="Login" component={Login}/ >
          <Stack.Screen name="Signup" component={Signup}/ >
        
         
 
    </Stack.Navigator>
  )
}

export default Onboardingnavigator