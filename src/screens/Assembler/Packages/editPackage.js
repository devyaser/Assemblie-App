import React from 'react'
import {
    View, Text,
    StyleSheet,
    Dimensions, Picker, TouchableOpacity, ScrollView,
    Image,
    TextInput

} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Input } from 'react-native-elements';
import ColorPicker from './colorPicker'
import Icon from 'react-native-vector-icons/AntDesign'
import ActionSheet from 'react-native-actions-sheet'
import { Button } from 'native-base';
import IoniIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PrimaryButton from '../../../ReusabaleComponents/Buttons/PrimaryButton';
import styles from '../../Styles/Assembler/Packages/editPackageStyles'


class EditPackage extends React.Component {
    constructor() {
        super();
        this.state = {
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            selectedMonth: null,
            selectedColor: null,
            categories: [
                {
                    name: "Videos",
                    checked: false
                },
                {
                    name: "Images",
                    checked: false
                },
                {
                    name: "Streams",
                    checked: false
                },
                {
                    name: "Posts",
                    checked: false
                },
                {
                    name: "Games",
                    checked: false
                },
                {
                    name: "Sports",
                    checked: false
                },
                {
                    name: "Books",
                    checked: false
                },
                {
                    name: "Fun",
                    checked: false
                },
                {
                    name: "Films",
                    checked: false
                },

            ]
        }
    }

    render() {
        { this.props.route.params && this.props.route.params.selectedColor !== this.state.selectedColor && this.setState({ selectedColor: this.props.route.params.selectedColor }) }
        console.log(this.state.selectedColor, '//')
        let actionSheet;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Text style={styles.heading}>EDIT PACKAGE</Text>
                        <Input
                            placeholder='Package Name'
                            placeholderTextColor='#8E8E93'
                            inputStyle={styles.input}
                            inputContainerStyle={styles.inputContainer}
                        />

                        <View style={styles.colorRow}>
                            <Text style={styles.colorText}>Color :</Text>

                            <TouchableOpacity>
                                <View style={[styles.colorCircle, { backgroundColor: '#CD8032' }]}>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={[styles.colorCircle, { backgroundColor: '#EDEDED' }]}>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={[styles.colorCircle, { backgroundColor: '#D5AE37' }]}>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={[styles.colorCircle, { backgroundColor: '#9F937D' }]}>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
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
                            keyboardType={'numeric'}
                            inputContainerStyle={styles.inputContainer}
                        />

                        <View style={styles.checkBoxArea}>
                            {this.state.categories.map((v, i) => {
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
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TextInput multiline={true} numberOfLines={5} style={styles.textArea} placeholder={'Description'} placeholderTextColor={'#8E8E93'} />

                        </View>

                        <View>
                            {/* <Button warning style={styles.doneBtn}>
                                <Text style={{ fontFamily: "Roboto-Bold", fontSize: RFPercentage(2.2) }}>DONE</Text>
                            </Button> */}
                            <PrimaryButton title={'done'} action={() => { console.log('done') }} style={{ width: Dimensions.get('window').width - 60, marginTop: 10 }} />
                            <TouchableOpacity>
                                <Text style={styles.dltBtn}>
                                    DELETE
                        </Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </ScrollView>
            </View >

        )
    }
}

export default EditPackage