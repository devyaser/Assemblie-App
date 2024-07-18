import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center"
    },
    box: {
        backgroundColor: "#1f1f1f",
        width: "90%",
        height: "90%",
        alignSelf: "center",
        elevation: 5
    },
    subscribersContainer: {
        // backgroundColor: "red",
        height: "60%"
    },
    head: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 20
    },
    headBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headBox1Text: {
        color: "#EEBF00",
        fontFamily: "Roboto-Medium",
        fontSize: 18,
        textTransform: "uppercase"
    },
    headBox2Text: {
        fontSize: 14,
        color: "#8E8E93",
        fontFamily: "Roboto-Regular"
    },
    headBoxCount: {
        fontSize: 14,
        color: "#8E8E93",
        fontFamily: "Roboto-Regular",
        marginLeft: 4
    },
    row: { padding: 14, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", borderBottomColor: "#000", borderBottomWidth: 1, marginHorizontal: 20 },
    box1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    name: {
        color: "#fff",
        fontFamily: "Roboto-Bold",
        fontSize: 16,
    },
    empty: {
        textAlign: "center",
        color: "#8E8E93",
        fontSize: 16,
        fontFamily: "Roboto-Regular"
    },
    allBtnTxt: {
        color: "#8E8E93",
        fontSize: RFPercentage(1.8),
        textAlign: "center",
        fontFamily: "Roboto-Regular",
        marginRight: 8,
    },
    allBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
   
    checkBox: {
        width: 16,
        height: 16,
        // backgroundColor: "#8E8E93",
        borderRadius: 40,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default styles