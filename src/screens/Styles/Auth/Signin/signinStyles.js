import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'


const styles = {
    container:{
        backgroundColor:"#1F1F1F"
    },
    box: {
        width: "95%",
        alignSelf: "center",
        margin: 4,
        padding: 10,
    },
    buttonGoogle: {
        marginTop: 15,
        backgroundColor: "#FFFFFF",
        color: "#1F1F1F"
    },
    buttonFacebook: {
        marginTop: 15,
        backgroundColor: "#475993",
        color: "white"
    },
    input: {
        width: "100%",
        backgroundColor: "#0C0C0C",
        color: "#8E8E93",
        paddingLeft: 12,
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        height:50
    },
    
    orLine: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 15
    },
    orLineLine: {
        backgroundColor: "#000000",
        width: "48%",
        height: 2
    },
    showHideBtn:{
        height:50,
        backgroundColor:"#0C0C0C",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:10
    },
    passwordContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:15
    },
    forgotPassword:{
        textAlign: "right",
        color: "#eebf00",
        marginTop: 10,
        fontFamily: "Roboto-Light",
        fontSize: 14
    },
    accountStatus:{
        textAlign: "center",
        margin: 10,
        color: "#4b4b4b",
        fontSize: 16,
        fontFamily: "Roboto-Light"
    }, 
    otherFormBtn:{
        color: "#eebf00",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Roboto-Medium"
    }
}

export default styles