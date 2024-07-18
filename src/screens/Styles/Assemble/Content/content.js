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
    coverPic: {
        width: "100%",
        height: 200
    },
    
    userName: {
        color: "#FFFFFF",
        fontFamily: "Roboto-Medium",
        fontSize: RFPercentage(2.86)
    },
    userSubsCount: {
        fontSize: RFPercentage(2.2),

        fontFamily: "Roboto-Regular",
        color: "#8E8E93"
    },
    userRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 16
    },
    userRowBox1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    box: {
        marginTop: 10,
        // marginHorizontal: 14,
        borderTopWidth: 2,
        borderColor: "#000000",
        paddingVertical: 20,
        paddingHorizontal: 14
    },
    roundBtns: {
        width: Dimensions.get('window').width/100*20,
        height: Dimensions.get('window').width/100*20,
        backgroundColor: "#eebf00",
        borderRadius: Dimensions.get('window').width/100*10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    roundBtnsTxt: {
        fontFamily: "Roboto-Medium",
        fontSize: RFPercentage(1.8)
    },
    roundBtnsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",

    },
    heading: {
        color: "#ffffff",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        marginBottom: 14
    }
})

export default styles