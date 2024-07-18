import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    card: {
        marginBottom: 14
    },
    thumbnail: {
        width: "100%",
        height:Dimensions.get('window').height/100*25
    },
    userRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
        paddingVertical: 14,
        // paddingHorizontal: 16
    },
    userRowBox1: {
        display: "flex",
        flexDirection: "row",
        // alignItems: "center"
        // backgroundColor: "red",
        width: "90%"

    },
   
    description: {
        color: "#FFFFFF",
        fontFamily: "Roboto-Medium",
        fontSize: RFPercentage(2.3),
        // flex: 1,

        width: Dimensions.get('window').width>800 ? "100%" : "75%",
        // backgroundColor:'red'

    },
    userSubsCount: {
        fontSize: 15,
        fontFamily: "Roboto-Regular",
        color: "#8E8E93",
        marginTop:5
    },
})


export default styles