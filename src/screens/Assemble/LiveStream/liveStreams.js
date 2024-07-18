import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native'
import LiveAvatar from '../../../ReusabaleComponents/Avatar/LiveAvatar'
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styles from '../../Styles/Assemble/LiveStream/liveStreamsStyles'


class LiveStream extends React.Component {
    constructor() {
        super();
        this.state = {
            streams: [
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/stream.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/stream.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/stream.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/stream.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/stream.png')
                },
            ],
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        {this.state.streams.map((v, i) => {
                            return <TouchableOpacity onPress={() => { this.props.navigation.navigate('singleStream') }}>
                                <View style={styles.card}>
                                    <ImageBackground source={v.thumbnail} style={styles.thumbnail}>
                                        <View style={styles.lap}>
                                            <View style={styles.liveTag}>
                                                <Text style={styles.liveTagTxt}>LIVE</Text>
                                            </View>

                                            <View style={styles.playBtn}>
                                                <TouchableOpacity>
                                                    <AntIcon name={'caretright'} size={24} color={"#fff"} />
                                                </TouchableOpacity>
                                            </View>

                                            <View style={styles.fullScreenBtn}>
                                                <TouchableOpacity>
                                                    <MaterialIcons name={'fullscreen'} size={30} color={"#fff"} />
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </ImageBackground>
                                    <View style={styles.userRow}>
                                        <View style={styles.userRowBox1}>
                                            <LiveAvatar image={v.avatar} size={'cardAvatar'} isLive={true} />
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

                        <TouchableOpacity>
                            <IonIcons size={28} color={"#8E8E93"} name={'ios-arrow-down'} style={styles.loadMoreIcon} />
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default LiveStream