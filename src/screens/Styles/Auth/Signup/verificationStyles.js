import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F1F1F",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    box: {
         marginVertical: 20,  alignSelf:"center" ,
        width:Dimensions.get('window').width - 60,
        // backgroundColor:"blue", 
    },
   
    become: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        fontSize: RFPercentage(5.2),
        marginVertical: 4
    },
    type: {
        color: "#eebf00",
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        fontSize: RFPercentage(5.2),
        marginTop: -8

    },
    info: {
        color: "#8E8E93",
        textAlign: "center",
        fontFamily: "Roboto-Regular",
        fontSize: RFPercentage(2.2),
        marginVertical: 4,
        width: 260,
        alignSelf: "center"
    },
    input: {
        // width: 200,
        backgroundColor: "#0C0C0C",
        width:Dimensions.get('window').width,
        color: "#8E8E93",
        // paddingLeft: 12,
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        height: 50,
        borderBottomColor: 'red',
        textAlign: 'center'
    },
})


export default styles