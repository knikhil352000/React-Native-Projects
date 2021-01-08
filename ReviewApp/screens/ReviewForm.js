import React from 'react'
import { StyleSheet, Button, TextInput, View, Text } from 'react-native'
import { Formik } from 'formik';
import { globalStyles } from '../styles/global.js'
import * as yup from 'yup';

const ReviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num', 'Rating must be a number 1-5', val => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})
export default function ReviewForm({addReview}) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={ReviewSchema}
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
                        onBlur={formikProps.handleBlur('title')}
                       />
                       <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>
                       <TextInput 
                        multiline
                        style={globalStyles.input} 
                        placeholder='Review body' 
                        onChangeText={formikProps.handleChange('body')} 
                        value={formikProps.values.body}
                        onBlur={formikProps.handleBlur('body')}
                       />
                        <Text style={globalStyles.errorText}>{formikProps.touched.title &&formikProps.errors.body}</Text>                      
                       <TextInput 
                        style={globalStyles.input} 
                        placeholder='Rating (1 - 5)' 
                        onChangeText={formikProps.handleChange('rating')} 
                        value={formikProps.values.rating}
                        keyboardType='numeric'
                        onBlur={formikProps.handleBlur('rating')}
                       />
                       <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.rating}</Text>
                        <View style={{width : '50%', marginTop: 20,marginLeft:'25%'}}>
                            <Button title='submit' color='coral' onPress={formikProps.handleSubmit} />
                        </View>
                   </View> 
                )}
            </Formik>

        </View>
    )
}
