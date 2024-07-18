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

import { Button, Icon, Input, Item} from 'native-base';

// import AppFooter from '../../Footer/footer'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import { Header } from 'react-navigation-stack'
import {connect} from 'react-redux'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Avatar from '../../../ReusabaleComponents/Avatar/Avatar'
import styles from '../../Styles/Assemble/Subscribtions/mySubscriptionsStyles'
import axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay';
import {getSubscription} from '../../../api/Subscripition/subscriptionApi'

class MySubscriptions extends React.Component {
    constructor() {
        super()
        this.state = {
            subscriptions: [],
            subIds:[],
            loading:true
        }
    }

    getData = async() => {
        const res = await getSubscription(this.props.user._id)
        if(res){
            res.map(val => {
                this.setState({
                    subIds:val.subscriptions
                }, () => {
                    this.getSubscribersData()
                })
            })
        }
    }

    getSubscribersData = async() => {
        await axios({
            method:'post',
            url:'/api/users/subscribersdata',
            data:{
                subs:this.state.subIds
            }
        }).then(res=>{
            try{
                this.setState({
                    subscriptions:res.data
                },()=>console.log(this.state.subscriptions), this.setState({loading:false}))
            }catch(err){
                console.log(err)
            }
        })
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
                {this.state.subscriptions && this.state.subscriptions.map((v, i) => {
                    return <View style={styles.row}>
                        <View style={styles.box1}>
                                <Avatar image={v.prof_img ? {uri:v.prof_img} : require("../../../assets/images/aboutPic.png")} size={'medium'} />
                            <View style={{ marginLeft: 8 }}>
                                <Text
                                    style={styles.name}>{v.username}</Text>
                                <Text style={styles.duration}>12 Months</Text>
                            </View>
                        </View>
                        <View style={styles.box1}>
                            <View style={styles.price}>
                                <FontIcon name={'dollar'} color={'#eebf00'} size={28} />
                                <Text style={styles.priceText}>25</Text>
                            </View>
                            <TouchableOpacity>
                                <FontistoIcons name='more-v-a'
                                    color="#4b4b4d"
                                    size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                })}
                {/* {this.state.subscribtions.length > 4 &&

                    <TouchableOpacity>
                        <View style={styles.arrowDown}>
                            <IonIcons name={'ios-arrow-down'} size={25} color={'#808082'} />
                        </View>
                    </TouchableOpacity>
                } */}
            </ScrollView>
        );
    }
};


const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, null)(MySubscriptions)


