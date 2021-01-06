import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
export default function Drawer() {
    const RootDrawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <RootDrawer.Navigator initialRouteName="Home">
                <RootDrawer.Screen name="Home" component={HomeStack} />
                <RootDrawer.Screen name="About" component={AboutStack}/>  
            </RootDrawer.Navigator>
        </NavigationContainer>
    )
}