import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,


} from 'react-native';

import { Button, Icon, Input, Item, Spinner } from 'native-base';
import AppFooter from '../../Footer/footer'
import { RFPercentage } from 'react-native-responsive-fontsize';
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton';
import styles from '../../Styles/Auth/Signup/signupAsStyles'

class SignupAs extends React.Component {
    constructor() {
        super()
        this.state = {
            showPassword: false
        }
    }
    render() {
        return (
    
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Image
                            style={{ width: 60, height: 60, marginLeft: "auto", marginRight: "auto", marginBottom: 10 }}
                            source={require('../../../assets/images/lightLogo2.png')} />
                        <Text style={styles.become}>BECOME AN</Text>
                        <Text style={styles.type}>ASSEMBLER</Text>
                        <Text style={styles.slogan}>Offer what you have to the world.</Text>
                       
                        <PrimaryButton title={'join now'} action={() => { this.props.navigation.navigate('conditions', {
                            userType:2
                        }) }} style={{marginTop:15}} />
                    </View>
                    <View style={styles.orLine}>
                        <Text style={styles.orLineLine}>

                        </Text>
                        <Text style={{ color: "#8E8E93", fontFamily: "Roboto-Regular", fontSize: 14 }}>OR</Text>
                        <Text style={styles.orLineLine}>

                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Image
                            style={{ width: 60, height: 60, marginLeft: "auto", marginRight: "auto", marginBottom: 10}}
                            source={require('../../../assets/images/lightLogo2.png')} />
                        <Text style={styles.become}>BECOME AN</Text>
                        <Text style={styles.type}>ASSEMBLE</Text>
                        <Text style={styles.slogan}>Support and be close to whom you love.</Text>
                       
                        <PrimaryButton title={'join now'} action={() => { this.props.navigation.navigate('conditions', {
                            userType:1
                        }) }} style={{marginTop:15}} />

                    </View>
                </View>
    
        );
    }
};




export default SignupAs;


