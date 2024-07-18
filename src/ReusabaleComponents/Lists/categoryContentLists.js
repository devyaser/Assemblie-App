import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native'
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../screens/Styles/ReusableComponents/Lists/categoryContentListsStyles'

class CategoryContentList extends React.Component {
    render() {
        return (
            <View>
                {this.props.data.map((v, i) => {
                    return <View style={styles.row}>
                        <TouchableOpacity>
                            <View style={styles.box1}>
                                {/* <Image source={v.image} style={styles.image} /> */}
                                <ImageBackground source={v.image} style={styles.image}>
                                    <View style={styles.countOnImage}>
                                        <Text style={styles.countTextOnImage}>{v.videosCount}</Text>
                                        <MaterialCommunityIcons name={'playlist-plus'} size={20} color={'#fff'} />
                                    </View>
                                </ImageBackground>
                                <View>
                                    <Text style={styles.name}>{v.name}</Text>
                                    <Text style={styles.videosCount}>{v.videosCount} Videos</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity>
                                    <FontistoIcons name='more-v-a'
                                        color="#8E8E93"
                                        size={25} style={{ marginTop: 5 }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                })}
            </View>
        )
    }
}


export default CategoryContentList