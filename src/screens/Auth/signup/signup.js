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
    Picker
} from 'react-native';
import { Button, Icon, Input, Item, Spinner } from 'native-base';
import AppFooter from '../../Footer/footer'
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton'
import styles from '../../Styles/Auth/Signup/signupStyles'
import {register} from '../../../actions/auth'
import {connect} from 'react-redux'
import axios from 'axios'

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            showPassword: false,
            showConfirmPassword: false,
            firstName:null,
            lastName:null,
            emailAddress:null,
            userName:null,
            password:null,
            password2:null,
            type:null,
            location:null,
            countries:[],
            selectedDropDownValue:'Select Country',
            displayCities:false,
            country:null,
            code:null,
            cities:[],
            cityDropDownValue:null,
            city:null,
            userType:null,
        }
    }

    submitForm = (val) => {        
        var formData = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.emailAddress,
            username:this.state.userName,
            password:this.state.password,
            password2:this.state.password2,
            location:{
                city:this.state.city,
                country:this.state.country
            },
            type:val
        }
        
        this.props.register(formData)
    }

    getCountries = async() => {
        console.log('IN COUNTRIES')
        await axios({
            method:'GET',
            url:'http://192.168.0.108:5000/api/settings/countries'
        }).then((res)=>{
            this.setState({
                countries:res.data.countries
            },()=>{
                console.log(this.state.countries)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    onDropdownChange = (value) => {
        console.log('VALUEE', value)
        this.setState({
            selectedDropDownValue:value,
            displayCities:true,
            code:value.code,
            country:value.name
        },()=>{
            this.getCities(value)
        })
    }

    onCitiesDropdown = (value) => {
        this.setState({
            cityDropDownValue:value,
            city:value.name
        })
    }

    getCities =  async(value) => {
        console.log('CITIES FOR', this.state.code)
        await axios.get('http://192.168.0.108:5000/api/settings/cities?country='+this.state.code+"&name="+value).then(res=>{
            this.setState({
                cities:res.data.cities
            }, () => {
                console.log(this.state.cities)
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount = () => {
        this.getCountries()
    }


    render() {
        this.props.sendEmailVerification && this.props.navigation.navigate('verification')
        const {signupType} = this.props.route.params 
        console.log('USERRR TYPEEE', signupType)
        
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

                        <View style={styles.inputContainer}>
                            <Input placeholder='First Name' style={styles.input} value={this.state.firstName} onChangeText={(firstName) => this.setState({firstName})} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Input placeholder='Last Name' style={styles.input} value={this.state.lastName} onChangeText={(lastName) => this.setState({lastName})}/>
                        </View>

                        <View style={styles.inputContainer}>
                            <Input placeholder='Email Address' style={styles.input} keyboardType="email-address" value={this.state.emailAddress} onChangeText={(emailAddress) => this.setState({emailAddress})} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Input placeholder='Username' style={styles.input} keyboardType="email-address" value={this.state.userName} onChangeText={(userName) => this.setState({userName})} />
                        </View>

                        <View style={styles.passwordContainer}>
                            <Input placeholder='Password' style={styles.input} secureTextEntry={!this.state.showPassword} value={this.state.password} onChangeText={(password) => this.setState({password})} />

                            <Button style={styles.showHideBtn} onPress={() => { this.setState({ showPassword: !this.state.showPassword }) }}>
                                <Image
                                    style={{ width: 20, height: 16 }}
                                    source={this.state.showPassword ? require('../../../assets/images/hide.png') : require('../../../assets/images/show.png')} /></Button>

                        </View>

                        <View style={styles.passwordContainer}>
                            <Input placeholder='Confirm Password' style={styles.input} secureTextEntry={!this.state.showConfirmPassword} value={this.state.password2} onChangeText={(password2) => this.setState({password2})} />

                            <Button style={styles.showHideBtn} onPress={() => { this.setState({ showConfirmPassword: !this.state.showConfirmPassword }) }}>
                                <Image
                                    style={{ width: 20, height: 16 }}
                                    source={this.state.showConfirmPassword ? require('../../../assets/images/hide.png') : require('../../../assets/images/show.png')} /></Button>
                        </View>
                        <View style={styles.inputContainer}>
                            <Picker  style={styles.input} 
                            selectedValue={this.state.selectedDropDownValue}
                            onValueChange={(value)=>this.onDropdownChange(value)}>
                               {
                                   this.state.countries.map(val => (
                                       <Picker.Item label={val.name} value={val} />
                                   ))
                               }
                            </Picker>
                        </View>
                        {
                            this.state.displayCities ? 
                            <View style={styles.inputContainer}>
                                <Picker style={styles.input}
                                selectedValue={this.state.cityDropDownValue}
                                onValueChange={(value)=>this.onCitiesDropdown(value)}
                                >
                                    {
                                        this.state.cities.map(val => (
                                            <Picker.Item label={val.name} value={val}/>
                                        ))
                                    }
                                    
                                </Picker>
                            </View>
                            : null
                        }
                        <View>
                            <PrimaryButton title={"sign up"} action={()=>{this.submitForm(signupType)}} style={{marginTop:30}} />
                        </View>
                        <View style={{ textAlign: "center", marginTop: 20 }}>
                            <Text style={styles.accountStatus}>Alreay have an account? </Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('signin') }}><Text style={styles.otherFormBtn}>SIGN IN</Text></TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        );
    }
};

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
    sendEmailVerification : state.auth.emailVerification
})

export default connect(mapStateToProps,{register})(Signup);



