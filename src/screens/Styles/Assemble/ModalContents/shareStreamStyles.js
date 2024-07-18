import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'


const styles = StyleSheet.create({
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
})

export default styles