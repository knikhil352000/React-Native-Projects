import React from 'react'
import { View, Text } from 'react-native'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails'
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header  from '../shared/Header';

export default function HomeStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
            headerStyle: {
            backgroundColor: '#f4511e',
            }}}>
            <Stack.Screen name="Home" component={Home} options={({navigation, route}) => ({ headerTitle : () => <Header navigation={navigation} title='GameZone'/>})}  />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
    )
}
