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
    TextInput


} from 'react-native';

import { Button, Icon, Item, Spinner } from 'native-base';
import AppFooter from '../../Footer/footer'
import { Header } from 'react-navigation-stack';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Input } from 'react-native-elements';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton'
import styles from '../../Styles/Auth/Signup/verificationStyles'
import {verifyUser} from '../../../actions/auth'
import {connect} from 'react-redux'
import axios from 'axios'


class Verification extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            code:null,
        }
    }
    handleSubmit() {
        const form = {
            code:this.state.code,
            user_id:this.props.user.user_id,
        }
        this.props.verifyUser(form)
    }


    handleCode = async() => {
        console.log(this.props.user.user_id)
        let body = {
            user_id:this.props.user.user_id
        }
        await axios({
            method:'POST',
            url:'/api/users/resendcode',
            data:body
        }).then(res=>{
            console.log('RESEND CODE',res)
        }).catch(err=>{
            console.log(err)
        })
    }



    render() {
        
        return (
            <View style={styles.container}>

                <View>
                    <View>
                        <Image
                            style={{ width: 80, height: 80, marginLeft: "auto", marginRight: "auto", marginVertical: 6 }}
                            source={require('../../../assets/images/lightLogo2.png')} />

                        <Text style={styles.become}>ENTER A</Text>
                        <Text style={styles.type}>VERIFICATION CODE</Text>
                        <Text style={styles.info}>Get a verification code from your Email Address!</Text>
                    </View>
                    <View style={styles.box}>
                        <Input
                            placeholder='Enter Code'
                            placeholderTextColor='#8E8E93'
                            inputStyle={styles.input}
                            value={this.state.code}
                            onChangeText={(code)=>this.setState({code})}
                            keyboardType='numeric'
                            inputContainerStyle={{ borderBottomWidth: 0}}
                        />
                        {/* <Button warning style={styles.joinBtn} onPress={this.handleSubmit}>
                            <Text style={{ fontFamily: "Roboto-Bold", fontSize: 16 }}>SUBMIT</Text>
                        </Button> */}
                        <PrimaryButton title={'submit'} action={()=>this.handleSubmit()} style={{marginTop:20}} />
                    </View>

                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>this.handleCode()}>
                            <View style={{alignItems:'center'}}>
                                <EvilIcon name="redo" color="#ffc107" size={50}/>
                                <Text style={{textAlign:'center', color:'#ffc107', fontSize:15}}>Resend Code</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
};


const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
    sendEmailVerification : state.auth.emailVerification,
    user: state.auth.user
})

export default connect(mapStateToProps,{verifyUser})(Verification);


