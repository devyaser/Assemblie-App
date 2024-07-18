import {
    Dimensions,
    StyleSheet
} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    largeAvatar: {
        width: 130,
        height: 130,
        borderRadius: 80,
        elevation: 5
    },
    mediumAvatar:{
        width: 60, height: 60, borderRadius: 40, elevation:5
    },
    smallAvatar: {
        width: 90,
        height: 90,
        borderRadius: 50,
        elevation: 5
    },
    extraSmallAvatar: {
        width: 26,
        height: 26,
        borderRadius: 50,
        elevation: 5
    },
    editAvatar:{
        width: 140,
        height: 140,
        borderRadius: 90,
        alignSelf: 'center',
        marginTop: -80,
    },
    cardAvatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 14
    },

})


export default styles