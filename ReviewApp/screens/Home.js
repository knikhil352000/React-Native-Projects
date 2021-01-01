import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import ReviewDetails from './ReviewDetails'


export default function Home(props) {
    const pressHandler = () => {
        props.navigation.navigate('ReviewDetails')
    }
    return (
        <View style={styles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='Go Back' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 100,
        borderWidth:1,
        borderColor:'red'
    }, 
    titleText:{  
        // fontFamily:'nunito-bold',
        fontSize:18
    }
})