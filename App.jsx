import './global.css';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import OnboardingNavigator from './src/Navigation/Onboardingnavigator';

const App = () => {
  return (
  
        <SafeAreaProvider>
      <NavigationContainer>
        <OnboardingNavigator />
      </NavigationContainer>
      
    </SafeAreaProvider>
    
     
   
  );
};

export default App;
