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
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux'
import {editProfile, uploadImage} from '../../../actions/auth'
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton'
import axios from 'axios'
import ImgToBase64 from 'react-native-image-base64';
import Spinner from 'react-native-loading-spinner-overlay';
import Header from '../../../ReusabaleComponents/Header/Header'
import VideoCards from '../../../ReusabaleComponents/Cards/videosCards'

class UserProfile extends React.Component {
    constructor(){
        super()
        this.state={
            paidVideos : [],
            freeVideos : [],
            socialMediaLinks: [
                { name: "facebook" },
                { name: "twitter" },
                { name: "instagram" },
                { name: "linkedin" },
            ],
            packages:[],
            displayPaidVideos:true,
            displayFreeVideos:true,
            displaySocial:true,
            displayPackages:true,
            first_name:null,
            last_name:null,
            facebook:null,
            social:null,
            twitter:null,
            instagram:null,
            image:null,
            description:null,
            username:null,
            userId:null,
            subscriberId:[],
            subscribed:false,
            loading:true
        }
    }

    getPackages = async(userId) => {
        this.setState({
            loading:true
        })
        await axios({
            method:'get',
            url:`/api/packages/${userId}`
        }).then((res) => {
            console.log(res)
            this.setState({
                packages:res.data
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                loading:false
            })
        })
    }

    getUserData = async(userId) => {
        this.setState({
            loading:true
        })

        await axios({
            method:'post',
            url:'/api/users/userId',
            data:{
                userId:userId
            }
        }).then((res) => {
            this.setState({
                loading:false
            })
            res.data.details.social ? 
            this.setState({
                first_name:res.data.details.first_name,
                last_name:res.data.details.last_name,
                username:res.data.details.username,
                facebook:res.data.details.social.facebook,
                twitter:res.data.details.social.twitter,
                youtube:res.data.details.social.youtube,
                instagram:res.data.details.social.instagram,
                image:res.data.details.prof_img,
                description:res.data.details.description
            })
            : this.setState({
                first_name:res.data.details.first_name,
                last_name:res.data.details.last_name,
                image:res.data.details.prof_img,
                description:res.data.details.description,
                username:res.data.details.username,
                image:res.data.details.prof_img,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    getUserVideos = async(userId) => {
        await axios({
            method:'get',
            url:`/api/streaming/stream/${userId}`
        }).then((res)=>{
            this.setState({
                userVideos:res.data,
            },()=>{
                // Paid Videos
                this.state.userVideos.map(val=>{
                    if(val.paid){
                        this.setState(prevState => ({ 
                            paidVideos: [...prevState.paidVideos, val]
                        }));
                    }
                })
                // Free Videos
                this.state.userVideos.map(val=>{
                    if(!val.paid){
                        this.setState(prevState => ({ 
                            freeVideos: [...prevState.freeVideos, val]
                        }));
                    }
                })
            })
        }).catch(err => {
            console.log(err)
        })
    }

    onSubscribe = async(userId) => {
        await axios({
            method:'post',
            url:'/api/subscribers/create',
            data:{
                userId:userId,
                subscriberId:this.props.user._id
            }
        }).then((res) => {
            this.onAddSubscription(userId)
            this.getSubscriptions(userId)
        }).catch(err => {
            console.log(err)
        })
    }

    getSubscriptions =  async(userId) => {
        await axios({
            method:'get',
            url:`/api/subscribers/${userId}`
        }).then((res) => {
            res.data.map(val => {
                console.log(val.subscribers)
                this.setState({
                 subscribersId:val.subscribers
                })
            })
            if(this.state.subscribersId && this.state.subscribersId.includes(this.props.user._id)){
             this.setState({
                 subscribed:true
             })
         }
        }).catch(err => {
            console.log(err)
        })
    }

    onAddSubscription = async(userId) => {
        await axios({
            method:'post',
            url:'/api/subscription/create',
            data:{
                userId:this.props.user._id,
                subscriptionId:userId
            }
        }).then((res) => {
            console.log('Subscription Added', res)
        }).catch(err => {
            console.log(err)
        })
    }

    onUnsubscribe = async(userId) => {
        await axios({
            method:'post',
            url:'/api/subscribers/unsubscribe',
            data:{
                userId:userId,
                subscriberId:this.props.user._id
            }
        }).then(res=>{
            this.setState({
                subscribed:false
            },()=>{
                this.onRemoveSubscription(userId)
            })
            
        })
    }

    onRemoveSubscription = async(userId) => {
        await axios({
            method:'post',
            url:'/api/subscription/remove',
            data:{
                userId:this.props.user._id,
                subscriptionId:userId
            }
        }).then(res=>{
            console.log('Unsubscribed',res)
        }).catch(err => {
            console.log(err)
        })
    }


    componentDidMount(){
        const {userId} = this.props.route.params
        this.setState({
            userId:userId
        })
        this.getPackages(userId)
        this.getUserData(userId)
        this.getUserVideos(userId)
        this.getSubscriptions(userId)
    }


    render(){

        return(
            <ScrollView style={{flex:1, backgroundColor:'#1f1f1f'}}>
            <Spinner
                visible={this.state.loading}
                color="#eebf00"
                animation="fade"
                textContent={'Loading...'}
                textStyle={{color:'#eebf00'}}
            />
            <View>
                <Header navigation={this.props.navigation} title={this.state.username}/>
                <View style={{alignItems:'center'}}>
                    <View>
                        <Avatar size={'large'} image={this.state.image ? {uri:this.state.image} :  require("../../../assets/images/aboutPic.png")} />
                    </View>
                    <View>
                        {
                            this.state.description ? <Text style={styles.aboutTxt}>{this.state.description}</Text> : null
                        }                        
                    </View>
                    <View style={{marginTop:10}}>
                        {
                            this.state.subscribed ? 
                            (
                                <TouchableOpacity onPress={()=>this.onUnsubscribe(this.state.userId)} style={{backgroundColor:'#EEBF00', width:160, alignItems:'center', borderRadius:25, padding:8}}>
                                    <Text style={{fontFamily:'Roboto-Bold'}}>UNSUBSCRIBE</Text>
                                </TouchableOpacity>
                            ):
                            (
                                <TouchableOpacity onPress={()=>this.onSubscribe(this.state.userId)} style={{backgroundColor:'#EEBF00', width:160, alignItems:'center', borderRadius:25, padding:8}}>
                                    <Text style={{fontFamily:'Roboto-Bold'}}>SUBSCRIBE</Text>
                                </TouchableOpacity>
                            )
                        }
                       
                    </View>
                </View>
                <View>
                    {
                        this.state.paidVideos.length > 0 ? 
                        <View style={styles.contentContainer}>
                        <Text style={styles.contentHeading}>PAID VIDEOS</Text>
                        <View style={{marginRight:5}}>
                            {
                                this.state.displayPaidVideos ? 
                                (
                                    <TouchableOpacity onPress={()=>this.setState({displayPaidVideos:!this.state.displayPaidVideos})}>
                                        <FeatherIcon name="chevron-down" color="#eebf00" size={25} style={{marginTop:2}}/>
                                    </TouchableOpacity>
                                ):
                                (
                                    <TouchableOpacity onPress={()=>this.setState({displayPaidVideos:!this.state.displayPaidVideos})}>
                                        <FeatherIcon name="chevron-up" color="#eebf00" size={25} style={{marginTop:2}}/>
                                    </TouchableOpacity>
                                )
                            }
                            
                        </View>
                        </View> : null
                    }
                    
                    {
                        this.state.displayPaidVideos && this.state.paidVideos.length > 0 ? 
                        (
                            <View style={styles.videoBox}>
                                <VideoCards data={this.state.paidVideos}/>
                            </View>
                        ):null
                    }
                   
                   {
                       this.state.freeVideos.length > 0 ? 
                       <View style={styles.contentContainer}>
                       <Text style={styles.contentHeading}>FREE VIDEOS</Text>
                       <View style={{marginRight:5}}>
                           {
                               this.state.displayFreeVideos ? 
                               (
                                   <TouchableOpacity onPress={()=>this.setState({displayFreeVideos:!this.state.displayFreeVideos})}>
                                       <FeatherIcon name="chevron-down" color="#eebf00" size={25} style={{marginTop:2}}/>
                                   </TouchableOpacity>
                               ):
                               (
                                   <TouchableOpacity onPress={()=>this.setState({displayFreeVideos:!this.state.displayFreeVideos})}>
                                       <FeatherIcon name="chevron-up" color="#eebf00" size={25} style={{marginTop:2}}/>
                                   </TouchableOpacity>
                               )
                           }   
                        </View>
                        </View>: null
                    }
                    {
                        this.state.displayFreeVideos && this.state.freeVideos.length > 0 ? 
                        (
                            <View style={styles.videoBox}>
                                <VideoCards data={this.state.freeVideos}/>
                            </View>
                        ):null
                    }
                    <View style={styles.contentContainer}>
                        <Text style={styles.contentHeading}>SOCIAL MEDIA LINKS</Text>
                        <View style={{marginRight:5}}>
                            {
                                this.state.displaySocial ? 
                                (
                                    <TouchableOpacity onPress={()=>this.setState({displaySocial:!this.state.displaySocial})}>
                                        <FeatherIcon name="chevron-down" color="#eebf00" size={25} style={{marginTop:2}}/>
                                    </TouchableOpacity>
                                ):
                                (
                                    <TouchableOpacity onPress={()=>this.setState({displaySocial:!this.state.displaySocial})}>
                                        <FeatherIcon name="chevron-up" color="#eebf00" size={25} style={{marginTop:2}}/>
                                    </TouchableOpacity>
                                )
                            }
                            
                        </View>
                    </View>
                    {
                        this.state.displaySocial ? 
                        (
                            <View style={styles.socialContainer}>
                                {this.state.socialMediaLinks && this.state.socialMediaLinks.map((v, i) => {
                                    return <TouchableOpacity>
                                        <View style={styles.socialIcons}>
                                            <FontIcon name={v.name} color={"#8f8e93"} size={25} />
                                        </View>
                                    </TouchableOpacity>
                                })}
                            </View>
                        ):
                        null
                    }
                    {
                        this.state.packages.length > 0 ? 
                        <View style={styles.contentContainer}>
                        <Text style={styles.contentHeading}>PACKAGES</Text>
                        <View style={{marginRight:5}}>
                            {
                                this.state.displayPackages ? 
                                (
                                    <TouchableOpacity onPress={()=>this.setState({displayPackages:!this.state.displayPackages})}>
                                        <FeatherIcon name="chevron-down" color="#eebf00" size={25} style={{marginTop:2}}/>
                                    </TouchableOpacity>
                                ):
                                (
                                    <TouchableOpacity onPress={()=>this.setState({displayPackages:!this.state.displayPackages})}>
                                        <FeatherIcon name="chevron-up" color="#eebf00" size={25} style={{marginTop:2}}/>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        </View> : null
                    }
                   
                    {
                        this.state.displayPackages ? 
                    <View style={{marginTop:10}}>
                    {this.state.packages && this.state.packages.map((v, i) => {
                    return <View style={styles.box}>
                        <View style={styles.head}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('sharePackageWithSubscribers')}}>
                                <FontIcon name={'share-alt'} color={"#909092"} size={20} />
                            </TouchableOpacity>
                            <Text style={{
                                width: "80%",
                                height: 0,
                                borderTopWidth: 50,
                                borderTopColor: v.color,
                                borderLeftWidth: 20,
                                borderLeftColor: 'transparent',
                                borderRightWidth: 20,
                                borderRightColor: 'transparent',
                                borderStyle: 'solid',
                                textAlign: "center",
                                paddingTop: 10,
                                color: v.textColor,
                                fontSize: 20,
                                fontFamily: "Roboto-Bold"
                            }}>
                               
                                {v.package_name}
                
                            </Text>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('editPackage')}}>
                                <FeatherIcon name={'edit-3'} color={'#909092'} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.price}>
                            <FontIcon name={'dollar'} color={'#eebf00'} size={55} />
                            <Text style={styles.priceText}>
                                {v.price}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.duration}>
                                For {v.months} Months
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.description}>
                                {v.description}
                            </Text>
                        </View>

                        <View>
                            <PrimaryButton title={'select'} action={()=>{this.props.navigation.navigate('Checkout', {
                                price:v.price,
                                itemName:v.package_name,
                                userId:this.state.userId,
                            })}} style={{width:"70%"}} />
                        </View>

                    </View>
                })}
                </View> : null
            }
                </View>
                
            </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    aboutTxt:{
        textAlign:'center', 
        marginTop:15, 
        color:'#787878', 
        fontFamily:'Roboto-Regular', 
        fontSize:15
    },
    contentHeading:{
        color:'#eebf00', 
        fontFamily:'Roboto-Regular', 
        marginLeft:10, 
        fontSize:18
    },
    videoBox:{
        marginTop: 10,
        borderTopWidth: 2,
        borderColor: "#000000",
        paddingVertical: 20,
        paddingHorizontal: 14
    },
    contentContainer:{
        marginTop:25,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    socialContainer:{
        display: "flex",
        flexDirection: "row",
        marginVertical: 12,
        marginLeft:10
    },
    socialIcons: { 
        marginRight: 10, 
        width: 60, 
        height: 60, 
        borderRadius: 50, 
        borderWidth: 1, 
        borderColor: "#8f8e93", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center" 
    },
    box:{
        backgroundColor: "#0c0c0c",
        marginBottom: 30,
        marginHorizontal:15,
        padding: 20
    },
    head:{ 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-between" 
    },
    price:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginVertical:10
    },
    priceText:{
        color: "#eebf00",
        fontSize: 70,
        fontFamily:"Roboto-Bold",
        
    },
    duration:{
        color:"#fff",
        fontFamily:"Roboto-Medium",
        fontSize:20,
        textAlign:"center"
    },
    description:{
        textAlign:"center",
        color:"#909092",
        fontFamily:"Roboto-Regular",
        fontSize:16,
        marginVertical:16
    },
})


const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, null)(UserProfile)