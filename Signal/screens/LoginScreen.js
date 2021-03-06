import { auth } from '../firebase'
import React,{ useState, useEffect } from 'react'
import { StyleSheet, Text, View, Keyboard } from 'react-native'
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error.message));
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if(authUser) {
                navigation.replace('Home');
            }
        })
        return unsubscribe;
    }, [])
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light'/>
            <Image 
                onPress={Keyboard.dismiss}
                source={{
                uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png'
            }}
                style={{ width: 200, height: 200}} 
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Email'
                    autofocus
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
                <Input 
                    placeholder='Password'
                    secureTextEntry
                    type='password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    onSubmitEditing={signIn}
                />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title='Login' onPress={signIn} />
            <Button onPress={() => navigation.navigate('Register')} type='outline' containerStyle={styles.button} title='Register' />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:  'center',
        padding: 10,
        backgroundColor: 'white'    
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 300,
        marginTop: 10,
    }
})
