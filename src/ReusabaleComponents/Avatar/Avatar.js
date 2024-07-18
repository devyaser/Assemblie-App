import React, { useState } from 'react'
import {
    Image,
    StyleSheet
} from 'react-native'
import styles from '../../screens/Styles/ReusableComponents/Avatar/AvatarStyles'

class Avatar extends React.Component {
    render() {
        return (
            <Image source={this.props.image} style={
                (this.props.size=="large" && styles.largeAvatar) || (this.props.size==="small" && styles.smallAvatar) || (this.props.size==='extraSmall' && styles.extraSmallAvatar) || (this.props.size==='editAvatar' && styles.editAvatar) || (this.props.size==="medium" && styles.mediumAvatar) || (this.props.size==="cardAvatar" && styles.cardAvatar)
            } /> 
        )
    }
}


export default Avatar