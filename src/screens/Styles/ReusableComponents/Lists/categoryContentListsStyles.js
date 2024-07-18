import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'


const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 70,
        marginRight: 14
    },
    row: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 20,
    },
    box1: {
        width: "70%",
        display: "flex",
        flexDirection: "row"
    },
    name: {
        color: "#FFFFFF",
        fontFamily: "Roboto-Medium",
        fontSize: 16,
        // width: "62%",
        // backgroundColor:'red'
        // padding:-10

    },
    videosCount: {
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        color: "#8E8E93",
        marginTop: 3
    },
    countOnImage:{
        width:60,
        height:70,
        alignSelf:"flex-end",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    countTextOnImage:{
        color: "#FFFFFF",
        fontFamily: "Roboto-Regular",
        fontSize: 14,
    },
   
})


export default styles