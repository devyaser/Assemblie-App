import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from 'react-native'
import StreamHeader from '../../../Header/streamHeader'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AvatarLive from '../../../../ReusabaleComponents/Avatar/LiveAvatar'
import VideoLists from '../../../../ReusabaleComponents/Lists/videoLists'
import IonIcons from 'react-native-vector-icons/Ionicons'
import FloatingActionButton from '../../../../ReusabaleComponents/Buttons/FloatingAction'
import ActionSheet from 'react-native-actions-sheet'
import LiveChat from '../Stream/LiveChat/liveChat'
import Modal from 'react-native-modal';
import ShareStreamContent from '../../ModalContents/shareStream'
// import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-controls';
import VideoPlayer from 'react-native-video-player'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styles from '../../../Styles/Assemble/LiveStream/Stream/singleStreamStyles'

class SingleStream extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
            isOpenShareModal: false,
            isOpenLiveChat:true,
            upNext: [
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../../assets/images/2.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../../assets/images/3.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../../assets/images/4.png')
                }, {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../../assets/images/5.png')
                },
            ],
            stream: {
                name: "John Smith",
                description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                avatar: require('../../../../assets/images/aboutPic.png'),
                views: '260k',
                timeElapsed: "2 days ago",
                thumbnail: require('../../../../assets/images/stream.png'),
                isLive: true,
                likes: "1.7k",
                disLikes: "98",
                subscribed: true,
                subscribers: "78k",
                hashTags: ['#Video', "#Awsome", "#Live", "#Gaming"]
            },
        }
    }



    render() {
        let actionSheet;

        return (
            <View style={styles.container}>
                <StreamHeader title={"john doe"} navigation={this.props.navigation} />

                {/* <View style={styles.videoPlayer}>
                </View> */}
                {/* <Video source={require('../../../../assets/dummy.mp4')}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                   
                    style={styles.videoPlayer} /> */}

                <VideoPlayer
                    video={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                    videoWidth={Dimensions.get('window').width}
                    videoHeight={Dimensions.get('window').height / 100 * 30}
                // thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                />

                <ScrollView>

                    <View>
                        <View style={styles.hashTagsRow}>

                            {this.state.stream.hashTags.map((v, i) => {
                                return <Text style={styles.hashTag}>
                                    {v}
                                </Text>
                            })}
                        </View>

                        <View style={styles.collapse}>
                            <Collapse onToggle={(isCollapsed) => this.setState({ collapsed: isCollapsed })}>
                                <CollapseHeader>
                                    <View style={styles.collapseHeader}>
                                        <View style={{ width: "90%" }}>
                                            <Text style={styles.description}>{this.state.stream.description && this.state.stream.description.length > 60 ? this.state.stream.description.slice(0, 60) + "....." : this.state.stream.description}</Text>
                                            <Text style={styles.count}>{this.state.stream.views + ' Views - ' + this.state.stream.timeElapsed}</Text>
                                        </View>

                                        <View>
                                            <AntIcon name={this.state.collapsed ? 'caretup' : 'caretdown'} color={'#8E8E93'} size={14} />
                                        </View>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                    <View style={{ marginVertical: 10 }}>
                                        <Text style={{ color: "white", fontSize: 18 }}>Lorem ipsum is the dummy text.......</Text>
                                    </View>
                                </CollapseBody>
                            </Collapse>
                        </View>


                        <View style={styles.rowBtnsContainer}>
                            <TouchableOpacity>
                                <View style={styles.rowBtn}>
                                    <AntIcon name={'like1'} color={'#8E8E93'} size={22} />
                                    <Text style={styles.rowBtnTxt}>{this.state.stream.likes}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.rowBtn}>
                                    <AntIcon name={'dislike1'} color={'#8E8E93'} size={22} />
                                    <Text style={styles.rowBtnTxt}>{this.state.stream.disLikes}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.setState({ isOpenShareModal: true }) }}>
                                <View style={styles.rowBtn} >
                                    <FontIcon name={'share'} color={'#8E8E93'} size={22} />
                                    <Text style={styles.rowBtnTxt}>Share</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.setState({ isOpenLiveChat: true }) }}>
                                <View style={styles.rowBtn}>
                                    <IonIcons name={'md-chatboxes'} color={'#8E8E93'} size={26} />
                                    <Text style={styles.rowBtnTxt}>Live Chat</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.rowBtn}>
                                    <MaterialCommunityIcons name={'playlist-plus'} size={28} color={'#8E8E93'} />
                                    <Text style={[styles.rowBtnTxt, { marginTop: 2 }]}>Save</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.rowBtn}>
                                    <FontIcon name={'flag'} color={'#8E8E93'} size={22} />
                                    <Text style={styles.rowBtnTxt}>Report</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.userRow}>
                            <View style={styles.userRowBox1}>
                                <AvatarLive image={this.state.stream.avatar} />
                                <View >
                                    <Text style={styles.name}>{this.state.stream.name}</Text>
                                    <Text style={styles.count}>{this.state.stream.subscribers} Subscribers

                                </Text>

                                </View>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <View style={styles.subscribeBtnContainer}>
                                        <Text style={styles.subscribedBtnTxt}>{this.state.stream.subscribed ? "Subscribed" : "Subscribe"}
                                        </Text>
                                        <MaterialCommunityIcons name={'bell-ring'} color={'#8E8E93'} size={22} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.upNextStreamsContainer}>
                            <Text style={styles.upNextHeading}>Up Next</Text>
                            <VideoLists data={this.state.upNext} isLiveStreams={true} />
                            <TouchableOpacity>
                                <IonIcons size={28} color={"#8E8E93"} name={'ios-arrow-down'} style={{ alignSelf: "center", marginBottom: 30 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                {/* Live Chat Action Sheet */}

                {/* <ActionSheet ref={ref => (actionSheet = ref)}
                    openAnimationSpeed={50}
                    closeOnTouchBackdrop={false}
                    overlayColor={'transparent'}
                    defaultOverlayOpacity={0}
                    containerStyle={styles.actionSheet}
                // extraScroll={1}
                >
                    <LiveChat close={() => { actionSheet.setModalVisible() }} />
                </ActionSheet> */}





                {/* Live Chat Modal */}


                <Modal hasBackdrop={false} isVisible={this.state.isOpenLiveChat}
                    style={styles.chatModalContainer}
                >
                    <LiveChat close={() => { this.setState({isOpenLiveChat:false}) }} />


                </Modal>


                {/* Share Stream Modal */}
                
                <Modal style={styles.shareModalContainer} isVisible={this.state.isOpenShareModal} onBackdropPress={() => { this.setState({ isOpenShareModal: false }) }}>
                    <ShareStreamContent close={() => { this.setState({ isOpenShareModal: false }) }} />
                            
                </Modal>

                {/* <FloatingActionButton /> */}
            </View>
        );
    }
}


export default SingleStream;