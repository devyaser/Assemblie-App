import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'
import { Header } from 'react-navigation-stack'


const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        backgroundColor: "#1F1F1F"
    },
    box: {
        height: (Dimensions.get('window').height - (Header.HEIGHT + 60)) / 100 * 45,
        paddingBottom: 10,
        display: 'flex',
        // justifyContent: "center",
        justifyContent:"flex-end",
        alignItems: 'center'
        // backgroundColor:"red"
    },
    box2: {
        height: (Dimensions.get('window').height - (Header.HEIGHT + 60)) / 100 * 45,
        paddingTop: 10,
        display: 'flex',
        // justifyContent: "center",
        justifyContent:"flex-start",
        alignItems: 'center'
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
    text: {
        color: "#8f8e93",
        fontFamily: "Roboto-Medium",
        marginTop: 10,
        fontSize: 16
    }
})


export default styles