import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import Register from './components/auth/Register';
import * as firebase from 'firebase';
const Stack = createStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyDzQ7sC4Mf-MTBoTF6GA2eyxJwi8jlarmA",
  authDomain: "instagram-react-native-a84d2.firebaseapp.com",
  projectId: "instagram-react-native-a84d2",
  storageBucket: "instagram-react-native-a84d2.appspot.com",
  messagingSenderId: "170442662878",
  appId: "1:170442662878:web:7fdf3f04b4a75dc906734f"
};
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        setLoaded(true);
        setLoggedIn(false);
      } else {
        setLoaded(true);
        setLoggedIn(true);
      }
    })
  }, [])
  if(!loaded) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Loading</Text>
      </View>
    ) 
  }
  if(!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false}}/>
          <Stack.Screen name='Register' component={Register} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>User is loggedIn</Text>
    </View>
  )
   
}  