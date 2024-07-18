import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions ,
    StyleSheet
} from 'react-native'
import AntIcons from 'react-native-vector-icons/AntDesign'
import styles from '../../Styles/Assemble/ModalContents/shareStreamStyles'


class ShareStreamContent extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }


    render() {
        return (
            <View style={{
                backgroundColor:"#3A3A3A",
                width:Dimensions.get('window').width - 40,
                height:"70%",
                alignSelf:"center",
                position:"absolute",
                bottom:0
            }}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>SHARE</Text>
                    <TouchableOpacity onPress={this.props.close}>
                        <AntIcons name={'close'} color={'#eebf00'} size={24} />
                    </TouchableOpacity>
                </View>


                <View>


                </View>
            
            </View>
        );
    }
}



export default ShareStreamContent;