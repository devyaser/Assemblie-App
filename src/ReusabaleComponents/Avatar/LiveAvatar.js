import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styles from '../../screens/Styles/ReusableComponents/Avatar/LiveAvatarStyles'

class LiveAvatar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.avatar} />
                <View style={styles.liveTag}>
                    <Text style={styles.liveTxt}>LIVE</Text>
                </View>
            </View>
        )
    }
}


export default LiveAvatar