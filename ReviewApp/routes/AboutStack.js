import React from 'react'
import { View, Text } from 'react-native'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails'
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About'
export default function AboutStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="About"
        screenOptions={{
            headerStyle: {
            backgroundColor: '#f4511e',
            }}}>
            <Stack.Screen name="About" component={About} />
            
        </Stack.Navigator>
    )
}
