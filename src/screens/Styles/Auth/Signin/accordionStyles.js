import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    textBtn:{
        color:"#fff",
        fontSize:16,
        fontFamily:"Roboto-Regular",
        marginVertical:4
    },
    dual:{display:"flex", flexDirection:'row', justifyContent:"space-between", alignItems:"center"}
})

export default styles