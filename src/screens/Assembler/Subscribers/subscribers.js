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
// import { TouchableOpacity } from 'react-native-gesture-handler';
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Avatar from '../../../ReusabaleComponents/Avatar/Avatar'
import styles from '../../Styles/Assembler/Subscribers/subscribersStyles'
import {connect} from 'react-redux'
import axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay';

class Subscribers extends React.Component {
    constructor() {
        super()
        this.state = {
            subscribers: [],
            subIds:[],
            loading:true
        }
    }

    getData = async() => {
        await axios({
            method:'get',
            url:`/api/subscribers/${this.props.user._id}`
        }).then((res) => {
            this.setState({
                loading:false
            })
            res.data.map(val => {
                this.setState({
                 subIds:val.subscribers,
                },()=>{
                    this.getSubscribersData()
                })
            })
            console.log('Subscribers', res)
        }).catch(err => {
            console.log(err)
            this.setState({
                loading:false
            })
        })
    }

    getSubscribersData = async() => {
        await axios({
            method:'post',
            url:'/api/users/subscribersdata',
            data:{
                subs:this.state.subIds
            }
        }).then((res) => {
            this.setState({
                subscribers:res.data,
                loading:false
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                loading:false
            })
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
                {this.state.subscribers.length > 0 ? this.state.subscribers.map((v, i) => {
                    return <View style={styles.row}>
                        <View style={styles.box1}>                            
                                <Avatar image={v.prof_img ? {uri:v.prof_img} : require('../../../assets/images/aboutPic.png')} size={'medium'} /> 
                            <Text
                                style={styles.name}>{v.username}</Text>
                        </View>

                        <View style={styles.box1}>
                            <Button warning small style={styles.btn}>
                                <Text style={styles.btnText}>SUBSCRIBE</Text>
                            </Button>
                            <TouchableOpacity>
                                <FontistoIcons name='more-v-a'
                                    color="#4b4b4d"
                                    size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                }) : <View>
                        <Text style={{color:'white', fontFamily:'Roboto-Bold', textAlign:'center'}}>No Subscribers</Text>
                    </View>}
                {/* {this.state.subscribers.length > 4 &&

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

export default connect(mapStateToProps, null)(Subscribers)


