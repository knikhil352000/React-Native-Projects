import React, { useLayoutEffect } from 'react'
import { Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import {auth} from '../firebase'

const HomeScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Signal',
            headerStyle: {backgroundColor: '#fff'},
            headerTitleStyle: { color: 'black', fontWeight: 'bold'},
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{marginLeft: 20, elevation: 100}}>
                    <TouchableOpacity>
                        <Avatar rounded source={{uri: 'https://avatars.githubusercontent.com/u/71940958?s=400&u=24ef1c10f91e5ef2dffac627465b825a9fef769a&v=4'}}/>
                    </TouchableOpacity>
                </View>
            )
        })
    })
    return (
        <View>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
