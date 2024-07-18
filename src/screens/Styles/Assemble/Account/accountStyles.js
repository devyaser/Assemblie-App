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
        paddingVertical: 15
    },
    box1Child: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row"
    },
    name:{
        color:"#eebf00",
        textAlign:"center",
        fontFamily:"Roboto-Medium",
        fontSize:20,
        marginTop:10
    },
    email:{
        color:"#909092",
        textAlign:"center",
        fontFamily:"Roboto-Light",
        fontSize:17

    }

}

export default styles