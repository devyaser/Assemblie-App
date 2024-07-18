import axios from 'axios'

export const getSubscribers = () => {
    console.log('Get Assembler')
}

export const subscribeAssembler = async(userId,subId) => {
    const response = await axios({
        method:'post',
        url:'/api/subscribers/create',
        data:{
            userId:userId,
            subscriberId:subId
        }
    }).then(res => {
        return res.data
    })
    return response
}

export const unSubscribeAssembler = async(userId, subId) => {
    const response = await axios({
        method:'post',
        url:'/api/subscribers/unsubscribe',
        data:{
            userId:userId,
            subscriberId:subId
        }
    }).then(res => {
        return res.data
    })
    return response
}
