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
import stripe from 'tipsi-stripe';
import axios from 'axios'
import Entypo from 'react-native-vector-icons/Entypo'
import {connect} from 'react-redux'

stripe.setOptions({
    publishableKey: 'pk_test_51HJecfDK0ioqWXMOfEJ4NVSW2ITUXrOpF1wHQVZqlAmSXQuNPMEVFu03aXP5YcRHMNR2cXZlpij33mrd8nqtQVMl00AlyFoJdd',
});

class Checkout extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    reqPayment = () => {
        stripe.paymentRequestWithCardForm().then(res => {
            this.buyPackage(res.tokenId)
        }).catch(err =>{
            console.log(err)
        })
    }

    buyPackage = async(token) => {
        await axios({
            method:'post',
            url:'/api/stripe/checkout/mobile',
            data:{
                token:token,
                email:this.props.user.email,
                price:this.props.route.params.price,
                itemName:this.props.route.params.itemName
            }
        }).then((res)=>{
            this.saveTransaction()
        }).catch(err => {
            console.log(err)
        })
    }

    saveTransaction = async() => {
        await axios({
            method:'post',
            url:'/api/transaction/create-transaction',
            data:{
                itemName:this.props.route.params.itemName,
                price:this.props.route.params.price,
                payee:this.props.user.email,
                userId:this.props.route.params.userId,
            }
        }).then((res)=>{
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    
    
    render(){
        console.log(this.props.route.params)
        return(
            <View style={{flex:1, backgroundColor:'#1f1f1f'}}>
                <View style={{display:'flex', alignItems:'center', justifyContent:'center', flex:1}}>
                    <Entypo name="paypal" color="#EEBF00" size={45}/>
                    <Text style={{color:'white', marginTop:20, fontFamily:'Roboto-Bold', fontSize:18}}>Pay Using PayPal</Text>
                </View>
                <View style={{borderColor:'#EEBF00', borderWidth:1}}></View>
                <View style={{display:'flex', alignItems:'center', justifyContent:'center', flex:1}}>
                    <TouchableOpacity onPress={()=>this.reqPayment()} style={{alignItems:'center'}}>
                        <Entypo name="credit-card" color="#EEBF00" size={45}/>
                        <Text style={{color:'white', marginTop:20, fontFamily:'Roboto-Bold', fontSize:18}}>Pay Using Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, null)(Checkout)