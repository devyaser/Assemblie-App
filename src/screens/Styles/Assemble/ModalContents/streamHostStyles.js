import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#3A3A3A",
        width: Dimensions.get('window').width - 40
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderColor: "#000",
        borderBottomWidth: 1
    },
    headerTitle: {
        color: "#eebf00",
        fontFamily: "Roboto-Medium",
        fontSize: 20
    },
    name: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Roboto-Medium",
        marginTop: 6
    },
    inputContainer: {
        borderBottomWidth: 0, alignSelf: "center",
        width: Dimensions.get('window').width - 80,
        marginVertical: 18,
    },
    input: {
        backgroundColor: "#0C0C0C",
        color: "#8E8E93",
        paddingLeft: 12,
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        height: 50,
        textAlign:"center"
    },
    content: {
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default styles