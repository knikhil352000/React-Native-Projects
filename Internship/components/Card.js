import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FoodItem from './FoodItem'

const Card = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.cardHeader}>Eat what makes you happy</Text>
            <View style={styles.first}>
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </View>
            <View style={styles.second}>
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </View>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        padding: 10,
        marginTop: 20
    },
    first: {
        flexDirection: 'row'
    },
    second: {
        flexDirection: 'row'
    },
    cardHeader: {
        fontWeight: 'bold',
        fontSize: 20
    }
})
