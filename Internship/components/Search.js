import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 
const Search = () => {
    const [input, setInput] = useState("")
    return (
        <View style={styles.container}>
            <EvilIcons name="search" size={24} color="red" />
            <TextInput
                style={styles.input}
                onChangeText={text => setInput(Text)}
                value={input}
                placeholder="Restaurant name, cuisine, or a dish..."
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#f2f2f2',
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },
    input: {
        marginLeft: 5
    }
})
