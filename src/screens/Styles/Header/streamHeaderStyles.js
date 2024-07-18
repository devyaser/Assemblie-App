import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingRight: 6,
        paddingLeft: 14
    },
    streamBtns: {
        backgroundColor: "#eebf00",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 6,
    },
    streamBtnsTxt: {
        color: "#000000",
        fontFamily: "Roboto-Regular",
        fontSize: 13,
        fontSize:RFPercentage(1.8)
    },
    titleContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontFamily: "Roboto-Regular",
        color: "#eebf00",
        fontSize: 20,
        fontSize:RFPercentage(3),

        marginLeft: 8,
        textTransform: 'uppercase'
    },
})

export default styles