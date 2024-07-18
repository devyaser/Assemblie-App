import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'


const styles = StyleSheet.create({

    scrollView: {
        backgroundColor: "#1F1F1F",
    },
    header: {
        height: 200,
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },

    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    editAvatar: {
        backgroundColor: "#eebf00", width: 40, height: 40, borderRadius: 80, display: "flex", justifyContent: "center", alignItems: "center",
        // marginLeft:120,
        alignSelf: 'center',
        marginTop: -40,
        marginLeft: 90,
        // elevation:5

    },
    line: {
        backgroundColor: "#0c0c0c",
        height: 1.5,
        // marginVertical:0
    },
    head: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    headText: {
        color: "#eebf00",
        fontSize: 16,
        fontFamily: "Roboto-Medium"
    },
    formContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    input: {
        width: "100%",
        backgroundColor: "#0C0C0C",
        color: "#8E8E93",
        paddingLeft: 12,
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        height: 50
    },
    inputLabel: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        marginVertical: 8
    },
    showHideBtn: {
        height: 50,
        backgroundColor: "#0C0C0C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    passwordContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 15
    },
    aboutText: {
        color: "#8E8E93",
        fontSize: 14,
        fontFamily: "Roboto-Regular"
    },
    aboutContainer: {
        maxHeight: 350, backgroundColor: "#0C0C0C", padding: 10, marginVertical: 10
    },
    socialContainer: { marginRight: 10, width: 60, height: 60, borderRadius: 50, borderWidth: 1, borderColor: "#8f8e93", display: "flex", justifyContent: "center", alignItems: "center" },
    socialBox: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 12
    },
    readMoreBtn: {
        width: 100,
        borderWidth: 1,
        borderColor: "#8f8e93",
        padding: 10,
        marginTop: 12
    },
    readMoreText: {
        color: "#8f8e93",
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Roboto-Medium"
    },
    price: {
        color: "#eebf00",
        fontSize: 32,
        fontFamily: "Roboto-Bold"
    },
    offerName: {
        color: "#fff",
        fontFamily: "Roboto-Regular",
        fontSize: 18
    },
    offerBoxes: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#0c0c0c",
        paddingVertical: 12
    }
});

export default styles