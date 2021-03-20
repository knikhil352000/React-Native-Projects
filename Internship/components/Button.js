import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 10}}>{text}</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        borderWidth: 1,
        margin: 3,    
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderColor: '#bfbfbf',
        borderRadius: 5
    }
})
