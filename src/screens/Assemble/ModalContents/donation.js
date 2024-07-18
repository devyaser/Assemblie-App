import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AntIcons from 'react-native-vector-icons/AntDesign'
import Avatar from '../../../ReusabaleComponents/Avatar/Avatar'
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton'
import { Input } from 'react-native-elements';
import styles from '../../Styles/Assemble/ModalContents/donationStyles'


class DonationModalContent extends Component {
    constructor() {
        super();
        this.state = {
            amount: ''
        }
    }

    render() {
        return (
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>DONATION</Text>
                    <TouchableOpacity onPress={this.props.close}>
                        <AntIcons name={'close'} color={'#eebf00'} size={24} />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Avatar image={require('../../../assets/images/aboutPic.png')} size={'small'} />
                    <Text style={styles.name}>
                        John Doe
                    </Text>

                    <Input
                        placeholder='Enter $0.00'
                        placeholderTextColor='#8E8E93'
                        inputStyle={styles.input}
                        inputContainerStyle={styles.inputContainer}
                        keyboardType='numeric'
                    />


                    <PrimaryButton title={'Donate'} action={() => { console.log('Donating') }} style={{width: Dimensions.get('window').width - 80, marginBottom: 20 }} />
                </View>

            </View>
        );
    }
}


export default DonationModalContent