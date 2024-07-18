import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native'
// Importing Icons

import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontIcons from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

import Modal from 'react-native-modal';


import DonationModalContent from '../../screens/Assemble/ModalContents/donation'
import StreamHostModalContent from '../../screens/Assemble/ModalContents/streamHost'
import { TouchableRipple } from 'react-native-paper';
import {RFPercentage} from 'react-native-responsive-fontsize'
import styles from '../Styles/Header/streamHeaderStyles'

class StreamHeader extends Component {
    constructor() {
        super();
        this.state = {
            visibleDonationModal: false,
            visibleStreamHostModal: false
        }
    }



    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.titleContainer}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            {Platform.OS === 'ios' ? <IonIcons name={'ios-arrow-back'} color={'#eebf00'} size={26} /> :<IonIcons name={'md-arrow-back'} color={'#eebf00'} size={26} />}
                        </TouchableOpacity>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 10
                    }}>
                        <TouchableOpacity onPress={() => { this.setState({ visibleStreamHostModal: !this.state.visibleStreamHostModal }) }}>
                            <View style={styles.streamBtns}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <MatIcons name={'video-vintage'} color={'#000000'} size={RFPercentage(2)} />
                                    <Text style={styles.streamBtnsTxt}> STREAM HOST</Text>
                                </View>
                            </View>
                        </TouchableOpacity>



                        <TouchableOpacity onPress={() => { this.setState({ visibleDonationModal: !this.state.visibleDonationModal }) }}>
                            <View style={[styles.streamBtns, { backgroundColor: "#34A6FF" }]}>
                                <Text style={styles.streamBtnsTxt}>DONATION</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 8 }}>
                            <FontistoIcons name='more-v-a'
                                color="#fff"
                                size={22} />
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Donation Modal */}

                <Modal isVisible={this.state.visibleDonationModal} onBackdropPress={() => { this.setState({ visibleDonationModal: false }) }}>
                    <DonationModalContent close={() => { this.setState({ visibleDonationModal: false }) }} />
                </Modal>

                {/* Stream Host Modal */}

                <Modal isVisible={this.state.visibleStreamHostModal} onBackdropPress={() => { this.setState({ visibleStreamHostModal: false }) }}>
                    <StreamHostModalContent close={() => { this.setState({ visibleStreamHostModal: false }) }} />
                </Modal>
            </View>
        );
    }
}

export default StreamHeader;