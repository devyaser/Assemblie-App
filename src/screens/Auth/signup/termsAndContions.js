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

import { Button, Input, Item, Spinner } from 'native-base';
import AppFooter from '../../Footer/footer'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton'
import styles from '../../Styles/Auth/Signup/termsAndConditionsStyles'


class Conditions extends React.Component {
    constructor() {
        super()
        this.state = {
            showPassword: false,
            agree:false
        }
    }
    render() {
        const {userType} = this.props.route.params 
        return (
            <View style={styles.container}>
                <View style={styles.conditionsContainer}>
                    <ScrollView>
                        <Text style={styles.condition}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text style={styles.condition}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text style={styles.condition}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text style={styles.condition}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text style={styles.condition}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </ScrollView>
                </View>
        
                <View style={{marginVertical:15, width: Dimensions.get('window').width - 70,}}>
                    <View style={styles.agree}>
                        <TouchableOpacity onPress={()=>{this.setState({agree:!this.state.agree})}}>
                            <View style={styles.checkBox}>
                                {this.state.agree && <Icon name='check' size={18} color='#eebf00' />}
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.agreeText}>
                            I agree to the Terms and Conditions
                        </Text>
                    </View>

                    
                    <PrimaryButton action={() => { this.props.navigation.navigate('signup', {
                        signupType:userType
                    }) }} title={'accept'} style={{marginTop:15}} />

                    <TouchableOpacity>
                        <Text style={styles.cancelBtn}>
                            CANCEL
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};




export default Conditions;


