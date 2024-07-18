import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'


const styles = {
    container: {
        backgroundColor: "#1F1F1F",

    },
    viewContainer:{display:"flex", flex:1, justifyContent:"space-between",},
    box1: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: 40
    },
    box1Child: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    buttonSignin: {
        width: 150,
        justifyContent: "center",
        marginTop: 30,
        borderColor: "#EEBF00"
    },
    buttonSigninText: {
        color: "#EEBF00",
        margin: 10,
        fontSize: 14,
        fontFamily: "Roboto-Light"
    }

}

export default styles