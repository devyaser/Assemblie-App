import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, Dimensions, AsyncStorage } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import { Input } from 'react-native-elements'
import { connect } from 'react-redux'
import Avatar from '../../ReusabaleComponents/Avatar/Avatar'
import styles from '../Styles/Header/headerStyles'
import IonIcons from 'react-native-vector-icons/Ionicons'

class AppHeader extends Component {
    constructor() {
        super();
        this.state = {
            search: false,
            search:'',
            user:null,
            verified:null
        }
    }

    getData = async() => {

      var userData =  await AsyncStorage.getItem('@userData')
      var jsonData = JSON.parse(userData)
      this.setState({
          user:jsonData,
          verified:jsonData.verified
      })
    }

    componentDidMount(){
        this.getData()
    }


    render() {
        return (
            <View>{this.props.search ?
                <View style={styles.containerSearch}>
                    
                    <View style={styles.backBtn}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>

                            {Platform.OS === 'ios' ? <IonIcons name={'ios-arrow-back'} color={'#eebf00'} size={22} /> : <IonIcons name={'md-arrow-back'} color={'#eebf00'} size={22} />}
                        </TouchableOpacity>
                    </View>
                    <Input
                        placeholder='Search here..'
                        placeholderTextColor='#8E8E93'
                        inputStyle={styles.input}
                        inputContainerStyle={{ borderBottomWidth: 0, marginLeft: 10 }}
                        value={this.state.searchValue}
                        autoFocus={true}
                        onChange={(text)=>{this.setState({searchValue:text})}}
                    />
                    <View style={styles.closeBtnContainer}>
                        <TouchableOpacity onPress={() => { this.setState({searchValue:''}) }}>
                            <View style={styles.closeBtn}>
                                <EvilIcon name={'close'} size={18} color='#1f1f1f' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                :
                <View style={styles.container}>
                    <Image
                        style={{ width: 110, height: 24 }}
                        source={require('../../assets/images/logo.png')}
                    />
                    <View style={styles.btnContainer}>
                        {this.props.user && <TouchableOpacity style={{ paddingHorizontal: 4 }} onPress={() => { this.props.navigation.navigate('assembler/upload') }}>
                            {this.props.uploadScreen ? <Image
                                style={{ width: 22, height: 22, borderRadius: 50 }}
                                source={require('../../assets/images/upload2.png')}
                            /> : <Image
                                    style={{ width: 22, height: 22, borderRadius: 50 }}
                                    source={require('../../assets/images/upload.png')}
                                />}

                        </TouchableOpacity>}
                        <TouchableOpacity style={{ padding: 6 }} onPress={() => { this.props.navigation.navigate('search') }}>
                            <FeatherIcon name='search' color='#fff' size={22} />
                        </TouchableOpacity>
                        {/* {
                        !this.state.verified && <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => { this.props.navigation.navigate('askSignin') }}>
                            <EvilIcon name='user' color='#eebf00' size={34} />

                        </TouchableOpacity>
                        } */}
                        {
                        // this.state.verified && <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => { this.props.navigation.navigate('account') }}>
                        //     {/* <EvilIcon name='user' color='#eebf00' size={34} /> */}
                        //     <Avatar image={require('../../assets/images/aboutPic.png')} size={'extraSmall'} />
                        // </TouchableOpacity>
                        }
                        {
                            this.props.user === null ? 
                            (
                                <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => { this.props.navigation.navigate('askSignin') }}>
                                    <EvilIcon name='user' color='#eebf00' size={34} />  
                                </TouchableOpacity>
                            ):
                            (
                                <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => { this.props.navigation.navigate('account') }}>
                                    <Avatar image={this.props.user ? {uri:this.props.user.prof_img} : require('../../assets/images/aboutPic.png')} size={'extraSmall'} />
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </View>}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, null)(AppHeader)