import React,{useState} from 'react'
import { Button, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const onSignUp = () => {
        console.log(email);
    }
    
    return (
        <View>
            <TextInput
                placeholder='name'
                onChangeText={(name) => setName(name)}
                value={name}
            />
            <TextInput
                placeholder='email'
                onChangeText={(email) => setEmail(email)}
                value={email}
            />
            <TextInput
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                value={password}
            />
            <Button 
                onPress={() => onSignUp()}
                title='Sign Up'
            />
        </View>
    )
}
