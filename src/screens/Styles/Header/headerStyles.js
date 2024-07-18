import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3A3A3A", margin:14, padding: 8, paddingLeft: 10, paddingRight: 10, borderRadius: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", elevation: 5
    },
    containerSearch: {
        backgroundColor: "#3A3A3A",
        margin: 14, 
        padding: 8, paddingLeft: 25, paddingRight: 25, borderRadius: 5, elevation: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    btnContainer: {
        display: "flex", flexDirection: "row", alignItems: "center"
    },
    input: {
        backgroundColor: "#1f1f1f",
        color: "#8E8E93",
        paddingLeft: 12,
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        height: 30,
        // borderTopLeftRadius: 20,
        // borderBottomLeftRadius: 20  
    },
    closeBtnContainer: {
        backgroundColor: "#1f1f1f", marginLeft: -10, display: 'flex', justifyContent: "center", alignItems: "center", 
        // marginRight: 20, 
        height:40,
        paddingRight: 10, borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    closeBtn: { width: 25, height: 25, backgroundColor: "#eebf00", display: 'flex', justifyContent: "center", alignItems: "center", borderRadius: 50 },
    backBtn:{
        height: 40,
        backgroundColor: "#1f1f1f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: -20,
        paddingHorizontal:10
    }
    
})

export default styles