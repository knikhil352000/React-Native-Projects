import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Button from './Button'
const Options = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
            <Button text='Cuisines'/>
            <Button text='Rating: 4.0+'/>
            <Button text='Fastest Delivery'/>
            <Button text='Offers'/>
            <Button text='Popular'/>
        </ScrollView>
    )
}

export default Options

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
    }
})
