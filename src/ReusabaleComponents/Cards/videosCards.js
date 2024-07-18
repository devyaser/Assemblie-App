import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import Avatar from '../../ReusabaleComponents/Avatar/Avatar'
import styles from '../../screens/Styles/ReusableComponents/Cards/videosCardsStyles'

class VideoCards extends React.Component {
    constructor() {
        super()
        
    }
    render() {
        console.log(Dimensions.get('window').width)
        return (
            <View>
                {this.props.data.map((v, i) => {
                    return <TouchableOpacity>
                        <View style={styles.card}>
                            <Image source={v.thumbnail} style={styles.thumbnail} />

                            <View style={styles.userRow}>
                                <View style={styles.userRowBox1}>
                                    {/* <Image source={v.avatar} style={styles.avatar} /> */}
                                    <Avatar image={v.avatar} size={'cardAvatar'} />
                                    <View>
                                        <Text style={styles.description}>{v.description && v.description.length > 50 ? v.description.slice(0, 50) + "....." : v.description}</Text>
                                        <Text style={styles.userSubsCount}>{v.name + "-" + v.views + "Views -" + v.timeElapsed}</Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <FontistoIcons name='more-v-a'
                                            color="#8E8E93"
                                            size={25} style={{ marginTop: 5 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                })}
            </View>
        )
    }
}


export default VideoCards