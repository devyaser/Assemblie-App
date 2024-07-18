import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import { connect, useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importing Icons

import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontIcons from 'react-native-vector-icons/FontAwesome'


// Importing Screens

// UnAuthed 

import AskSignin from './screens/Auth/signin/ask'
import Signin from './screens/Auth/signin/signin'
import Signup from './screens/Auth/signup/signup'
import SignupAs from './screens/Auth/signup/signupAs'
import Conditions from './screens/Auth/signup/termsAndContions'
import Verification from './screens/Auth/signup/verification'

// Public

import Categories from './screens/Assemble/Categories/categories';
import Search from './screens/Search/search'

// Assemble Screens
import Account from './screens/Assemble/Account/account'
import EditProfile from './screens/Assemble/Profile/editProfile'
import MySubscriptions from './screens/Assemble/Subscribtions/mySubscriptions'
import Content from './screens/Assemble/Content/content'
import BillingInfo from './screens/Assemble/Payment/billingInformation'
import LiveStream from './screens/Assemble/LiveStream/liveStreams'
import SingleStream from './screens/Assemble/LiveStream/Stream/singleStream'
import Assemblers from './screens/Assemble/Assemblers/assemblers'
import UserProfile from './screens/Assemble/Profile/userProfile';
import FreeContent from './screens/Assemble/FreeContent/freeContent'
import Stripe from './screens/Assemble/Stripe/Stripe'
import checkout from './screens/Assemble/Payment/checkout'

// Assembler Screens
import Upload from './screens/Assembler/Upload/upload'
import Packages from './screens/Assembler/Packages/packages'
import ColorPanel from './screens/Assembler/Packages/colorPicker'
import EditPackage from './screens/Assembler/Packages/editPackage'
import AddPackage from './screens/Assembler/Packages/addPackage'
import Subscribers from './screens/Assembler/Subscribers/subscribers'
import ShareWirhSubscribers from './screens/Assembler/Packages/share'

import UnderConstruction from './underConstruction'
import { getUserData } from './storage/storage';
import { logout } from './actions/auth';
import Checkout from './screens/Assemble/Payment/checkout';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthedStacks() {
    return (<Stack.Navigator
        headerMode="screen"
    >

        <Stack.Screen name="categories" component={Categories} options={{ headerShown: false }} />
        <Stack.Screen name="assembler/upload" component={Upload} options={{ headerShown: false }} />
        <Stack.Screen name="account" component={Account} options={({ navigation, route }) => (
            accountHeaderStyles({ navigation, route }, "ACCOUNT")
        )} />
        <Stack.Screen name="editProfile" component={EditProfile} options={({ navigation, route }) => (
            editProfileHeaderStyles({ navigation, route }, "EDIT PROFILE")
        )} />
        <Stack.Screen name="packages" component={Packages} options={({ navigation, route }) => (
            packagesHeaderStyles({ navigation, route }, "PACKAGES")
        )} />
        <Stack.Screen name="sharePackageWithSubscribers" component={ShareWirhSubscribers} options={({ navigation, route }) => (
            packagesHeaderStyles({ navigation, route }, "PACKAGES", true)
        )} />
        <Stack.Screen name="editPackage" component={EditPackage} options={({ navigation, route }) => (
            editProfileHeaderStyles({ navigation, route }, "PACKAGES", true)
        )} />
        <Stack.Screen name="billingInfo" component={BillingInfo} options={({ navigation, route }) => (
            editProfileHeaderStyles({ navigation, route }, "BILLING INFORMATION", true)
        )} />
        <Stack.Screen name="colorPanel" component={ColorPanel} options={{ headerShown: false }} />
        <Stack.Screen name="content" component={Content} options={({ navigation, route }) => (
            menuHeaderStyles({ navigation, route }, "CONTENT")
        )} />
        <Stack.Screen name="subscribers" component={Subscribers} options={({ navigation, route }) => (
            menuHeaderStyles({ navigation, route }, "SUBSCRIBERS")
        )} />
        <Stack.Screen name="liveStream" component={LiveStream} options={({ navigation, route }) => (
            menuHeaderStyles({ navigation, route }, "LIVE STREAM")
        )} />

        <Stack.Screen name="mySubscriptions" component={MySubscriptions} options={({ navigation, route }) => (
            menuHeaderStyles({ navigation, route }, "MY SUBSCRIPTIONS")
        )} />

        <Stack.Screen name="assemblers" component={Assemblers} options={({ navigation, route }) => (
            menuHeaderStyles({ navigation, route }, "ASSEMBLERS")
        )} />

        <Stack.Screen name="addPackage" component={AddPackage} options={({ navigation, route }) => (
            editProfileHeaderStyles({ navigation, route }, "PACKAGES", true)
        )} />
        
        <Stack.Screen name="profile" component={UserProfile} options={{headerShown:false}}/>
        <Stack.Screen name="FreeContent" component={FreeContent} options={({ navigation, route }) => (
            menuHeaderStyles({ navigation, route }, "CONTENT")
        )}/>
        <Stack.Screen name="Stripe" component={Stripe} options={({ navigation, route }) => (
            menuHeaderStyles({ navigation, route }, "Pay By Card")
        )}/>
        <Stack.Screen name="Checkout" component={Checkout} options={({ navigation, route }) => (
            menuHeaderStyles({ navigation, route }, "Checkout")
        )}/>

        

    </Stack.Navigator>)
}

// const logout = async(navigation) => {
//    console.log('LOGOUT')
//     AsyncStorage.removeItem('@userData').then(res=>{
//       navigation.navigate('categories')
//    })
   
// }

function accountHeaderStyles({ navigation, route }, title) {
    const dispatch = useDispatch()
    return {
        headerShown: true,
        title: title,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTintColor: '#EEBF00',
        headerRight: () => (
            <TouchableOpacity onPress={()=>dispatch(logout())}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                    <Text style={{ color: "#fff", fontFamily: "Roboto-Medium", fontSize: 16, marginRight: 4 }}>Logout</Text>
                    <MatIcons name='logout'
                        color="#fff"
                        size={22} />
                </View>
            </TouchableOpacity>
        ),
    }
}

function packagesHeaderStyles({ navigation, route }, title, share) {

    return {
        headerShown: true,
        title: title,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTintColor: '#EEBF00',
        headerRight: () => (
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 15 }}>
                {!share ? <TouchableOpacity onPress={()=>navigation.navigate('addPackage')}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                        <Text style={{ color: "#fff", fontFamily: "Roboto-Medium", fontSize: 16, marginRight: 4 }}>ADD NEW</Text>
                        <AntIcon name={'pluscircleo'} color={'#eebf00'} size={22} />

                    </View>

                </TouchableOpacity> :
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                            <Text style={{ color: "#fff", fontFamily: "Roboto-Medium", fontSize: 16, marginRight: 4 }}>CANCEL</Text>

                        </View>
                    </TouchableOpacity>}

                <TouchableOpacity style={{ marginLeft: 8 }}>
                    <FontistoIcons name='more-v-a'
                        color="#fff"
                        size={22} />
                </TouchableOpacity>
            </View>
        ),
    }
}

function editProfileHeaderStyles({ navigation, route }, title, boo) {

    // if (lilScreen) {
    if (Dimensions.get('window').width < 350) {
        title = "BILLING INFO."
    }
    // }

    return {
        headerShown: true,
        title: title,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTintColor: '#EEBF00',
        headerRight: () => (
            <View>
                {/* <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ color: "#fff", fontFamily: "Roboto-Medium", fontSize: 15, marginRight: 4 }}>{boo ? "RESET" : "SAVE"}</Text>
                    </TouchableOpacity>
                    <Text style={{ color: "#fff", fontSize: 18, marginHorizontal: 6 }}>|</Text>
                    <TouchableOpacity>
                        <Text style={{ color: "#fff", fontFamily: "Roboto-Medium", fontSize: 15, marginRight: 4 }}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 8 }}>
                        <FontistoIcons name='more-v-a'
                            color="#fff"
                            size={22} />
                    </TouchableOpacity>
                </View> */}
            </View>
        ),
    }
}


function simpleHeaderStyles({ navigation, route }, title) {
    return {
        headerShown: true,
        title: title,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTintColor: '#EEBF00',
    }
}

function menuHeaderStyles({ navigation, route }, title) {

    return {
        headerShown: true,
        title: title,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTintColor: '#EEBF00',
        headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
                <FontistoIcons name='more-v-a'
                    color="#fff"
                    size={22} />
            </TouchableOpacity>
        ),
    }
}



class Root extends React.Component {
    constructor() {
        super()
        this.state = {
            token:null,
            verified:null,
            isAuth:false
        }
    }


    getData = async() => {
        var userData = await AsyncStorage.getItem('@userData')
        var jsonData = JSON.parse(userData)


        var authData = await AsyncStorage.getItem('@isAuthenticated')
        var jsonAuth = JSON.parse(authData)
       
        this.setState({
            token:jsonData.token,
            verified:jsonData.verified,
            isAuth:jsonAuth
        })
    }

    componentDidMount = async() =>{
        this.getData()
    }



    guestTabs() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Home') {
                            return focused ? <View style={styles.focusedTab}>
                                <View style={styles.focusedIcon}>
                                    <FontIcons name={'home'} color={focused ? "#fff" : "#8f8e93"} size={35} />
                                </View>
                            </View> : <View style={{ marginBottom: 5 }}><FontIcons name={'home'} color={focused ? "#fff" : "#8f8e93"} size={34} /><Text style={styles.tabText}>Home</Text></View>

                        } else if (route.name === 'Live') {
                            return focused ? <View style={styles.focusedTab}>
                                <View style={styles.focusedIcon}>
                                    <Image source={require('./assets/images/liveeWhite.png')} />
                                </View>
                            </View> : <Image source={require('./assets/images/livee.png')} />
                        }
                        else if (route.name === 'Subscribtions') {
                            return focused ? <View style={styles.focusedTab}>
                                <View style={styles.focusedIcon}>
                                    <Image source={require('./assets/images/subscribeWhite.png')} />
                                </View>
                            </View> : <Image source={require('./assets/images/subscribe.png')} />
                        }
                        else if (route.name === 'Inbox') {
                            return focused ? <View style={styles.focusedTab}>
                                <View style={styles.focusedIcon}>
                                    <Image source={require('./assets/images/inboxWhite.png')} />
                                </View>
                            </View> : <Image source={require('./assets/images/inbox.png')} />
                        }
                        else if (route.name === 'Others') {
                            return focused ? <View style={styles.focusedTab}>
                                <View style={styles.focusedIcon}>
                                    <Image source={require('./assets/images/othersWhite.png')} />
                                </View>
                            </View> : <Image source={require('./assets/images/others.png')} />
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#fff',
                    inactiveTintColor: '#8f8e93',
                    showLabel: false,
                    tabStyle: {
                        borderTopWidth: 1,
                        borderColor: "#eebf00"
                    },
                    style: { backgroundColor: "#1f1f1f", height: 60 },
                    keyboardHidesTabBar: true
                }}
                initialRouteName={"Home"}
            >
                <Tab.Screen name="Live" component={UnderConstruction} />
                <Tab.Screen name="Subscribtions" component={UnderConstruction} />
                <Tab.Screen name="Home" component={Categories} />
                <Tab.Screen name="Inbox" component={UnderConstruction} />
                <Tab.Screen name="Others" component={UnderConstruction} />
            </Tab.Navigator>
        );
    }

    authedTabs() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Home') {
                            return focused ? <View style={styles.focusedTab}>
                                <View style={styles.focusedIcon}>
                                    <FontIcons name={'home'} color={focused ? "#fff" : "#8f8e93"} size={35} />
                                </View>
                            </View> : <View style={{ marginBottom: 5 }}><FontIcons name={'home'} color={focused ? "#fff" : "#8f8e93"} size={34} /><Text style={styles.tabText}>Home</Text></View>

                        } else if (route.name === 'Live') {
                            return focused ? <View style={styles.focusedTab}>
                                <View style={styles.focusedIcon}>
                                    <Image source={require('./assets/images/liveeWhite.png')} />
                                </View>
                            </View> : <Image source={require('./assets/images/livee.png')} />
                        }
                        else if (route.name === 'Subscribtions') {
                            return focused ? <View style={styles.focusedTab}>
                                <View style={styles.focusedIcon}>
                                    <Image source={require('./assets/images/subscribeWhite.png')} />
                                </View>
                            </View> : <Image source={require('./assets/images/subscribe.png')} />
                        }
                        else if (route.name === 'Inbox') {
                            return focused ? <View style={styles.focusedTab}>
                                <View style={styles.focusedIcon}>
                                    <Image source={require('./assets/images/inboxWhite.png')} />
                                </View>
                            </View> : <Image source={require('./assets/images/inbox.png')} />
                        }
                        else if (route.name === 'Others') {
                            return focused ? <View style={styles.focusedTab}>
                                <View style={styles.focusedIcon}>
                                    <Image source={require('./assets/images/othersWhite.png')} />
                                </View>
                            </View> : <Image source={require('./assets/images/others.png')} />
                        }

                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#fff',
                    inactiveTintColor: '#8f8e93',
                    showLabel: false,
                    tabStyle: {
                        borderTopColor:"transparent",
                        borderTopWidth:0,
                        elavation:0 
                        // borderTopWidth: 2,
                        // borderColor: "#eebf00"
                    },
                    style: { backgroundColor: "#1f1f1f", height: 60 },
                    keyboardHidesTabBar: true
                }}
                initialRouteName={"Home"}
            >
                <Tab.Screen name="Live" component={UnderConstruction} />
                <Tab.Screen name="Subscribtions" component={UnderConstruction} />
                <Tab.Screen name="Home" component={AuthedStacks} />
                <Tab.Screen name="Inbox" component={UnderConstruction} />
                <Tab.Screen name="Others" component={UnderConstruction} />

            </Tab.Navigator>
        );
    }


    render() {
        console.log(this.props.isAuthenticated,'auth', this.state.verified)
        return (
            <>
                <Stack.Navigator
                    headerMode="screen"
                >
                    {this.props.user ?
                        <>
                            <Stack.Screen name="home" component={this.authedTabs} options={{ headerShown: false }} />
                            <Stack.Screen name="singleStream" component={SingleStream} options={{ headerShown: false }} />
                            <Stack.Screen name="search" component={Search} options={{ headerShown: false }} />
                        </>
                        :

                        <>
                            <Stack.Screen name="categories" component={this.guestTabs} options={{ headerShown: false }} />
                            <Stack.Screen name="search" component={Search} options={{ headerShown: false }} />

                            <Stack.Screen name="askSignin" component={AskSignin} options={({ navigation, route }) => (
                                simpleHeaderStyles({ navigation, route }, "SIGN IN")
                            )} />
                            <Stack.Screen name="signin" component={Signin} options={({ navigation, route }) => (
                                simpleHeaderStyles({ navigation, route }, "SIGN IN")
                            )} />
                            <Stack.Screen name="signup" component={Signup} options={({ navigation, route }) => (
                                simpleHeaderStyles({ navigation, route }, "SIGN UP")
                            )} />
                            <Stack.Screen name="signupas" component={SignupAs} options={({ navigation, route }) => (
                                simpleHeaderStyles({ navigation, route }, "SIGN UP AS")
                            )} />
                            <Stack.Screen name="conditions" component={Conditions} options={({ navigation, route }) => (
                                simpleHeaderStyles({ navigation, route }, "TERMS & CONDITIONS")
                            )} />
                            <Stack.Screen name="verification" component={Verification} options={({ navigation, route }) => (
                                simpleHeaderStyles({ navigation, route }, "VERIFICATION")
                            )} />
                        </>}
                </Stack.Navigator>
            </>
        )
    }
}

const styles = StyleSheet.create({
    focusedTab: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1f1f1f", width: 80, height: 80, borderRadius: 80, marginBottom: 20 },
    focusedIcon: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: "#eebf00",
        display: "flex", alignItems: "center", justifyContent: "center",
        borderWidth: 6,
        borderColor: "#494019"
    },
    tabText: { color: "#8e8e93", fontFamily: "Roboto-Regular", fontSize: 11 },
    headerStyle: {
        backgroundColor: '#1f1f1f',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
    },
    headerTitleStyle: {
        fontFamily: "Roboto-Regular",
        marginLeft: -25
    },

})

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isAuthenticated:state.auth.isAuthenticated,
        isVerified:state.auth.userVerified,
        logout:state.auth.logout
    }
}



export default connect(mapStateToProps)(Root)