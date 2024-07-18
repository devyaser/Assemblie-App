import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1f1f1f"
    },
    card: {
        marginBottom: 14,
        borderBottomColor: "#000000",
        borderBottomWidth: 2
    },
    thumbnail: {
        width: "100%", height: Dimensions.get('window').height/100*25, resizeMode: "cover"
    },
    lap: {
        width: "100%", height: Dimensions.get('window').height/100*25,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: "flex",
        justifyContent: "space-between",
        padding: 10
    },
    description: {
        color: "#FFFFFF",
        fontFamily: "Roboto-Medium",
        fontSize: 17,
        fontSize:RFPercentage(2.3),
        width: "75%",
    },

    userSubsCount: {
        fontSize: 15,
        fontSize:RFPercentage(2.1),

        fontFamily: "Roboto-Regular",
        color: "#8E8E93",
        marginTop: 5
    },
    userRowBox1: {
        display: "flex",
        flexDirection: "row",
        width: "90%"
    },
    userRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 14,
        paddingHorizontal: 12
    },
    liveTag: {
        backgroundColor: "#eebf00",
        width: 40,
        marginTop: 4,
        marginLeft: 4
    },
    liveTagTxt: {
        alignSelf: "center",
        color: "#000000",
        fontFamily: "Roboto-Bold",
        fontSize: 14
    },
    playBtn: {
        alignSelf: "center",
    },
    fullScreenBtn: {
        alignSelf: "flex-end",
    },
    loadMoreIcon:{
         alignSelf: "center", marginBottom: 30 
    }
})

export default styles