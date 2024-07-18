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
import AppHeader from '../../Header/header';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styles from '../../Styles/Assembler/Upload/uploadStyles'

class Upload extends React.Component {
    constructor() {
        super()

    }
    render() {
        console.log(this.props.navigation.isFocused())
        return (
            <View style={styles.container}>
                <AppHeader uploadScreen={true} navigation={this.props.navigation} />
                <View style={styles.box}>
                    <TouchableOpacity>
                        <Image
                            // style={{ width: 90, height: 130 }}
                            source={require('../../../assets/images/upload3.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.orLine}>
                    <Text style={styles.orLineLine}>

                    </Text>
                    <Text style={{ color: "#8E8E93", fontFamily: "Roboto-Regular", fontSize: 14 }}>OR</Text>
                    <Text style={styles.orLineLine}>

                    </Text>
                </View>
                <View style={styles.box2}>
                    <TouchableOpacity>
                        <Image
                            // style={{ width: 90, height: 130 }}
                            source={require('../../../assets/images/live.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};


export default Upload;


