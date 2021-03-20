import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ImageView = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/Image.jpg')}
            />

        </View>
    )
}

export default ImageView

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    image: {
        width: '100%',
        height: 200,
        padding: 20,
        marginTop: 20,
        borderRadius: 15
    }
})
