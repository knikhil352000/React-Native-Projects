import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        padding: 10
    },
    titleText: {
        // fontFamily: 'nunito-bold',
        fontSize:18,
        color: '#333',
        padding: 10,
        marginVertical:5,
        width: 'auto',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    }
})