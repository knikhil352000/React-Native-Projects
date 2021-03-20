
import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Card from './components/Card';
import ImageView from './components/ImageView';
import Location from './components/Location';
import Options from './components/Options';
import Search from './components/Search';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="red" />
      <Location />  
      <Search />
      <Options />
      <ImageView />
      <Card />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    padding: 20,
    backgroundColor:'#fff'
  },
});