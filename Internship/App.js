
import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import History from './History';
import Donate from './Donate';
import Account from './Account'
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer> 
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <FontAwesome name="shopping-bag" size={size} color={color} />
              );
            } else if (route.name === 'History') {
              return (
                <Foundation name="clipboard-notes" size={size} color={color} />
              );
            } else if(route.name === 'Donate') {
              return (
                <FontAwesome5 name="donate" size={size} color={color} />
              )
            } else if(route.name === 'Account') {
              return (
                <MaterialIcons name="account-circle" size={size} color={color} />
              )
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Donate" component={Donate} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    padding: 20,
  },
});
