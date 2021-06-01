import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screen/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ISSLocationScreen from './Screen/ISSLocationScreen';
import UpdateScreen from './Screen/UpdateScreen';
import MeteorScreen from './Screen/MeteorScreen';

const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="ISSTracker" component={ISSLocationScreen}/>
          <Stack.Screen name="CheckUpdates" component={UpdateScreen}/>
          <Stack.Screen name="MeteorScreen" component={MeteorScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
