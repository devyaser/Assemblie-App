import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#1f1f1f"
    },
    defaultText:{
        color:"#eebf00",
        alignSelf:"center",
        marginTop:20,
        fontSize:RFPercentage(2),
        fontFamily:"Roboto-Regular"
    }
    
})

export default styles