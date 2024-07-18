import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1f1f1f",
    },

    madaBtn: {
        marginTop: 15,
        backgroundColor: "#FFFFFF",
        color: "#1F1F1F",
        width: Dimensions.get('window').width - 50,
        alignSelf: "center"
    },
    orLine: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 15
    },
    orLineLine: {
        backgroundColor: "#000000",
        width: "48%",
        height: 2
    },
    inputContainer: {
        borderBottomWidth: 0, alignSelf: "center",
        width: Dimensions.get('window').width - 50,
        marginBottom: 15
    },
    input: {
        backgroundColor: "#0C0C0C",
        color: "#8E8E93",
        paddingLeft: 12,
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        height: 50,
    },
    selectBox: {
        width: Dimensions.get('window').width - 50,
        alignSelf: "center", marginBottom: 10,
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
    categories: {
        color: "#8E8E93",
        fontSize: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        textAlign: 'center',
    },
    cancelBtn: {
        color: "#8E8E93",
        fontSize: RFPercentage(2),
        textAlign: "center",
        fontFamily: "Roboto-Regular",
        marginTop: 15
    },
    submitBtn: {
        width: Dimensions.get('window').width - 50,
        marginTop: 20,
        marginRight: "auto",
        marginLeft: "auto",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#EEBF00",
        fontFamily: "Roboto-Bold"
    },
    securedTxt:{
        color:"#8E8E93",
        fontFamily:"Roboto-Regular",
        fontSize:16,
        textAlign:"center",
        marginVertical:20,
    }
})

export default styles