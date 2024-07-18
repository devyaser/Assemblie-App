import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
   container:{ width: "90%", alignSelf: "center", marginTop: -70 }, 
   card:{ marginBottom: 20 },
   cardActions:{ display: "flex", justifyContent: "space-between", backgroundColor: "#3C3C3C" },
   circle:{ width: 9, height: 9 },
   eye:{ width: 15, height: 9 },
   name:{ color: "white", fontSize: 13, fontFamily: "Roboto-Regular" },
   videosCount:{ color: "white", fontFamily: "Roboto-Light", fontSize: 11 }
})

export default styles