import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container:{
        width: RFPercentage(10),
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:10
    },
    avatar: {
        width: RFPercentage(10),
        height: RFPercentage(10),
        borderRadius: 50,
        // marginRight: 14,
        borderWidth: 3,
        borderColor: "#eebf00"
    },
    liveTag: {
        backgroundColor: "#eebf00",
        width: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // alignSelf:"center"
        // marginLeft:14,
        marginTop: -RFPercentage(3)
    },
    liveTxt: {
        color: "#000000",
        fontFamily: "Roboto-Bold",
        fontSize: RFPercentage(1.8)
    }
})


export default styles