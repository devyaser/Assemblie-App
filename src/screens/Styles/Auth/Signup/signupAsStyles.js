import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'
import { Header } from 'react-navigation-stack';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height - Header.HEIGHT,
        backgroundColor: "#1F1F1F"
    },
    box: {
        height: (Dimensions.get('window').height - Header.HEIGHT) / 100 * 45,
        paddingVertical:10,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        width: Dimensions.get('window').width - 70,
        alignSelf:"center"
        // backgroundColor:"red"
    },
    orLine: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    orLineLine: {
        backgroundColor: "#000000",
        width: "48%",
        height: 2,

    },
   
    become: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Roboto-Bold",
        fontSize: RFPercentage(3.5)

    },
    type: {
        color: "#eebf00",
        textAlign: "center",
        fontFamily: "Roboto-Bold",
        fontSize: RFPercentage(5.5),
        marginTop: -8

    },
    slogan: {
        color: "#8E8E93",
        textAlign: "center",
        fontFamily: "Roboto-Light",
        fontSize: RFPercentage(2.2)
    }
})

export default styles