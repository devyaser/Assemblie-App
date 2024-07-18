import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import IonIcons from 'react-native-vector-icons/Ionicons'

import VideoCards from '../../../ReusabaleComponents/Cards/videosCards'
import VideoLists from '../../../ReusabaleComponents/Lists/videoLists'
import CategoryContentList from '../../../ReusabaleComponents/Lists/categoryContentLists'
import FloatingActionButton from '../../../ReusabaleComponents/Buttons/FloatingAction'
import Avatar from '../../../ReusabaleComponents/Avatar/Avatar'
import {RFPercentage} from 'react-native-responsive-fontsize'
import styles from '../../Styles/Assemble/Content/content'

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            uploads: [
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/2.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/3.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/4.png')
                }, {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/5.png')
                },
            ],
            recommended: [
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/2.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/3.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/4.png')
                }, {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/5.png')
                },
            ],
            topics: [
                {
                    name: "Music",
                    videosCount: '556',
                    image: require('../../../assets/images/1.png')
                },
                {
                    name: "Games",
                    videosCount: '346',
                    image: require('../../../assets/images/2.png')
                },
                {
                    name: "Science",
                    videosCount: '556',
                    image: require('../../../assets/images/3.png')
                },
                {
                    name: "Sports",
                    videosCount: '556',
                    image: require('../../../assets/images/4.png')
                },
            ]
        }
    }



    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Image source={require('../../../assets/images/contentCover.png')} style={styles.coverPic} />
                        <View style={styles.userRow}>
                            <View style={styles.userRowBox1}>
                                <Avatar image={require('../../../assets/images/aboutPic.png')} size={'medium'} />
                                <View style={{marginLeft:14}}>
                                    <Text style={styles.userName}>John Smith</Text>
                                    <Text style={styles.userSubsCount}>80k Subscribers</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('editProfile') }}>
                                    <FeatherIcon name={'edit-3'} color={'#909092'} size={24} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.roundBtnsContainer}>
                            <TouchableOpacity>
                                <View style={[styles.roundBtns, {
                                    backgroundColor: "none", borderWidth: 1,
                                    borderColor: "#eebf00"
                                }]}>
                                    <Text style={[styles.roundBtnsTxt, { color: "#eebf00", fontSize: 30 }]}> + </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.roundBtns}>
                                    <Text style={styles.roundBtnsTxt}> Stream </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.roundBtns}>
                                    <Text style={styles.roundBtnsTxt}> Videos </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.roundBtns}>
                                    <Text style={styles.roundBtnsTxt}> Stream2 </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.heading}>Uploads</Text>
                        <VideoCards data={this.state.uploads} />
                        <TouchableOpacity>
                            <IonIcons size={28} color={"#8E8E93"} name={'ios-arrow-down'} style={{ alignSelf: "center" }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.heading}>Recommended</Text>
                        <VideoLists data={this.state.recommended} />
                        <TouchableOpacity>
                            <IonIcons size={28} color={"#8E8E93"} name={'ios-arrow-down'} style={{ alignSelf: "center" }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.heading}>Topics</Text>
                        <CategoryContentList data={this.state.topics} />
                        <TouchableOpacity>
                            <IonIcons size={28} color={"#8E8E93"} name={'ios-arrow-down'} style={{ alignSelf: "center", marginBottom:20 }} />
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                {/* <FloatingActionButton /> */}
            </View>
        )
    }
}


export default Content