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
    heading: {
        color: "#eebf00",
        fontFamily: "Roboto-Medium",
        fontSize: RFPercentage(4),
        alignSelf: "center",
        marginVertical: 10
    },
    inputContainer: { borderBottomWidth: 0, width: Dimensions.get('window').width - 60, alignSelf: "center", marginVertical: 10 },
    input: {
        backgroundColor: "#0C0C0C",
        color: "#8E8E93",
        paddingLeft: 12,
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        height: 50,
    },

    selectBox: {
        width: Dimensions.get('window').width - 60,
        alignSelf: "center", marginVertical: 10,
        backgroundColor: "#0C0C0C",
        // color: "#8E8E93",
        paddingHorizontal: 12,
        // fontSize: 14,
        fontFamily: "Roboto-Regular",
        height: 50,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    selectBoxText: {
        color: "#8E8E93",
        fontSize: 14,
    },
    actionSheet: {
        height: Dimensions.get('window').height / 100 * 60, backgroundColor: "#0C0C0C", borderTopColor: "#eebf00",
        borderTopWidth: 1
    },
    months: {
        color: "#8E8E93",
        fontSize: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        textAlign: 'center',

    },
    colorCircle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "rgb(76, 76, 76)",
        marginHorizontal: 5

    },
    colorWheel: {
        marginLeft: 20,
    },
    colorRow: {
        width: Dimensions.get('window').width - 60, alignSelf: "center", marginVertical: 14,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: 'wrap'
    },
    colorText: {
        fontFamily: "Roboto-Regular", fontSize: 14,
        color: "#8E8E93",
        marginRight: 10,
    },
    dltBtn: {
        color: "#8E8E93",
        fontSize: RFPercentage(2),
        textAlign: "center",
        fontFamily: "Roboto-Regular",
        marginTop: 15
    },

    textArea: {
        backgroundColor: "#0C0C0C",
        color: "#8E8E93",
        paddingLeft: 12,
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        width: Dimensions.get('window').width - 60, alignSelf: "center", marginTop: -10, marginBottom: 10
    },
    checkBoxText: {
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        color: "#8E8E93"
    },
    checkBoxArea: {
        width: Dimensions.get('window').width - 60, alignSelf: "center", marginVertical: 10,
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    checkBox: {
        marginRight: 6,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    checkBoxBg: {
        width: 18,
        height: 18,
        backgroundColor: "#1F1F1F",
        borderWidth: 1,
        borderColor: "#3E3E3E",
        marginRight: 6,
        display: "flex", alignItems: 'center', justifyContent: 'center'
    }
})


export default styles