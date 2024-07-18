import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Keyboard
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Input } from 'react-native-elements'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Avatar from '../../../../../ReusabaleComponents/Avatar/Avatar';
import styles from '../../../../Styles/Assemble/LiveStream/Stream/LiveChat/liveChatStyles'
import EmojiSelector, { Categories } from "react-native-emoji-selector";

class LiveChat extends Component {
    constructor() {
        super();
        this.state = {
            isOpenEmojiPanel: false,
            message: '',
            chats: [
                {
                    name: "John Doe",
                    timeStamp: "2 minutes ago",
                    avatar: require('../../../../../assets/images/aboutPic.png'),
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                },
                {
                    name: "John Doe",
                    timeStamp: "2 minutes ago",
                    avatar: require('../../../../../assets/images/aboutPic.png'),
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                },
                {
                    name: "John Doe",
                    timeStamp: "2 minutes ago",
                    avatar: require('../../../../../assets/images/aboutPic.png'),
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    name: "John Doe",
                    timeStamp: "2 minutes ago",
                    avatar: require('../../../../../assets/images/aboutPic.png'),
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                },
                {
                    name: "John Doe",
                    timeStamp: "2 minutes ago",
                    avatar: require('../../../../../assets/images/aboutPic.png'),
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                },
                {
                    name: "John Doe",
                    timeStamp: "2 minutes ago",
                    avatar: require('../../../../../assets/images/aboutPic.png'),
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    name: "John Doe",
                    timeStamp: "2 minutes ago",
                    avatar: require('../../../../../assets/images/aboutPic.png'),
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                },
                {
                    name: "John Doe",
                    timeStamp: "2 minutes ago",
                    avatar: require('../../../../../assets/images/aboutPic.png'),
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                },
                {
                    name: "John Doe",
                    timeStamp: "2 minutes ago",
                    avatar: require('../../../../../assets/images/aboutPic.png'),
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }

            ]
        }
    }



    render() {
        return (
            <View style={styles.container}>
                {!this.state.isOpenEmojiPanel && <View style={styles.box1}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.heading}>LIVE CHAT</Text>
                            <View style={styles.chatsCount}>
                                <Text style={styles.chatsCountTxt}>Chat's</Text>
                                <FontAwesome5 name={'users'} color={'#8E8E93'} size={16} style={{ marginHorizontal: 8 }} />
                                <Text style={styles.chatsCountTxt}>2.2K</Text>
                            </View>
                        </View>
                        <View style={styles.headerActions}>
                            <TouchableOpacity>
                                <Ionicons name={'md-settings'} color={'#8E8E93'} size={25} style={{ marginRight: 10 }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.close() }}>
                                <Ionicons name={'md-close'} color={'#eebf00'} size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.chatBody}>
                        <ScrollView>
                            <View style={{
                                padding: 10
                            }}>
                                {this.state.chats.map((v, i) => {
                                    return <View style={styles.commentBox}>
                                        <View style={styles.commentRow}>
                                            <Avatar image={v.avatar} size={'medium'} />
                                            <View style={styles.messageBody}>
                                                <Text style={styles.name}>{v.name} - {v.timeStamp}</Text>
                                                <Text style={styles.message}>{v.message}</Text>
                                            </View>
                                        </View>
                                    </View>
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>}





                <View style={styles.footer}>
                    <View style={styles.sendMessageInputContainer}>
                        <View style={styles.sendMessageInputBox}>
                            <Input
                                placeholder='Type Message'
                                placeholderTextColor='#8E8E93'
                                inputStyle={styles.input}
                                inputContainerStyle={styles.inputContainer}
                                onChange={(text) => { this.setState(text) }}
                                onFocus={() => {
                                    this.setState({ isOpenEmojiPanel: false })
                                }}
                            />
                        </View>
                        <View style={styles.sendMessageInputActions}>
                            <View style={{width:"50%"}}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({ isOpenEmojiPanel: !this.state.isOpenEmojiPanel })
                                    Keyboard.dismiss()
                                }}>
                                    <FontAwesome name={'smile-o'} color={'#8E8E93'} size={24} style={{ marginRight: 14 }} />

                                </TouchableOpacity>
                            </View>
                            <View style={{width:"50%"}}>
                                <TouchableOpacity>
                                    <FontAwesome name={'send'} color={'#eebf00'} size={22} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {this.state.isOpenEmojiPanel && <EmojiSelector
                    category={Categories.all}
                    onEmojiSelected={emoji => console.log(emoji)}
                    showSearchBar={false}
                    theme={'#eebf00'}

                    showTabs={false}
                />}

            </View>
        );
    }
}


export default LiveChat;
