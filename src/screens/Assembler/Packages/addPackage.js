import React from 'react'
import {
    View, Text,
    StyleSheet,
    Dimensions, Picker, TouchableOpacity, ScrollView,
    Image,
    TextInput,
    ActivityIndicator

} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Input, CheckBox } from 'react-native-elements';
import ColorPicker from './colorPicker'
import Icon from 'react-native-vector-icons/AntDesign'
import ActionSheet from 'react-native-actions-sheet'
import { Button } from 'native-base';
import IoniIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton';
import styles from '../../Styles/Assembler/Packages/addPackageStyles'
import axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux'

class AddPackage extends React.Component {
    constructor() {
        super();
        this.state = {
            packageName:null,
            price:null,
            packageType:null,
            description:null,
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            selectedMonth: null,
            selectedColor: null,
            color:'#CD8032',
            loading:false,
            categories: [
                {
                    id:1,
                    name: "Videos",
                    checked: false
                },
                {
                    id:2,
                    name: "Images",
                    checked: false
                },
                {
                    id:3,
                    name: "Streams",
                    checked: false
                },
                {
                    id:4,
                    name: "Posts",
                    checked: false
                },
                {
                    id:5,
                    name: "Games",
                    checked: false
                },
                {
                    id:6,
                    name: "Sports",
                    checked: false
                },
                {
                    id:7,
                    name: "Books",
                    checked: false
                },
                {
                    id:8,
                    name: "Fun",
                    checked: false
                },
                {
                    id:9,
                    name: "Films",
                    checked: false
                },

            ],
            selectedCategories :[]
        }
    }

   

    handleCreate = async() => {
        this.setState({
            loading:true
        })
        await axios({
            method:'POST',
            url:'/api/packages/create',
            data:{
                package_name: this.state.packageName,
                price:this.state.price,
                months:this.state.selectedMonth,
                package_type:this.state.selectedCategories,
                description:this.state.description,
                color:this.state.color,
                userId:this.props.user._id
            }
        }).then((res) => {
            console.log(res)
            this.setState({
                loading:false
            },()=>{
                this.props.navigation.navigate('packages')
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                loading:false
            })
        })

        console.log(this.props.user._id)
    }

    handleCategories = (val) => {
        if(val.checked){
            this.setState({
                ...(val.checked = false)
            }, ()=>this.state.selectedCategories.pop(val.name))
            
        }else{
            this.setState({
                ...(val.checked = true)
            }, () => {
                this.state.selectedCategories.push(val.name)
            })

        }
    }

    render() {
        let actionSheet;
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.loading}
                    color="#eebf00"
                    animation="fade"
                    textContent={'Loading...'}
                    textStyle={{color:'#eebf00'}}
                />
                <ScrollView>
                    <View>
                        <Text style={styles.heading}>ADD PACKAGE</Text>
                        <Input
                            placeholder='Package Name'
                            placeholderTextColor='#8E8E93'
                            inputStyle={styles.input}
                            value={this.state.packageName}
                            onChangeText={(packageName) => this.setState({packageName})}
                            inputContainerStyle={styles.inputContainer}
                        />

                        <View style={styles.colorRow}>
                            <Text style={styles.colorText}>Color :</Text>

                            <TouchableOpacity onPress={()=>this.setState({color:'#CD8032'})}>
                                <View style={[styles.colorCircle, { backgroundColor: '#CD8032' }]}>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.setState({color:'#EDEDED'})}>
                                <View style={[styles.colorCircle, { backgroundColor: '#EDEDED' }]}>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.setState({color:'#D5AE37'})}>
                                <View style={[styles.colorCircle, { backgroundColor: '#D5AE37' }]}>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.setState({color:'#9F937D'})}>
                                <View style={[styles.colorCircle, { backgroundColor: '#9F937D' }]}>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.setState({color:'#373632'})}>
                                <View style={[styles.colorCircle, { backgroundColor: '#373632' }]}>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('colorPanel') }}>
                                {this.state.selectedColor ? <View style={[styles.colorCircle, { backgroundColor: this.state.selectedColor, marginLeft: 20 }]}>

                                </View>
                                    : <View style={styles.colorWheel}>
                                        <Image source={require('../../../assets/images/color-wheel.png')} />
                                    </View>}
                            </TouchableOpacity>
                        </View>



                        <TouchableOpacity onPress={() => { actionSheet.setModalVisible(); }}>
                            <View style={styles.selectBox}>
                                <Text style={styles.selectBoxText}>{this.state.selectedMonth ? this.state.selectedMonth : "Select Months"}</Text>
                                <Icon name={'caretdown'} color='#8E8E93' />
                            </View>
                        </TouchableOpacity>


                        <ActionSheet ref={ref => (actionSheet = ref)}
                            openAnimationSpeed={50}
                            containerStyle={styles.actionSheet}
                        >
                            <ScrollView>
                                <View style={{ marginBottom: 24 }}>
                                    {this.state.months.map((v, i) => {
                                        return <TouchableOpacity onPress={() => { this.setState({ selectedMonth: v }); actionSheet.setModalVisible(); }}>
                                            <Text style={styles.months}>{v}</Text>
                                        </TouchableOpacity>
                                    })}
                                </View>
                            </ScrollView>
                        </ActionSheet>

                        <Input
                            placeholder='Price'
                            placeholderTextColor='#8E8E93'
                            inputStyle={styles.input}
                            value={this.state.price}
                            onChangeText={(price) => this.setState({price})}
                            keyboardType={'numeric'}
                            inputContainerStyle={styles.inputContainer}
                        />

                        <View style={styles.checkBoxArea}>
                            {/* {this.state.categories.map((v, i) => {
                                return <View style={styles.checkBox}>
                                    <TouchableOpacity>
                                        <View style={styles.checkBoxBg}>
                                            {!v.checked && <MaterialIcons color={'#eebf00'} size={18} name={'done'} />}
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.checkBoxText}>
                                        {v.name}
                                    </Text>
                                </View>
                            })}
                            <TouchableOpacity>
                                <View style={styles.checkBox}>
                                    <View style={styles.checkBoxBg}>
                                        <IoniIcons name={'ios-add'} size={18} color={'#3E3E3E'} />
                                    </View>
                                    <Text style={styles.checkBoxText}>
                                        More
                                    </Text>
                                </View>
                            </TouchableOpacity> */}
                            {
                                this.state.categories.map((v,i) => {
                                    return (
                                        <View style={styles.checkBox}>
                                            <CheckBox
                                            containerStyle={{backgroundColor:'#0C0C0C', borderColor:null}}
                                            checkedColor="#EEBF00"
                                            uncheckedColor="#8E8E93"
                                            textStyle={{color:'#8E8E93'}}
                                            title={v.name}
                                            checked={v.checked}
                                            onPress={()=>this.handleCategories(v)}
                                            />
                                        </View>

                                    )
                                })
                            }
                        </View>

                        <View>
                            <TextInput multiline={true} numberOfLines={5} style={styles.textArea} placeholder={'Description'} value={this.state.description} onChangeText={(description) => this.setState({description})} placeholderTextColor={'#8E8E93'} />
                        </View>
                        <View>
                            <PrimaryButton title={'done'} action={() => this.handleCreate()} style={{ width: Dimensions.get('window').width - 60, marginTop: 10, marginBottom:20 }} />
                        </View>


                    </View>
                </ScrollView>
            </View >

        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, null)(AddPackage)