import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    button:{
        width: "100%",
        // marginTop: 30,
        // marginRight: "auto",
        // marginLeft: "auto",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#EEBF00",
        fontFamily: "Roboto-Bold"
    },
    text:{
         fontFamily: "Roboto-Bold", fontSize: RFPercentage(2.5),
         textTransform:"uppercase" 
    }
})

export default styles