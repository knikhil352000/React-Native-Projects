import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
export default function Header({navigation, title}) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground style={styles.header}>
            <MaterialIcons name='menu' size={33} color='black' style={styles.icon} onPress={openMenu}/>
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/heart_logo.png')} />
                <Text style={styles.headerText}>{title}</Text>
            </View> 
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignContent:'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        // borderWidth: 1,
        borderColor: 'blue',
        position: 'absolute',
        left: 16,
    },
    headerImage: {
        width: 26, 
        height: 26,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: 'row',
        
    }
})