import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'
import { Header } from 'react-navigation-stack';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height - Header.HEIGHT,
        backgroundColor: "#1F1F1F",
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: "center"
    },
    conditionsContainer: {
        height: (Dimensions.get('window').height - Header.HEIGHT) / 100 * 70,
        width: Dimensions.get('window').width - 40,
        backgroundColor: "#0c0c0c",
        // padding:10,
        paddingHorizontal: 15,
    },
    condition: {
        color: "#8E8E93",
        marginVertical: 8,
        fontFamily: "Roboto-Regular",
        fontSize: RFPercentage(2.2)
    },
   
    cancelBtn: {
        color: "#8E8E93",
        fontSize: RFPercentage(2),
        textAlign: "center",
        fontFamily: "Roboto-Regular",
        marginTop:15
    },
    checkBox:{width:25, height:25, backgroundColor:"#0c0c0c", display:"flex", justifyContent:"center", alignItems:"center"},
    agree:{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"},
    agreeText:{
        color: "#8E8E93",
        fontFamily:"Roboto-Regular",
        fontSize:RFPercentage(2),
        marginLeft:8
    }
})

export default styles