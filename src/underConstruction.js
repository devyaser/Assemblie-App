import React from 'react'
import {
    View,
    Text,
    Dimensions
} from 'react-native'

class UnderConstruction extends React.Component{
    render(){
        return(
            <View style={{
                height:Dimensions.get('window').height - 60,
                display:"flex",
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:"#1f1f1f"
            }}>
                <Text style={{
                    fontSize:20,
                    color:"#eebf00"
                }}>
                    Under Construction
                </Text>
            </View>
        )
    }
}

export default UnderConstruction