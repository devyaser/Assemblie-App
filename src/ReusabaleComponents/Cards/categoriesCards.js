import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, ScrollView } from 'native-base';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AppFooter from '../../screens/Footer/footer'
import styles from '../../screens/Styles/ReusableComponents/Cards/categoriesCardsStyles';

class Cards extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>

                {this.props.data.map((v, i) => {
                    return (
                        <TouchableOpacity>
                            <Card style={styles.card}>
                                <Card.Cover source={v.image} />
                                <Card.Actions style={styles.cardActions}>
                                    <Button>
                                        <Image
                                            style={styles.circle}
                                            source={require('../../assets/images/circle.png')} /> <Text style={styles.name}> {v.name}</Text></Button>
                                    <Button>
                                        <Image
                                            style={styles.eye}
                                            source={require('../../assets/images/eye.png')} /> <Text style={styles.videosCount}> {v.videos}</Text></Button>
                                </Card.Actions>
                            </Card>
                        </TouchableOpacity>

                    )
                })}
                {/* <AppFooter /> */}
                {/* <View style={{ padding: 30 }}>
                    <Text style={{ color: "#8E8E93", fontSize: 12, fontFamily: "Roboto-Regular", textAlign: "center" }}>Privacy Policy - Terms of Service All Trademarks</Text>
                    <Text style={{ color: "#8E8E93", fontSize: 12, fontFamily: "Roboto-Regular", textAlign: "center" }}>Thier Respective Owners @ 2008-2019 Assemblie</Text>
                </View> */}
            </View>

        );
    }
}


export default Cards;