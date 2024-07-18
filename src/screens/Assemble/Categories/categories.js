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

} from 'react-native';

import { Button } from 'native-base'

import Cards from '../../../ReusabaleComponents/Cards/categoriesCards'
import AppHeader from '../../Header/header'
import styles from '../../Styles/Assemble/Categories/categoriesStyles'

class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {

                    image: require('../../../assets/images/1.png'),
                    name: "Gaming",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/2.png'),
                    name: "Education",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/3.png'),
                    name: "Music",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/4.png'),
                    name: "Writers",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/5.png'),
                    name: "Business & Economy",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/6.png'),
                    name: "Life Style",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/7.png'),
                    name: "Fashion",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/8.png'),
                    name: "Traveling",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/9.png'),
                    name: "News",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/10.png'),
                    name: "Art",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/11.png'),
                    name: "Technology",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/1.png'),
                    name: "Vlogs",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/2.png'),
                    name: "Film Making",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/3.png'),
                    name: "Podcast",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/4.png'),
                    name: "Sports",
                    videos: "4321"
                },
                {

                    image: require('../../../assets/images/5.png'),
                    name: "Science",
                    videos: "4321"
                }
            ]
        }
    }

    static navigationOptions = { header: null }
    render() {
        return (
            <View style={styles.container}>
                <AppHeader navigation={this.props.navigation} />
                <ScrollView>
                    <ImageBackground source={require("../../../assets/images/bg.png")} style={styles.content}>
                        <Image
                            style={{ width: 130, height: 130, marginLeft: "auto", marginRight: "auto", marginBottom: 20, marginTop: 20 }}
                            source={require('../../../assets/images/logo2.png')} />
                        <Text style={{ color: "white", textAlign: "center", marginBottom: 100, fontSize: 14, fontFamily: "Roboto-Regular" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    </ImageBackground>
                    <View style={{marginBottom:80}}>
                        <Cards data={this.state.data} />
                    </View>
                
                </ScrollView>

            </View>
        );
    }
};

export default Categories;


