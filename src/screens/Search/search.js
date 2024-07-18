import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import AppHeader from '../Header/header'
import styles from '../Styles/Search/searchStyles';
import { ScrollView } from 'react-native-gesture-handler';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <AppHeader navigation={this.props.navigation} search={true} />
                <ScrollView>
                    <View>
                        <Text style={styles.defaultText}>Your search results will appear here!</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Search