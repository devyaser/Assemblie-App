import React from 'react'
import { ColorPicker, fromHsv } from 'react-native-color-picker'
import {
  View, Text, Dimensions
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../Styles/Assembler/Packages/colorPickerStyles'

class ColorPanel extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedColor: null
    }
  }

  handleSelect() {
    // console.log(this.state.selectedColor)
    this.props.navigation.navigate('editPackage', {
      selectedColor: this.state.selectedColor
    });
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <ColorPicker
          onColorChange={(color) => { this.setState({ selectedColor: fromHsv(color) }) }}
          style={styles.colorPicker}

        />
        <TouchableOpacity onPress={() => { this.handleSelect() }}>
          <Text style={styles.selectBtnTxt}>SELECT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
          <Text style={styles.cancelBtnTxt}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ColorPanel