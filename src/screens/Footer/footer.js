import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles/Footer/footerStyles'

class AppFooter extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Privacy Policy - Terms of Service All Trademarks</Text>
                <Text style={styles.text}>Thier Respective Owners @ 2008-2019 Assemblie</Text>
            </View>
        )
    }
}
export default AppFooter