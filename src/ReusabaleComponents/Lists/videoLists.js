import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native'
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styles from '../../screens/Styles/ReusableComponents/Lists/videoListsStyles'

class VideoLists extends React.Component {
    render() {
        return (
            <View>
                {this.props.data.map((v, i) => {
                    return <View style={styles.row}>
                        <TouchableOpacity>
                            <View style={styles.box1}>
                                {!this.props.isLiveStreams ? <Image source={v.thumbnail} style={styles.thumbnail} /> :
                                    <ImageBackground source={v.thumbnail} style={[styles.thumbnail, { borderWidth: 2, borderColor: "#eebf00" }]}>
                                        <View style={styles.liveTag}>
                                            <Text style={styles.liveTxt}>LIVE</Text>
                                        </View>
                                    </ImageBackground>}
                                <View style={styles.box1box}>
                                    <Text style={styles.description}>{v.description && v.description.length > 45 ? v.description.slice(0, 45) + "....." : v.description}</Text>
                                    <Text style={styles.userSubsCount}>{v.timeElapsed + "-" + v.views + "Views"}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View>
                            <TouchableOpacity>
                                <FontistoIcons name='more-v-a'
                                    color="#8E8E93"
                                    size={25} style={{ marginTop: 5 }} />
                            </TouchableOpacity>
                        </View>

                    </View>
                })
}
            </View >
        )
    }
}


export default VideoLists