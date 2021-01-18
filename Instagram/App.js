import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import Register from './components/auth/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={Register} options={{ headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  ); 
}