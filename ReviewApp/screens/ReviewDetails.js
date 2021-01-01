import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { globalStyles } from '../styles/global';

export default function ReviewDetails(props) {
    const pressHandler = () => {
        props.navigation.goBack();
    }
    const item = props.route.params;
    return (
        <View style={styles.container}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
            <Text style={globalStyles.titleText}>{item.body}</Text>
            <Text style={globalStyles.titleText}>{item.rating}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})