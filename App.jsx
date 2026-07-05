import { View, Text } from 'react-native';
import './global.css';
import Onboarding1 from "./screens/Onboarding/Onboarding1"
import Chooseskills from "./screens/Onboarding/Chooseskills"
import Findyourcircle from "./screens/Onboarding/Findyourcircle"
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaView className=" flex-1 bg-cream">
      {/* <Onboarding1/> */}
      {/* <Chooseskills/> */}
      <Findyourcircle/>
    </SafeAreaView>
  );
};

export default App;
