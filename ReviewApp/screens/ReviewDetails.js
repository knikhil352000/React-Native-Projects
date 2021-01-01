import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function ReviewDetails(props) {
    const pressHandler = () => {
        props.navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Text>ReviewDetails Screen</Text> 
            <Button title='go home' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})