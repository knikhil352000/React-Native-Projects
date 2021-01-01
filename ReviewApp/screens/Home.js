import { NavigationContainer } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import ReviewDetails from './ReviewDetails'


export default function Home({navigation}) {
    const [reviews, setReviews] = useState([
        {title: 'Return of Raavn', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Return of Abhimanyu', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Return of Me', rating: 3, body: 'lorem ipsum', key: '3'}

    ])
    return (
        <View style={styles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth:1,
        borderColor:'red'
    }, 
    titleText:{  
        // fontFamily:'nunito-bold',
        fontSize:18
    }
})

// Switching Screens
// export default function Home(props) {
//     const pressHandler = () => {
//         props.navigation.navigate('ReviewDetails')
//     }
//     return (
//         <View style={styles.container}>
//             <Text style={globalStyles.titleText}>Home Screen</Text>
//             <Button title='Go Back' onPress={pressHandler}/>
//         </View>
//     )
// }