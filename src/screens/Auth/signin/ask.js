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
    Content,
    Accordion,
    Dimensions
} from 'react-native';

import { Button, Icon, Input, Item, Spinner } from 'native-base';
import Accordions from './accordion'
import AppFooter from '../../Footer/footer'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import {Header} from 'react-navigation-stack'
import styles from '../../Styles/Auth/Signin/askStyles'

class AskSignin extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewContainer}>
                    <View style={styles.box1}>
                        <Image
                            style={{ width: 150, height: 100 }}
                            source={require('../../../assets/images/conatctCard.png')} />

                        <View style={styles.box1Child}>
                            <Text style={{ color: "#8E8E93", marginTop: 30, fontFamily: "Roboto-Regular", fontSize: 16 }}>Sign in now to create your own account</Text>
                            <Button bordered warning style={styles.buttonSignin} onPress={() => { this.props.navigation.navigate("signin") }}>
                                <EvilIcon name='user' color='#eebf00' size={30} />

                                <Text style={styles.buttonSigninText}>

                                    SIGN IN</Text>
                            </Button>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#000000", padding: 1, marginBottom: 20 }}>

                    </View>
                    <View>
                        <Accordions />
                    </View>

                    <View>
                        <AppFooter />
                    </View>
                </View>

            </ScrollView>
        );
    }
};



export default AskSignin;


