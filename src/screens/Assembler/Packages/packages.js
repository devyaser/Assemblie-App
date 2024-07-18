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


// import AppFooter from '../../Footer/footer'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import { Header } from 'react-navigation-stack'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton'
import styles from '../../Styles/Assembler/Packages/packagesStyles'
import axios from 'axios'
import {connect} from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'

class Packages extends React.Component {
    constructor(props) {
        super()
        this.state = {
            // packages: [
            //     {
            //         name: "BRONZE",
            //         price: "5",
            //         duration: "For 1 Month",
            //         backgroundColor: "#cd8032",
            //         textColor: "#fff",
            //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            //     },
            //     {
            //         name: "SILVER",
            //         price: "25",
            //         duration: "For 6 Months",
            //         backgroundColor: "#ededed",
            //         textColor: "#000",
            //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            //     },
            //     {
            //         name: "GOLD",
            //         price: "35",
            //         duration: "For 1 Month",
            //         backgroundColor: "#d5ae37",
            //         textColor: "#fff",
            //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            //     },
            //     {
            //         name: "PLATINUM",
            //         price: "45",
            //         duration: "For 1 Month",
            //         backgroundColor: "#9f937b",
            //         textColor: "#fff ",
            //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            //     },
            //     {
            //         name: "DIAMOND",
            //         price: "50",
            //         duration: "For 1 Month",
            //         backgroundColor: "#373634",
            //         textColor: "#fff",
            //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            //     },
            // ],
            loading:false,
            packages:[]
        }
    }

    onFocus =  () => {
        this.getPackages()
    }

    getPackages = async() => {
        this.setState({
            loading:true
        })
        await axios({
            method:'GET',
            url:`/api/packages/${this.props.user._id}`
        }).then((res) => {
            console.log(res)
            this.setState({
                loading:false,
                packages:res.data
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                loading:false
            })
        })
    }

    componentDidMount = () => {
     this.getPackages()   
     this.focusListener = this.props.navigation.addListener('focus', () => {
        this.onFocus()
    })
    }

    // componentWillUnmount(){
    //     this.focusListener.remove()
    // }

   

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
                               
                            })}} style={{width:"70%"}} />
                        </View>

                    </View>
                })}
            </ScrollView>
        );
    }
};


const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, null)(Packages)


