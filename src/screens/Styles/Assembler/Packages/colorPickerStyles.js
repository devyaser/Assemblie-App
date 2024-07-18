import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
  container:{ width: "100%", height: "100%", backgroundColor: "#1f1f1f", paddingTop: 20 },
  colorPicker:{ height: Dimensions.get('window').height / 100 * 60, backgroundColor: "#1f1f1f", paddingBottom: 20 },
  selectBtnTxt:{
    width: 120,
    marginTop: 30,
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#EEBF00",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    padding: 14,
    fontSize: 18,
    borderRadius: 8,
    color: "#000000"
  },
  cancelBtnTxt:{
    width: 120,
    marginTop: 10,
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#EEBF00",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    padding: 14,
    fontSize: 18,
    borderRadius: 8,
    color: "#8E8E93"
  }
})

export default styles