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

} from 'react-native';

import { Button, Icon, Input, Item, Spinner } from 'native-base';
import AppFooter from '../../Footer/footer'
import {connect} from 'react-redux'
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton'
import styles from '../../Styles/Auth/Signin/signinStyles'
import {login} from '../../../actions/auth'

class Signin extends React.Component {
    constructor() {
        super()
        this.state = {
            showPassword: false,
            email:'',
            password:''
        }
    }

    handleSubmit = () => {
        const data = {
            email:this.state.email,
            password:this.state.password
        }
        this.props.login(data)
    }

    render() {
        // console.log(this.props.user)
        return (
            <ScrollView style={styles.container}>
                <View>

                    <View style={styles.box}>
                        <Button full light style={styles.buttonGoogle}>
                            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 14 }}>
                                <Image
                                    style={{ width: 20, height: 16 }}
                                    source={require('../../../assets/images/gmail.png')} />
                                <Text></Text> CONTINUE WITH GOOGLE</Text>
                        </Button>
                        <Button full style={styles.buttonFacebook}>
                            <Text style={{ color: "white", fontFamily: "Roboto-Medium", fontSize: 14 }}>
                                <Image
                                    style={{ width: 20, height: 16 }}
                                    source={require('../../../assets/images/facebook.png')} />
                                <Text></Text> CONTINUE WITH FACEBOOK</Text>
                        </Button>
                    </View>

                    <View style={styles.orLine}>
                        <Text style={styles.orLineLine}>

                        </Text>
                        <Text style={{ color: "#8E8E93", fontFamily: "Roboto-Regular", fontSize: 14 }}>OR</Text>
                        <Text style={styles.orLineLine}>

                        </Text>
                    </View>

                    <View style={styles.box}>

                        <Input placeholder='Email Address' style={styles.input} keyboardType="email-address" value={this.state.email} onChangeText={(email)=>this.setState({email})} />
                        
                        <View style={styles.passwordContainer}>
                            <Input placeholder='Password' style={styles.input} secureTextEntry={!this.state.showPassword} value={this.state.password} onChangeText={(password)=>this.setState({password})} />
                            
                            <Button style={styles.showHideBtn} onPress={()=>{this.setState({showPassword:!this.state.showPassword})}}>
                                <Image
                                    style={{ width: 20, height: 16 }}
                                    source={this.state.showPassword ? require('../../../assets/images/hide.png') : require('../../../assets/images/show.png')} /></Button>
                          
                        </View>

                        <TouchableOpacity><Text style={styles.forgotPassword}>Forgot Password?</Text></TouchableOpacity>
                        <View>
                           
                            <PrimaryButton title={'sign in'} style={{marginTop:30}} action={()=>{this.handleSubmit()}} />
                        </View>
                        <View style={{ textAlign: "center", marginTop: 30 }}>
                            <Text style={styles.accountStatus}>Don't have an account? </Text>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('signupas')}}><Text style={styles.otherFormBtn}>SIGN UP</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
};


const mapStateToProps = state => {
    return {
        user: state.user,
    }
}



export default connect(mapStateToProps,{login})(Signin);


