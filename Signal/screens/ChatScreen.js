import React, { useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Platform, Keyboard } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import * as firebase from 'firebase'
import { db, auth } from '../firebase'
const ChatScreen = ({ navigation, route }) => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const sendMessage = () => {
        Keyboard.dismiss();
        db.collection('chats').doc(route.params.id).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL
        })
        setInput('');
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'left',
            headerTitle: () => (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Avatar rounded source={{uri: 'https://avatars.githubusercontent.com/u/71940958?s=400&u=24ef1c10f91e5ef2dffac627465b825a9fef769a&v=4'}}/>
                    <Text style={{color: 'white', marginLeft: 10, fontWeight: '700'}}>{route.params.chatName}</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name='arrowleft' size={24} color='white'/>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity>
                        <FontAwesome name='video-camera' size={24} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='call' size={24} color='white'/>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])
    
    useLayoutEffect(() => {
        const unsubscribe = db.collection('chats')
                            .doc(route.params.id)
                            .collection('messages').orderBy('timestamp', 'desc')
                            .onSnapshot(snapshot => setMessages(
                                snapshot.docs.map(doc => ({
                                    id: doc.id,
                                    data: doc.data()
                                }))
                            ))
    })


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <KeyboardAvoidingView
                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <ScrollView>
        
                </ScrollView>
                <View style={styles.footer}>   
                    <TextInput 
                        value={input} 
                        onChangeText={(text) => setInput(text)} 
                        onSubmitEditing={sendMessage}
                        placeholder='Signal Message' 
                        style={styles.textInput}
                    />
                    <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                        <Ionicons name='send' size={24} color='#2b68e6'/>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        backgroundColor: '#ececec',
        padding: 10,
        color: 'grey',
        borderRadius: 30,
    }
})