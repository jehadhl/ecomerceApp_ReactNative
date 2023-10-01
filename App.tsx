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
import Login from './screens/Login';
import Home from './screens/Home';
import { Provider } from 'react-redux';
import store from './redux/store/store';
function App(): JSX.Element {

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Welcome'}
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name='Welcome' component={Intro} />
          <Stack.Screen name="InfoApp" component={InfoApp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
