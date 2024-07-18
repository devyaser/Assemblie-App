import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'


const styles = StyleSheet.create({
    thumbnail: {
        width: "35%",
        height: 70,
        marginRight: 8
    },
    row: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 20,
    },
    box1: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
    },
    box1box:{width:"65%"},
    description: {
        color: "#FFFFFF",
        fontFamily: "Roboto-Medium",
        fontSize: RFPercentage(2.3),
        // width: "62%",
        // backgroundColor:'red'
        // padding:-10

    },
    userSubsCount: {
        fontSize: RFPercentage(2),
        fontFamily: "Roboto-Regular",
        color: "#8E8E93",
        marginTop: 3
    },
    liveTag:{
        backgroundColor:"#eebf00",
        width:40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        bottom:6,
        right:6
        // alignSelf:"center"
        // marginLeft:14,
        // marginTop:-18
    },
    liveTxt:{
        color:"#000000",
        fontFamily:"Roboto-Bold",
        fontSize:RFPercentage(2)
    }
})


export default styles