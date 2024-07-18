import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather'

const Header = (props) => {
    return(
        <View style={{backgroundColor:'#1f1f1f', height:60}}>
            <View style={{flexDirection:'row'}}>
                <View style={{marginLeft:15, marginTop:18}}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <FeatherIcon name="arrow-left" color="#EEBF00" size={24}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft:12, marginTop:16}}>
                    <Text style={{fontFamily: "Roboto-Regular",color:'#EEBF00', fontSize:20}}>{props.title}</Text>
                </View>
            </View>
        </View>
    )
}

export default Header