import './global.css';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootNavigator from './src/Navigation/RootNavigator';

const App = () => {
  return (
  <GestureHandlerRootView className='flex-1'>
      <SafeAreaProvider>
      <NavigationContainer>
      <RootNavigator/>
      </NavigationContainer>
      
   </SafeAreaProvider>
    </GestureHandlerRootView>
     
   
  );
};

export default App;
