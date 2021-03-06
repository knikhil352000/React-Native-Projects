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
 
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        fontSize:18,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowColor: '#333',
        shadowOffset: {width : 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 4,
    },
    errorText: {
        color:'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 6
    }
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}