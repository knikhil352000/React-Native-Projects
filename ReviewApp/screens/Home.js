import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home() {
    const pressHandler = () => 
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