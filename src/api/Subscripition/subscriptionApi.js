import axios from 'axios'

export const getSubscription = async(userId) => {
    const response = await axios({
        method:'get',
        url:`/api/subscription/${userId}`
    }).then(res => {
        return res.data
    })
    return response
}

export const addSubscription = async(subscriptionId, userId) => {
    const response = await axios({
        method:'post',
        url:'/api/subscription/create',
        data:{
            userId:subscriptionId,
            subscriptionId:userId
        }
    }).then(res => {
        return res.data
    })
    return response
}

export const removeSubscription = async(subscriptionId, userId) => {
    const response = await axios({
        method:'post',
        url:'/api/subscription/remove',
        data:{
            userId:subscriptionId,
            subscriptionId:userId
        }
    }).then(res => {
        return res.data
    })
    return response
}
