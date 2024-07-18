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
    TouchableOpacity,
} from 'react-native';

import { Button, Icon, Input, Item, Spinner } from 'native-base';
import Accordions from '../Accordion/accordion'
// import AppFooter from '../../Footer/footer'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import {connect} from 'react-redux'
import {Header} from 'react-navigation-stack'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Avatar from '../../../ReusabaleComponents/Avatar/Avatar'
import styles from '../../Styles/Assemble/Account/accountStyles'



class Account extends React.Component {
    constructor() {
        super()
        this.state = {
            userName:'',
            email:''
        }
    }

    getUserData = async() => {
        // const newUser = await AsyncStorage.getItem('@userData')
        // const jsonData = JSON.parse(newUser)
        // console.log(jsonData,'STORAGE')
        // this.setState({
        //     userName:jsonData.user.username,
        //     email:jsonData.user.email
        // })
        
    }

    componentDidMount = async() =>{
        await this.getUserData()
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewContainer}>
                    <View style={styles.box1}>
                            <Avatar image={this.props.user ? {uri:this.props.user.prof_img} : require('../../../assets/images/aboutPic.png')} size={'large'} />
                        <View style={styles.box1Child}>
                            <View>
                                <Text style={styles.name}>{this.props.user && this.props.user.username}</Text>
                                <Text style={styles.email}>{this.props.user && this.props.user.email}</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('editProfile')}}>
                                    <FeatherIcon name={'edit-3'} color={'#909092'} size={20} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#000000", padding: 1, marginBottom: 20 }}>

                    </View>
                    <View>
                        <Accordions navigation={this.props.navigation} />
                    </View>

                </View>

            </ScrollView>
        );
    }
};


const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, null)(Account)


