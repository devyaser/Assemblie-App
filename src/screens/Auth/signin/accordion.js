import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View, Image, } from "native-base";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableOpacity, Switch, StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import styles from '../../Styles/Auth/Signin/accordionStyles'




export default class Accordions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            switch: true,
            dataArray: [
                { title: "GENERAL", content: this.generalContent() },
                { title: "HELP & LEGAL", content: this.helpContent() },
            ],
        }
        this.generalContent = this.generalContent.bind(this)
    }


    generalContent() {
        return <View style={{paddingHorizontal:25, marginVertical:-10}}>
            <TouchableOpacity><Text style={styles.textBtn}>Home</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.textBtn}>Categories</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.textBtn}>Advertisers</Text></TouchableOpacity>

            <TouchableOpacity><Text style={styles.textBtn}>About</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.textBtn}>Blog</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.textBtn}>Partners</Text></TouchableOpacity>
            <View style={styles.dual}>
                <Text style={styles.textBtn}>Dark Mode</Text>
                <Switch
                    trackColor={{ false: "#31831f", true: "#31831f" }}
                    thumbColor={true ? "#3c3c44" : "#3c3c44"}
                    ios_backgroundColor="#3e3e3e"
                    // onValueChange={()=>{this.setState({switch:!this.state.switch})}}
                    value={true}
                />
            </View>
            <View style={styles.dual}>
                <Text style={styles.textBtn}>Language</Text>
                <TouchableOpacity>
                    <AntIcon name={'right'} size={18} color={'#8E8E93'} />
                </TouchableOpacity>
            </View>

        </View>
    }

    helpContent() {
        return <View style={{paddingHorizontal:25, marginVertical:-10}}>
        <TouchableOpacity><Text style={styles.textBtn}>Ad Choices</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.textBtn}>Community Guidelines</Text></TouchableOpacity>

        <TouchableOpacity><Text style={styles.textBtn}>Cookie Policy</Text></TouchableOpacity>

        <TouchableOpacity><Text style={styles.textBtn}>Help</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.textBtn}>Privacy Policy</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.textBtn}>Contact Us</Text></TouchableOpacity>

    </View>
    }

    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                alignItems: "center",


            }}>
                {item.title === "GENERAL" ? <Icon style={{ fontSize: 22, color: "#8E8E93" }} name="ios-settings" /> : <Icon style={{ fontSize: 22, color: "#8E8E93" }} name="ios-information-circle" />}

                <Text style={{ fontSize: 16, color: "#8E8E93", fontFamily: "Roboto-Bold", marginLeft: 6, marginRight: 6 }}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18, color: "#8E8E93" }} name="md-arrow-dropup" />
                    : <Icon style={{ fontSize: 18, color: "#8E8E93" }} name="md-arrow-dropdown" />}
            </View>
        );
    }
    _renderContent(item) {
        return (
            <View
                style={{
                    padding: 10,
                    color: "#8E8E93"
                }}
            >
                {item.content}
            </View>
        );
    }
    render() {
        return (

            <Accordion
                dataArray={this.state.dataArray}
                animation={true}
                expanded={true}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                style={{ border: "none" }}
            />

        );
    }
}
<br />

