import { NavigationContainer } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, Modal, Keyboard } from 'react-native'
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import ReviewDetails from './ReviewDetails'
import {MaterialIcons} from '@expo/vector-icons';
import Card from '../shared/Card'
import ReviewForm from './ReviewForm'

export default function Home({navigation}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Return of Raavn', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Return of Abhimanyu', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Return of Me', rating: 3, body: 'lorem ipsum', key: '3'}

    ])

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false);
    }

    return (
        <View style={styles.container}>
            
            <Modal visible={modalOpen} animationType='slide'>
                {/* <TouchableWithoutFeedback> */}
                    <MaterialIcons name='close' size={33} color='black' style={styles.icon} onPress={() => setModalOpen(false)}/>
                    <View style={StyleSheet.modalContent}>
                    </View>
                    <ReviewForm addReview={addReview}/>
                {/* </TouchableWithoutFeedback> */}
            </Modal>
            <MaterialIcons name='add' size={33} color='black' style={styles.icon} onPress={() => setModalOpen(true)}/>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width:'100%',
    }, 
    titleText:{  
        fontSize:18,
        borderRadius: 10
    },
    icon: {
        alignSelf: 'center',
        marginTop: 10
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