import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import Register from './components/auth/Register';
require('dotenv').config()
import * as firebase from 'firebase';
const Stack = createStackNavigator();
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  ); 
}  