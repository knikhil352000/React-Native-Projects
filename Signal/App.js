import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack'
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2c6bed" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white"
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen 
          options={{
            headerTitleAlign: 'center',
            headerBackTitle: 'Login'
          }}
          name='Login'
          component={LoginScreen} />
        <Stack.Screen 
          options={{
            headerTitleAlign: 'center'
          }}
          name='Register'
          component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
