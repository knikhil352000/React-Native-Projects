import React from 'react'
import { View, Text, StyleSheet, Button,  Image } from 'react-native'
import Card from '../shared/Card';
import { globalStyles, images } from '../styles/global';

export default function ReviewDetails(props) {
    const pressHandler = () => {
        props.navigation.goBack();
    }
    const item = props.route.params;
    return (
        <View style={styles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
                <Text style={globalStyles.titleText}>{item.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating:</Text>
                    <Image source={images.ratings[item.rating]} />
                </View>
            </Card>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})