import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import IonIcons from 'react-native-vector-icons/Ionicons'
import VideoCards from '../../../ReusabaleComponents/Cards/videosCards'
import VideoLists from '../../../ReusabaleComponents/Lists/videoLists'
import CategoryContentList from '../../../ReusabaleComponents/Lists/categoryContentLists'
import FloatingActionButton from '../../../ReusabaleComponents/Buttons/FloatingAction'
import Avatar from '../../../ReusabaleComponents/Avatar/Avatar'
import {RFPercentage} from 'react-native-responsive-fontsize'
import styles from '../../Styles/Assemble/Content/content'
import ContentVideoCard from '../../../ReusabaleComponents/Cards/contentVideoCards'
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios'

class FreeContent extends React.Component {
    constructor() {
        super();
        this.state = {
            uploads: [
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/2.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/3.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/4.png')
                }, {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/5.png')
                },
            ],
            recommended: [
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/2.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/3.png')
                },
                {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/4.png')
                }, {
                    name: "John Smith",
                    description: "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and.",
                    avatar: require('../../../assets/images/aboutPic.png'),
                    views: '260k',
                    timeElapsed: "2 days ago",
                    thumbnail: require('../../../assets/images/5.png')
                },
            ],
            topics: [
                {
                    name: "Music",
                    videosCount: '556',
                    image: require('../../../assets/images/1.png')
                },
                {
                    name: "Games",
                    videosCount: '346',
                    image: require('../../../assets/images/2.png')
                },
                {
                    name: "Science",
                    videosCount: '556',
                    image: require('../../../assets/images/3.png')
                },
                {
                    name: "Sports",
                    videosCount: '556',
                    image: require('../../../assets/images/4.png')
                },
            ],
            userVideos:[],
            categories:[],
            uniqueCategories:[],
            loading:true,
            categoriesData:[]
        }
    }

    getFreeContent = async() => {
        await axios({
            method:'get',
            url:'/api/streaming/allstreams'
        }).then((res)=>{
            res.data.map(val => {
                this.setState({
                    userVideos:[...this.state.userVideos, val]
                })
            })
        }).catch(err => {
            console.log(err)
        })
    }

    getVideoCategories = async() => {
        await axios({
            method:'get',
            url:'/api/streaming/allstreams'
        }).then((res)=>{
            res.data.map(val => {
                if(!val.paid){
                    this.setState({
                        categories:[...this.state.categories, val.categories]
                    }, () => {
                        this.setState({
                            uniqueCategories:[... new Set(this.state.categories)],
                            loading:false
                        })
                    })
                }
            })
        }).catch(err => {
            console.log(err)
        })
    }


    getCategoryVideo = async(val) => {
        await axios({
            method:'post',
            url:'/api/streaming/streamcategories',
            data:{
                categories:val
            }
        }).then((res)=>{
            this.setState({
                categoriesData:[]
            })
            res.data.map(v => {
                if(!v.paid){
                    this.setState({
                        categoriesData: [...this.state.categoriesData, v]
                    }, ()=>{
                        console.log(this.state.categoriesData)
                    })
                }
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount = () => {
        this.getFreeContent()
        this.getVideoCategories()
        this.getCategoryVideo('Gaming')
    }

    render() {
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
                        <Image source={require('../../../assets/images/contentCover.png')} style={styles.coverPic} />
                        <View style={styles.userRow}>
                            <View style={styles.userRowBox1}>
                                <Avatar image={require('../../../assets/images/aboutPic.png')} size={'medium'} />
                                <View style={{marginLeft:14}}>
                                    <Text style={styles.userName}>John Smith</Text>
                                    <Text style={styles.userSubsCount}>80k Subscribers</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('editProfile') }}>
                                    <FeatherIcon name={'edit-3'} color={'#909092'} size={24} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* <View style={styles.box}>
                        <View style={styles.roundBtnsContainer}>
                            <TouchableOpacity>
                                <View style={[styles.roundBtns, {
                                    backgroundColor: "none", borderWidth: 1,
                                    borderColor: "#eebf00"
                                }]}>
                                    <Text style={[styles.roundBtnsTxt, { color: "#eebf00", fontSize: 30 }]}> + </Text>
                                </View>
                            </TouchableOpacity>
                                
                            <TouchableOpacity>
                                <View style={styles.roundBtns}>
                                    <Text style={styles.roundBtnsTxt}> Stream </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.roundBtns}>
                                    <Text style={styles.roundBtnsTxt}> Videos </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.roundBtns}>
                                    <Text style={styles.roundBtnsTxt}> Stream2 </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View> */}

                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {
                        this.state.uniqueCategories.map(s => (
                            <TouchableOpacity onPress={()=>this.getCategoryVideo(s)} style={{width: Dimensions.get('window').width/100*20,
                            height: Dimensions.get('window').width/100*20,
                            backgroundColor: "#eebf00",
                            borderRadius: Dimensions.get('window').width/100*10,alignItems:'center', display:'flex', justifyContent:'center', margin:8}}>
                                <Text style={{fontFamily:'Roboto-Medium'}}>{s}</Text>
                            </TouchableOpacity>
                        ))
                    }    
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.heading}>Uploads</Text>
                        <ContentVideoCard data={this.state.categoriesData} />
                        <TouchableOpacity>
                            <IonIcons size={28} color={"#8E8E93"} name={'ios-arrow-down'} style={{ alignSelf: "center" }} />
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.box}>
                        <Text style={styles.heading}>Recommended</Text>
                        <VideoLists data={this.state.recommended} />
                        <TouchableOpacity>
                            <IonIcons size={28} color={"#8E8E93"} name={'ios-arrow-down'} style={{ alignSelf: "center" }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.heading}>Topics</Text>
                        <CategoryContentList data={this.state.topics} />
                        <TouchableOpacity>
                            <IonIcons size={28} color={"#8E8E93"} name={'ios-arrow-down'} style={{ alignSelf: "center", marginBottom:20 }} />
                        </TouchableOpacity>
                    </View> */}

                </ScrollView>
                {/* <FloatingActionButton /> */}
            </View>
        )
    }
}


export default FreeContent