import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
const Location = () => {
    return (
        <View style={styles.container}>
            <Entypo name="location" size={20} color="black" />
            <Text style={styles.text}>Home-Gaya</Text>
        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    container: { 
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '600',
        marginLeft: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '4%',
        
    }
})
