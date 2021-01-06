import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import ReviewDetails from './screens/ReviewDetails'
import * as Font from 'expo-font';
import { globalStyles } from './styles/global';
import Navigator from './routes/HomeStack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './routes/HomeStack';
import Drawer from './routes/Drawer';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    console.log('hello');
    getFonts();
  })

  return (
    <Drawer/>
  );
}