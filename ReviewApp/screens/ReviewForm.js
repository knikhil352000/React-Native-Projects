import React from 'react'
import { StyleSheet, Button, TextInput, View, Text } from 'react-native'
import { Formik } from 'formik';
import { globalStyles } from '../styles/global.js'
export default function ReviewForm({addReview}) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(formikProps) => (
                   <View>
                       <TextInput 
                        style={globalStyles.input} 
                        placeholder='Review title' 
                        onChangeText={formikProps.handleChange('title')} 
                        value={formikProps.values.title}
                       />
                       <TextInput 
                        multiline
                        style={globalStyles.input} 
                        placeholder='Review body' 
                        onChangeText={formikProps.handleChange('body')} 
                        value={formikProps.values.body}
                       />
                       <TextInput 
                        style={globalStyles.input} 
                        placeholder='Rating (1 - 5)' 
                        onChangeText={formikProps.handleChange('rating')} 
                        value={formikProps.values.rating}
                        keyboardType='numeric'
                       />
                        <View style={{width : '50%', marginTop: 20,marginLeft:'25%'}}>
                            <Button title='submit' color='coral' onPress={formikProps.handleSubmit} />
                        </View>
                       

                   </View> 
                )}
            </Formik>

        </View>
    )
}
