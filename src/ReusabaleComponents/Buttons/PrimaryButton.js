import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Button } from 'native-base'
import styles from '../../screens/Styles/ReusableComponents/Buttons/PrimaryButtonStyles'

class PrimaryButton extends React.Component {
    render() {
        return (
            <Button warning style={[styles.button, {...this.props.style}]} onPress={this.props.action}>
                <Text style={styles.text}>{this.props.title}</Text>
            </Button>
        )
    }
}



export default PrimaryButton