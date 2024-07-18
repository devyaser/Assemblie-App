import {
    Dimensions,
    StyleSheet
} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3A3A3A",
        display: "flex",
        // justifyContent: "space-between",
        height: (Dimensions.get('window').height / 100 * 70) - 80
    },
    box1: { height: "80%", },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 16,
        height: "20%"

    },
    footer: {
        paddingVertical: 10,
        // marginTop: 10
    },
    chatBody: {
        backgroundColor: "#1F1F1F",
        height: "80%",
    },
    heading: {
        color: "#eebf00",
        fontFamily: "Roboto-Regular",
        fontSize: RFPercentage(2.8)
    },
    chatsCount: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    chatsCountTxt: {
        color: "#8E8E93",
        fontSize: RFPercentage(2),
        fontFamily: "Roboto-Regular"
    },
    headerActions: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    inputContainer: {
        borderBottomWidth: 0,
        margin: -10,
    },
    input: {
        backgroundColor: "#0C0C0C",
        color: "#8E8E93",
        paddingLeft: 12,
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        height: 50,

    },
    sendMessageInputContainer: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10

    },
    sendMessageInputBox: {
        width: "80%"
    },
    sendMessageInputActions: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        backgroundColor: "#0C0C0C",
        // paddingHorizontal: 20,
        width: "20%",
    },
    name: {
        fontFamily: "Roboto-Regular",
        color: "#8E8E93",
        fontSize: 14,

    },
    message: {
        fontFamily: "Roboto-Regular",
        color: "#fff",
        fontSize: 14,
    },
    messageBody: {
        marginLeft: 10,
        width: "90%",
        marginRight: 40
    },
    commentRow:{
        display:"flex",
        flexDirection:"row",
    },
    commentBox:{marginVertical:5},
})
export default styles