import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo'
import { Input } from 'react-native-elements';
import ActionSheet from 'react-native-actions-sheet'
import { RFPercentage } from 'react-native-responsive-fontsize'
import styles from '../../Styles/Assemble/Payment/billingInformationStyles'

class BillingInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [
                "Videos",
                "Images",
                "Streams",
                "Posts",
                "Games",
                "Sports",
                "Books",
                "Fun",
                "Films",

            ],
            selectedCategory: null

        }
    }
    render() {
        let actionSheet;
        console.log(Dimensions.get('window').width)
        return (
            <View style={styles.container}>
                <ScrollView>

                    <View style={{marginBottom:20}}>

                        <Button full light style={styles.madaBtn}>
                            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 14 }}>
                                CONNECT WITH </Text>
                            <Text> </Text>
                            <Image
                                style={{ width: 60, height: 20 }}
                                source={require('../../../assets/images/mada.png')} />
                        </Button>

                        <View style={styles.orLine}>
                            <Text style={styles.orLineLine}>

                            </Text>
                            <Text style={{ color: "#8E8E93", fontFamily: "Roboto-Regular", fontSize: 14 }}>OR</Text>
                            <Text style={styles.orLineLine}>

                            </Text>
                        </View>

                        <View>
                            <Input
                                placeholder='Name on Card*'
                                placeholderTextColor='#8E8E93'
                                inputStyle={styles.input}
                                inputContainerStyle={styles.inputContainer}
                            />
                            <Input
                                placeholder='Card Number*'
                                placeholderTextColor='#8E8E93'
                                inputStyle={styles.input}
                                inputContainerStyle={styles.inputContainer}
                                keyboardType='numeric'
                            />
                            <Input
                                placeholder='CVC*'
                                placeholderTextColor='#8E8E93'
                                inputStyle={styles.input}
                                inputContainerStyle={styles.inputContainer}
                                keyboardType='numeric'
                                maxLength={3}
                            />
                            <Input
                                placeholder='Expiry Date - mm/yy**'
                                placeholderTextColor='#8E8E93'
                                inputStyle={styles.input}
                                inputContainerStyle={styles.inputContainer}
                            />

                            <TouchableOpacity onPress={() => { actionSheet.setModalVisible(); }}>
                                <View style={styles.selectBox}>
                                    <Text style={styles.selectBoxText}>{this.state.selectedCategory ? this.state.selectedCategory : "Category*"}</Text>
                                    <Icon name={'caretdown'} color='#8E8E93' />
                                </View>
                            </TouchableOpacity>

                            <ActionSheet ref={ref => (actionSheet = ref)}
                openAnimationSpeed={50}

                                containerStyle={styles.actionSheet}
                            >
                                <ScrollView>
                                    <View style={{ marginBottom: 24 }}>
                                        {this.state.categories.map((v, i) => {
                                            return <TouchableOpacity onPress={() => { this.setState({ selectedCategory: v }); actionSheet.setModalVisible(); }}>
                                                <Text style={styles.categories}>{v}</Text>
                                            </TouchableOpacity>
                                        })}
                                    </View>
                                </ScrollView>
                            </ActionSheet>

                            <View>
                                <Button warning style={styles.submitBtn}>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: RFPercentage(2.2) }}>SUBMIT</Text>
                                </Button>
                                <TouchableOpacity>
                                    <Text style={styles.cancelBtn}>
                                        CANCEL
                        </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View>
                            <Text style={styles.securedTxt}><Icon name={'lock'} color='#8E8E93' size={16} /> Secured Payment</Text>
                            <Image style={{width:Dimensions.get('window').width - 40, alignSelf:"center", height:40}} source={require('../../../assets/images/cards.png')} />
                        </View>


                    </View>
                </ScrollView>
            </View>
        )
    }
}



export default BillingInfo