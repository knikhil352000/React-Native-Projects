import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { Input } from 'react-native-elements'
const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light'/>
            <Text h3 style={{marginBottom: 50}}>
                Create a Signal account
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Full Name'
                    autoFocus
                    type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                /> 
                <Input 
                    placeholder='Full Name'
                    type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input 
                    placeholder='Full Name'
                    type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input 
                    placeholder='Full Name'
                    type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </View>
        </KeyboardAvoidingView>
    ) 
}

export default RegisterScreen

const styles = StyleSheet.create({

})
