/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Intro from './screens/Intro';
import InfoApp from './screens/InfoApp';

function App(): JSX.Element {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName={'Welcome'} 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Welcome' component={Intro} />
        <Stack.Screen name="InfoApp" component={InfoApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
