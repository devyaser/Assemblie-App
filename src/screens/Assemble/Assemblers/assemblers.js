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
    Dimensions,
    TouchableOpacity
} from 'react-native';

import { Button, Icon, Input, Item } from 'native-base';
// import AppFooter from '../../Footer/footer'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import { Header } from 'react-navigation-stack'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Avatar from '../../../ReusabaleComponents/Avatar/Avatar'
import styles from '../../Styles/Assembler/Subscribers/subscribersStyles'
import axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux'
import {getSubscription, addSubscription, removeSubscription} from '../../../api/Subscripition/subscriptionApi'
import {subscribeAssembler, unSubscribeAssembler} from '../../../api/Subscribers/subscriberApi'
class Assemblers extends React.Component {
    constructor() {
        super()
        this.state = {
            subscribers: [
                {
                    image: require('../../../assets/images/aboutPic.png'),
                    name: "John Doe"
                },
                {
                    image: require('../../../assets/images/aboutPic.png'),
                    name: "John Doe"
                },
                {
                    image: require('../../../assets/images/aboutPic.png'),
                    name: "John Doe"
                },
                {
                    image: require('../../../assets/images/aboutPic.png'),
                    name: "John Doe"
                },
                {
                    image: require('../../../assets/images/aboutPic.png'),
                    name: "John Doe"
                },
            ],
            assemblers:[],
            loading:false,
            subIds:[],
            assemblerIds:[]
        }
    }

    getData = async() => {
        this.setState({
            loading:true
        })
        try{
            await axios({
                method:'GET',
                url:'api/users/assemblers'
            }).then((res)=>{
                this.setState({
                    assemblers:res.data.users
                },()=>{
                    this.getSubscriptions()
                    this.setState({
                        loading:false
                    })
                })
            }).catch(err => {
                console.log(err)
                this.setState({
                    loading:false
                })
            })
        }catch(err){
            console.log(err)
        }
    }

    getSubscriptions = async() => {
        const res = await getSubscription(this.props.user._id)
        res.map(val => {
            this.setState({
                subIds:val.subscriptions
            },()=>{
                this.getSubscribers()
                console.log(this.state.subIds)
            })
        })
    }

    getSubscribers = () => {
        let newAssemblers = [...this.state.assemblers]
        newAssemblers.map((v,i) => {
            this.state.subIds.map((s,index) => {
                if(v._id == s){
                    newAssemblers[i].subs = true
                }
            })
        })
        this.setState({
            assemblers: newAssemblers
        },()=>{
            console.log(this.state.assemblers)
        })
    }
    subscribe = async(userId) => {
        const res = await subscribeAssembler(userId,this.props.user._id)
        if(res){
            await addSubscription(this.props.user._id,userId)
            this.getSubscriptions()
        }
    }

    unSubscribe = async(userId) => {
        const res =  await unSubscribeAssembler(userId,this.props.user._id)
        if(res){
            await removeSubscription(this.props.user._id,userId)
            let newAssemblers = [...this.state.assemblers]
            newAssemblers.map((v,i) => {
                if(v._id == userId){
                    newAssemblers[i].subs = false
                }
            })
            this.setState({
                assemblers: newAssemblers
            },()=>{
                console.log(this.state.assemblers)
            })
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <Spinner
                    visible={this.state.loading}
                    color="#eebf00"
                    animation="fade"
                    textContent={'Loading...'}
                    textStyle={{color:'#eebf00'}}
                />
                {this.state.assemblers && this.state.assemblers.map((v, i) => {
                    return <View style={styles.row}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('profile',  {
                            userId:v._id
                        })}>
                        <View style={styles.box1}>                            
                                <Avatar image={v.prof_img ? {uri:v.prof_img} : require('../../../assets/images/aboutPic.png')} size={'medium'} /> 
                            <Text
                                style={styles.name}>{v.name}</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.box1}>
                            {
                                v.subs ?
                                (
                                    <Button onPress={()=>this.unSubscribe(v._id)} warning small style={styles.btn}>
                                        <Text style={styles.btnText}>UNSUBSCRIBE</Text>
                                    </Button>
                                ):
                                (
                                    <Button onPress={()=>this.subscribe(v._id)} warning small style={styles.btn}>
                                        <Text style={styles.btnText}>SUBSCRIBE</Text>
                                    </Button>
                                )
                            }
                            
                            <TouchableOpacity>
                                <FontistoIcons name='more-v-a'
                                    color="#4b4b4d"
                                    size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                })}
                {this.state.subscribers.length > 4 &&

                    <TouchableOpacity>
                        <View style={styles.arrowDown}>
                            <IonIcons name={'ios-arrow-down'} size={25} color={'#808082'} />
                        </View>
                    </TouchableOpacity>
                }
            </ScrollView>
        );
    }
};



const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, null)(Assemblers)


