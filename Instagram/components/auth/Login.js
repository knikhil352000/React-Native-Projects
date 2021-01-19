import React,{useState} from 'react'
import { Button, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase'
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    const onSignUp = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    return (
        <View>
            <TextInput
                placeholder='Email'
                onChangeText={(email) => setEmail(email)}
                value={email}
            />
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                value={password}
            />
            <Button 
                onPress={() => onSignUp()}
                title='Login'
            />
        </View>
    )
}
