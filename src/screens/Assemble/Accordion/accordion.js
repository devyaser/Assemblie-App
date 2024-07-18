import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View, Image, } from "native-base";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableOpacity, Switch, StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import styles from '../../Styles/Assemble/Accordion/accordionStyles'




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
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('packages')}}><Text style={styles.textBtn}>Packages</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('content')}}><Text style={styles.textBtn}>Content</Text></TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('FreeContent')}><Text style={styles.textBtn}>Free Content</Text></TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('liveStream')}}><Text style={styles.textBtn}>Live Stream</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.textBtn}>What's New</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.textBtn}>Videos</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.textBtn}>My Activity</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('assemblers')}}><Text style={styles.textBtn}>Assemblers</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('mySubscriptions')}}><Text style={styles.textBtn}>My Subscriptions</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('subscribers')}}><Text style={styles.textBtn} >Subscribers</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.textBtn}>Transactions</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.textBtn}>About</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.textBtn}>Others</Text></TouchableOpacity>

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
                renderContent={this._renderContent}
                renderHeader={this._renderHeader}
                style={{ border: "none" }}
            />

        );
    }
}
<br />
