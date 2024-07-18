import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Button } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ScrollIndicator from '@inteach/react-native-scroll-indicator'
import Avatar from '../../../ReusabaleComponents/Avatar/Avatar'
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton'
import styles from '../../Styles/Assembler/Packages/shareStyles'

class ShareWithSubscribers extends React.Component {
    constructor() {
        super();
        this.state = {
            subscribers: [
                {
                    name: "John Doe",
                    avatar: require('../../../assets/images/aboutPic.png')
                },
                {
                    name: "John Doe",
                    avatar: require('../../../assets/images/aboutPic.png')
                },
                {
                    name: "John Doe",
                    avatar: require('../../../assets/images/aboutPic.png')
                },
                {
                    name: "John Doe",
                    avatar: require('../../../assets/images/aboutPic.png')
                },
                {
                    name: "John Doe",
                    avatar: require('../../../assets/images/aboutPic.png')
                },
                {
                    name: "John Doe",
                    avatar: require('../../../assets/images/aboutPic.png')
                },
                {
                    name: "John Doe",
                    avatar: require('../../../assets/images/aboutPic.png')
                },
                {
                    name: "John Doe",
                    avatar: require('../../../assets/images/aboutPic.png')
                },
                {
                    name: "John Doe",
                    avatar: require('../../../assets/images/aboutPic.png')
                },
            ],
            selectAll: false
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.box}>

                    <View style={styles.head}>
                        <View style={styles.headBox}>
                            <Text style={styles.headBox1Text}>Subscribers</Text>
                            <Text style={styles.headBoxCount}>(124k)</Text>
                        </View>
                        <View style={styles.headBox}>
                            <Text style={styles.headBox2Text}>Select</Text>
                            <Text style={styles.headBoxCount}>(28)</Text>
                        </View>
                    </View>

                    <View style={styles.subscribersContainer}>
                        <ScrollView>
                            {this.state.subscribers.length ? this.state.subscribers.map((v, i) => {
                                return <View style={styles.row}>
                                    <View style={styles.box1}>
                                
                                            <Avatar image={v.avatar} size={'medium'} />
                                        <View style={{ marginLeft: 8 }}>
                                            <Text
                                                style={styles.name}>{v.name}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.box1}>
                                        <TouchableOpacity>
                                            <View style={[styles.checkBox, { backgroundColor: false ? "#52D54B" : "#8E8E93" }]}>
                                                <MaterialIcons color={'#1f1f1f'} size={16} name={'done'} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }) : <View>
                                    <Text style={styles.empty}>No Subscribers Yet</Text>
                                </View>}
                        </ScrollView>
                    </View>

                    <View style={{ marginTop: 0 }}>
                        <View style={styles.allBtn}>
                            <Text style={styles.allBtnTxt}>
                                Select All
                            </Text>
                            <TouchableOpacity onPress={() => { this.setState({ selectAll: !this.state.selectAll }) }}>
                                <View style={[styles.checkBox, { backgroundColor: this.state.selectAll ? "#52D54B" : "#8E8E93" }]}>
                                    <MaterialIcons color={'#1f1f1f'} size={16} name={'done'} />
                                </View>
                            </TouchableOpacity>
                        </View>
                      
                        <PrimaryButton title={'share'} style={{width:"90%", marginTop:10}} />
                    </View>

                </View>

            </View >
        )
    }
}


export default ShareWithSubscribers