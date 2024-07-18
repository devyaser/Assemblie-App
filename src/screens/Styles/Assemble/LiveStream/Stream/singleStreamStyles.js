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
    chatModalContainer:{
        width:Dimensions.get('window').width,
        margin:0,
        display:"flex",
        alignContent:"flex-end",
        justifyContent:"flex-end"
    },
    shareModalContainer:{
        margin:0,
        display:"flex",
        alignContent:"flex-end",
        justifyContent:"flex-end"
    },
    videoPlayer: {
        width: "100%",
        height: Dimensions.get('window').height / 100 * 30,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderBottomColor: "#eebf00",
        borderBottomWidth: 2,
    },
    hashTagsRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        marginHorizontal: 12,
        marginTop: 10
    },
    hashTag: {
        color: "#eebf00",
        fontSize: RFPercentage(2.5),

        marginRight: 8,
        fontFamily: "Roboto-Regular",

    },
    collapse: {
        marginHorizontal: 12,
    },
    collapseHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
    },
    description: {
        color: "#FFFFFF",
        fontFamily: "Roboto-Medium",
        fontSize: RFPercentage(2.6),
        
        marginBottom: 5

    },
    name: {
        fontFamily: "Roboto-Medium",
        color: "#eebf00",
        fontSize: RFPercentage(2.8),
    },
    count: {
        fontSize: RFPercentage(2.3),
        fontFamily: "Roboto-Regular",
        color: "#8E8E93",
    },
    rowBtnsContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 12,
        marginVertical: 14
    },
    rowBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    rowBtnTxt: {
        fontSize: RFPercentage(2.2),
        fontFamily: "Roboto-Regular",
        color: "#8E8E93",
        marginTop: 4
    },
    userRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#000000"
    },
    userRowBox1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    subscribeBtnContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    subscribedBtnTxt: {
        fontSize: RFPercentage(2.5),

        color: "#8E8E93",
        fontFamily: "Roboto-Regular",
        marginRight: 6
    },
    upNextStreamsContainer: {
        marginHorizontal: 12,
        marginTop: 15
    },
    upNextHeading: {
        color: "#ffffff",
        fontFamily: "Roboto-Regular",
        fontSize: RFPercentage(2.3),
        marginBottom: 14
    },
    actionSheet: {
        height: Dimensions.get('window').height / 100 * 68,
        backgroundColor: "#3A3A3A",
        borderRadius: 0,
    },
});


export default styles