import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const FoodItem = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../assets/Biryani.jpg')}
            />
            <Text style={styles.cardText}>Biryani</Text>
        </View>
    )
}

export default FoodItem

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    image: {
        height: 65,
        width: 65,
        margin:5,
        borderRadius: 33
    },
    cardText: {
        textAlign: 'center',
        marginTop: 5
    }
})
