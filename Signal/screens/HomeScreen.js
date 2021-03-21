import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import {auth, db} from '../firebase'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native'

const HomeScreen = ({navigation}) => {
    const [chats, setChats] = useState([]);
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login');
        })
    }
    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }
            )))
        ))
        return unsubscribe;
    }, [])
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Signal',
            headerStyle: {backgroundColor: '#fff'},
            headerTitleStyle: { color: 'black', fontWeight: 'bold'},
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{marginLeft: 20 }}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Avatar rounded source={{uri: 'https://avatars.githubusercontent.com/u/71940958?s=400&u=24ef1c10f91e5ef2dffac627465b825a9fef769a&v=4'}}/>
                    </TouchableOpacity>
                </View>
            ),
            headerRight:() => (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginRight: 20
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name='camerao' size={24} color='black'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5}>
                        <SimpleLineIcons name='pencil' size={24} color='black'/>
                    </TouchableOpacity>
                </View> 
            )
        },)
    })
    const enterChat = (id, chatName) => {
        navigation.navigate('Chat', {
            id,
            chatName,
        })
    }
    return (
        <SafeAreaView>
            <ScrollView>
                {
                    chats.map(({id, data: {chatName}}) => (
                        <CustomListItem key={id} id={id} enterChat={enterChat} chatName={chatName}/>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
})
