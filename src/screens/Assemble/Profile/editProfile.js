import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import EntIcon from 'react-native-vector-icons/Entypo'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import { Input, Button } from 'native-base'
import AppFooter from '../../Footer/footer'
import Avatar from '../../../ReusabaleComponents/Avatar/Avatar'
import styles from '../../Styles/Assemble/Profile/editProfileStyles'
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux'
import {editProfile, uploadImage} from '../../../actions/auth'
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton'
import axios from 'axios'
import ImgToBase64 from 'react-native-image-base64';
import Spinner from 'react-native-loading-spinner-overlay';

class EditProfile extends Component {

    constructor() {
        super()
        this.state = {
            showPassword: false,
            userImage:null,
            first_name: "John",
            last_name: "Doe",
            username: "John123",
            phone_number: "03132212321",
            description:null,
            email: "john@gmail.com",
            password: "12345678",
            facebook:null,
            twitter:null,
            youtube:null,
            instagram:null,
            cardName:null,
            cardNumber:null,
            cvv:null,
            expiryDate:null,
            paypalEmail:null,
            imageUrl:null,
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

            socialMediaLinks: [
                { name: "facebook" },
                { name: "twitter" },

                { name: "instagram" },
                { name: "linkedin" },

            ],
            offers: [
                {
                    name: "1 Month subscription",
                    price: "25"
                },
                {
                    name: "2 Months subscription",
                    price: "35"
                },
                {
                    name: "3 Months subscription",
                    price: "35"
                }, {
                    name: "4 Months subscription",
                    price: "50"
                },
            ]
        }
    }

    uploadImage = () => {
        ImagePicker.openPicker({
            includeBase64: true,
            width: 300,
            height: 400,
            compressImageQuality:0.8,
            cropping: true
          }).then(image => {
            this.setState({
                imageUrl:image.data,
                userImage:image.path
            }, () => {
                this.editImage(image.data)
            })
          });
    }

    getUserData =  () => {
        this.props.user.social ? 
        this.setState({
            username:this.props.user.username,
            first_name:this.props.user.first_name,
            last_name:this.props.user.last_name,
            description:this.props.user.description,
            facebook:this.props.user.social.facebook,
            youtube:this.props.user.social.youtube,
            twitter:this.props.user.social.twitter,
            instagram:this.props.user.social.instagram,
            userImage:this.props.user.prof_img
        }):
        this.setState({
            username:this.props.user.username,
            first_name:this.props.user.first_name,
            last_name:this.props.user.last_name,
        })

        this.props.user.payment_info ? 
        this.setState({
            username:this.props.user.username,
            first_name:this.props.user.first_name,
            last_name:this.props.user.last_name,
            description:this.props.user.description,
            userImage:this.props.user.prof_img,
            facebook:this.props.user.social.facebook,
            youtube:this.props.user.social.youtube,
            twitter:this.props.user.social.twitter,
            instagram:this.props.user.social.instagram,
            cardName:this.props.user.payment_info.card_name,
            cardNumber:this.props.user.payment_info.card_number,
            cvv:this.props.user.payment_info.cvv,
            expiry_date:this.props.user.payment_info.expiry_date
        }):
        this.setState({
            username:this.props.user.username,
            first_name:this.props.user.first_name,
            last_name:this.props.user.last_name,
        })

        this.props.user.payment_info ? 
        this.setState({
            first_name:this.props.user.first_name,
            last_name:this.props.user.last_name,
            description:this.props.user.description,
            userImage:this.props.user.prof_img,
            facebook:this.props.user.social.facebook,
            youtube:this.props.user.social.youtube,
            twitter:this.props.user.social.twitter,
            instagram:this.props.user.social.instagram,
            image:this.props.user.prof_img,
            card_name:this.props.user.payment_info.card_name,
            card_number:this.props.user.payment_info.card_number,
            cvv:this.props.user.payment_info.cvv,
            expiry_date:this.props.user.payment_info.expiry_date,
            paypalEmail:this.props.user.payment_info.paypal_info.paypal_email
        })
        : 
        this.setState({
            first_name:this.props.user.first_name,
            last_name:this.props.user.last_name,
            description:this.props.user.description,
        })
    }

    editData = () => {
        const formData = {
            userId:this.props.user._id,
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            description:this.state.description,
            facebook:this.state.facebook,
            youtube:this.state.youtube,
            twitter:this.state.twitter,
            instagram:this.state.instagram,
            card_name:this.state.cardName,
            card_number:this.state.cardNumber,
            cvv:this.state.cvv,
            expiry_date:this.state.expiryDate,
            paypal_email:this.state.paypalEmail,    
        }
        this.props.editProfile(formData)
    }

    editImage = async(url) => {
        const formData = {
            userId:this.props.user._id,
            imageUrl:`data:image/jpeg;base64,${url}`
        }
        this.props.uploadImage(formData)
    }

    componentDidMount(){
        this.getUserData()
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Spinner
                        visible={this.props.loading}
                        color="#eebf00"
                        animation="fade"
                        textContent={'Loading...'}
                        textStyle={{color:'#eebf00'}}
                    />
                    <Image source={{uri:this.state.image}}/>
                    <Image
                        style={{ width: "100%", height: 200, marginVertical: 0, opacity: 0.5 }}
                        source={require("../../../assets/images/4.png")} />
                    <TouchableOpacity style={{ position: "absolute", top: 15, left: 15 }}>
                        <EntIcon name={'camera'} size={22} color={'#fff'} />
                    </TouchableOpacity>

                    {/* <Image style={styles.avatar} source={require("../../../assets/images/aboutPic.png")} /> */}
                    <Avatar size={'editAvatar'} image={this.state.imageUrl ? {uri:`data:image/jpeg;base64,${this.state.imageUrl}`}  : this.state.userImage ? {uri:this.state.userImage} : require("../../../assets/images/aboutPic.png")} />
                    <View style={styles.editAvatar}>
                        <TouchableOpacity onPress={()=>this.uploadImage()}>
                            <EntIcon name={'camera'} size={22} color={'#1f1f1f'} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.body}>
                        <View>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.formContainer}>

                            <View style={styles.head}>
                                <Text style={styles.headText}>
                                    PERSONAL DETAILS
                                </Text>
                                <TouchableOpacity>
                                    <AntIcon name={'pluscircleo'} color={'#eebf00'} size={22} />
                                </TouchableOpacity>
                            </View>

                            <View>

                                <View style={{ marginVertical: 3 }}>
                                    <Text style={styles.inputLabel}>
                                        First Name
                                    </Text>
                                    <Input value={this.state.first_name} style={styles.input} onChangeText={(text) => { this.setState({ first_name: text }) }} />

                                </View>

                                <View style={{ marginVertical: 3 }}>
                                    <Text style={styles.inputLabel}>
                                        Last Name
                                    </Text>
                                    <Input value={this.state.last_name} style={styles.input} onChangeText={(text) => { this.setState({ last_name: text }) }} />

                                </View>

                                {/* <View style={{ marginVertical: 3 }}>
                                    <Text style={styles.inputLabel}>
                                        Userame
                                    </Text>
                                    <Input value={this.state.username} style={styles.input} />

                                </View> */}
                                {/* <View style={{ marginVertical: 3 }}>
                                    <Text style={styles.inputLabel}>
                                        Phone Number
                                    </Text>
                                    <Input value={this.state.phone_number} style={styles.input} onChangeText={(text) => { this.setState({ phone_number: text }) }} keyboardType={'numeric'} />

                                </View> */}
                                {/* <View style={{ marginVertical: 3 }}>
                                    <Text style={styles.inputLabel}>
                                        Email
                                    </Text>
                                    <Input value={this.state.email} style={styles.input} onChangeText={(text) => { this.setState({ email: text }) }} keyboardType={'email-address'} />

                                </View> */}


                                <View style={{ marginVertical: 3 }}>

                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <Text style={styles.inputLabel}>
                                            Password
                                    </Text>
                                        <TouchableOpacity>
                                            <Text style={{ color: "#eebf00", fontSize: 12, fontFamily: "Roboto-Medium" }}>Change Password</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.passwordContainer}>

                                        <Input value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} style={styles.input} secureTextEntry={!this.state.showPassword} />

                                        <TouchableOpacity style={styles.showHideBtn} onPress={() => { this.setState({ showPassword: !this.state.showPassword }) }}>
                                            <Image
                                                style={{ width: 20, height: 16 }}
                                                source={this.state.showPassword ? require('../../../assets/images/hide.png') : require('../../../assets/images/show.png')} /></TouchableOpacity>

                                    </View>

                                </View>

                            </View>


                        </View>

                        <View>
                            <View style={styles.line}></View>
                        </View>


                        <View style={styles.formContainer}>
                            <View style={styles.head}>
                                <Text style={styles.headText}>
                                    ABOUT
                                </Text>
                                <TouchableOpacity>
                                    <FeatherIcon name={'edit-2'} color={'#8f8e93'} size={20} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.aboutContainer}>
                                <ScrollView nestedScrollEnabled={true}>
                                    <Input value={this.state.description} style={[styles.input,{height:120}]} multiline={true}  onChangeText={(text) => { this.setState({ description: text }) }} placeholder="About Us" />
                                </ScrollView>
                            </View>

                        </View>

                        <View>
                            <View style={styles.line}></View>
                        </View>

                        <View style={styles.formContainer}>
                            <View style={styles.head}>
                                <Text style={styles.headText}>
                                    SOCIAL MEDIA LINKS
                                </Text>
                                <TouchableOpacity>
                                    <AntIcon name={'pluscircleo'} color={'#eebf00'} size={22} />
                                </TouchableOpacity>
                            </View>


                            {/* <View style={styles.socialBox}>
                                {this.state.socialMediaLinks && this.state.socialMediaLinks.map((v, i) => {
                                    return <TouchableOpacity>
                                        <View style={styles.socialContainer}>
                                            <FontIcon name={v.name} color={"#8f8e93"} size={25} />
                                        </View>
                                    </TouchableOpacity>
                                })}

                            </View> */}
                            <View style={{ marginVertical: 3 }}>
                                <View style={{margin:10}}>
                                    <FontIcon name="facebook" color={"#8f8e93"} size={25}/>
                                </View>
                                <Input style={styles.input} value={this.state.facebook} onChangeText={(text) => { this.setState({ facebook: text }) }}  placeholder="www.facebook.com" />
                            </View>  
                            <View style={{ marginVertical: 3 }}>
                                <View style={{margin:10}}>
                                    <FontIcon name="twitter" color={"#8f8e93"} size={25}/>
                                </View>
                                <Input style={styles.input} value={this.state.twitter} placeholder="www.twitter.com" onChangeText={(text) => { this.setState({ twitter: text }) }} />
                            </View>  
                            <View style={{ marginVertical: 3 }}>
                                <View style={{margin:10}}>
                                    <FontIcon name="instagram" color={"#8f8e93"} size={25}/>
                                </View>
                                <Input style={styles.input} value={this.state.instagram} placeholder="www.instagram.com" onChangeText={(text) => { this.setState({ instagram: text }) }} />
                            </View>
                            <View style={{ marginVertical: 3 }}>
                                <View style={{margin:10}}>
                                    <FontIcon name="youtube" color={"#8f8e93"} size={25}/>
                                </View>
                                <Input style={styles.input} value={this.state.youtube} placeholder="www.youtube.com" onChangeText={(text) => { this.setState({ youtube: text }) }} />
                            </View>    
                        </View>
                        <View>
                            <View style={styles.line}></View>
                        </View>

                        <View style={styles.formContainer}>
                            <View style={styles.head}>
                                <Text style={styles.headText}>
                                    Payments
                                </Text>
                                <TouchableOpacity>
                                    <AntIcon name={'pluscircleo'} color={'#eebf00'} size={22} />
                                </TouchableOpacity>
                            </View>


                            {/* <View style={styles.socialBox}>
                                {this.state.socialMediaLinks && this.state.socialMediaLinks.map((v, i) => {
                                    return <TouchableOpacity>
                                        <View style={styles.socialContainer}>
                                            <FontIcon name={v.name} color={"#8f8e93"} size={25} />
                                        </View>
                                    </TouchableOpacity>
                                })}

                            </View> */}
                            <View style={{ marginVertical: 3 }}>
                                <Text style={styles.inputLabel}>
                                    Name On Card
                                </Text>
                                <Input value={this.state.cardName} style={styles.input} placeholder="John Doe" onChangeText={(text) => { this.setState({ cardName: text }) }} />
                            </View>  
                            <View style={{ marginVertical: 3 }}>
                                <Text style={styles.inputLabel}>
                                    Card Number
                                </Text>
                                <Input value={this.state.cardNumber} style={styles.input} placeholder="123-456-78" onChangeText={(text) => { this.setState({ cardNumber: text }) }} />
                            </View>  
                            <View style={{ marginVertical: 3 }}>
                                <Text style={styles.inputLabel}>
                                    CVV
                                </Text>
                                <Input value={this.state.cvv} style={styles.input} placeholder="CVV" onChangeText={(text) => { this.setState({ cvv: text }) }} />
                            </View>
                            <View style={{ marginVertical: 3 }}>
                                <Text style={styles.inputLabel}>
                                    Expiry Date
                                </Text>
                                <Input value={this.state.expiryDate} style={styles.input} placeholder="12-20" onChangeText={(text) => { this.setState({ expiryDate: text }) }} />
                            </View>    
                            <View style={{ marginVertical: 3 }}>
                                <Text style={styles.inputLabel}>
                                    PayPal Email
                                </Text>
                                <Input value={this.state.paypalEmail} style={styles.input} placeholder="johndoe@paypal.com" onChangeText={(text) => { this.setState({ paypalEmail: text }) }} />
                            </View>    
                        </View>
                        <View>
                            <View style={styles.line}></View>
                        </View>


                        {/* <View style={styles.formContainer}>
                            <View style={styles.head}>
                                <Text style={styles.headText}>
                                    OFFERS
                                </Text>
                                <TouchableOpacity>
                                    <AntIcon name={'pluscircleo'} color={'#eebf00'} size={22} />
                                </TouchableOpacity>
                            </View>

                            <View>
                                {this.state.offers && this.state.offers.map((v, i) => {
                                    return <View style={styles.offerBoxes}>
                                        <View>
                                            <Text style={styles.offerName}>{v.name}</Text>
                                            <TouchableOpacity style={styles.readMoreBtn}>
                                                <Text style={styles.readMoreText}>
                                                    Read More
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <Text style={styles.price}>
                                                <FontIcon name={'dollar'} color={'#eebf00'} size={30} /> {v.price}
                                            </Text>
                                        </View>
                                    </View>
                                })}
                            </View>
                        </View> */}

                        <View>
                            <PrimaryButton title={'edit'} action={() => this.editData()} style={{ width: Dimensions.get('window').width - 50, marginTop: 10, marginBottom:20 }} />
                        </View>
                        <View>
                            <View style={styles.line}></View>
                        </View>
                        <AppFooter />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        loading:state.auth.loading
    }
}


export default connect(mapStateToProps, {editProfile, uploadImage})(EditProfile)
