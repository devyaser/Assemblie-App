import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = {
    container: {
        backgroundColor: "#1F1F1F",

    },
    row: { padding: 14, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", borderBottomColor: "#000", borderBottomWidth: 1 },
    box1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    name: {
        color: "#fff",
        fontFamily: "Roboto-Bold",
        fontSize: 20,
    },
    duration: {

        color: "#909092",
        fontSize: 16,
        fontFamily: "Roboto-Regular"

    },
    btn: {
        // width: "30%",
        paddingHorizontal: 10,
        backgroundColor: "#c50103",
        marginRight: 12
    },
    btnText: { fontFamily: "Roboto-Bold", fontSize: 14, color: "#fff" },
    arrowDown: {
        marginVertical: 15,
        alignSelf: "center"
    },
    price: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15
    },
    priceText: {
        color: "#eebf00",
        fontSize: 30
    },
}


export default styles