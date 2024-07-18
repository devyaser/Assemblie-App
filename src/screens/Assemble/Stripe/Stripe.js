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

stripe.setOptions({
    publishableKey: 'pk_test_51HJecfDK0ioqWXMOfEJ4NVSW2ITUXrOpF1wHQVZqlAmSXQuNPMEVFu03aXP5YcRHMNR2cXZlpij33mrd8nqtQVMl00AlyFoJdd',
});
class Stripe extends React.Component {
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
            url:'/api/stripe/mobile-checkout',
            data:{
                token:token,
                email:'johndoe@gmail.com',
                price:this.props.route.params.price,
                itemName:this.props.route.params.itemName
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
            <View>
                <TouchableOpacity onPress={()=>this.reqPayment()}>
                    <Text>Pay By Card</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Stripe