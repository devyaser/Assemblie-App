import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1F1F1F",

    },
    box:{
        backgroundColor: "#0c0c0c",
        marginBottom: 30,
        marginHorizontal:15,
        padding: 20
    },
    head:{ display: "flex", flexDirection: "row", alignItems: "center",justifyContent: "space-between" },
    price:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginVertical:10
    },
    priceText:{
        color: "#eebf00",
        fontSize: 70,
        fontFamily:"Roboto-Bold",
        
    },
    duration:{
        color:"#fff",
        fontFamily:"Roboto-Medium",
        fontSize:20,
        textAlign:"center"
    },
    description:{
        textAlign:"center",
        color:"#909092",
        fontFamily:"Roboto-Regular",
        fontSize:16,
        marginVertical:16
    },
  
})

export default styles