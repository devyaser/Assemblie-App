import axios from 'axios'
import {REGISTER_SUCCESS, REGISTER_FAIL, SEND_VERIFICATION_EMAIL, USER_VERIFIED, USER_NOT_VERIFIED, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_LOADED, EDIT_PROFILE} from './types'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const loadUser = () => async dispatch => {
    try{
        var userData =  await AsyncStorage.getItem('@userData')
        var jsonData = JSON.parse(userData)
        dispatch({
            type:USER_LOADED,
            payload:jsonData
        })
        
    }catch(err){
        console.log(err)
    }
}


export const register = (body) => async dispatch => {
    try{
        const res = await axios({
            method:'POST',
            url:'/api/users/register',
            data:body
        }).then(res => {
            if(res.data.success){
                dispatch({
                    type:REGISTER_SUCCESS,
                    payload:res.data
                })
                dispatch({
                    type:SEND_VERIFICATION_EMAIL
                })
            }
        })
    }catch(err){
        console.log(err)
        dispatch({
            type:REGISTER_FAIL
        })
    }
}


export const verifyUser = (body) => async dispatch => {
    await axios({
        method:'POST',
        url:'/api/users/verification',
        data:body
    }).then(res=>{
        dispatch({
            type:USER_VERIFIED
        })
    }).catch(err=>{
        dispatch({
            type:USER_NOT_VERIFIED
        })
    })
}

export const login = (body) => async dispatch => {
    try{
        await axios({
            method:'POST',
            url:'/api/users/login',
            data:body
        }).then(res=>{
            if(res.data.verified){
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:res.data
                })
            }else{
                dispatch({
                    type:USER_NOT_VERIFIED
                })
            }
        })    
    }catch(err){
        dispatch({
            type:LOGIN_FAIL
        })
    }
}

export const logout = () => async dispatch => {
    dispatch({
        type:LOGOUT
    })
}

export const editProfile = (body) => async dispatch => {
    try{
        const res = await axios({
            method:'POST',
            url:'/api/users/updateUser',
            data:body
        }).then((res)=>{
            console.log('EDIT PROFILE',res)
            dispatch({
                type:EDIT_PROFILE,
                payload:res.data
            })
        }).catch(err=>{
            console.log(err)
        })
    }catch(err){
        console.log(err)
    }
}

export const uploadImage = (body) => async dispatch => {
    await axios({
        method:'POST',
        url:'/api/users/uploadImage',
        data:body
    }).then((res)=>{
        console.log('IMAGE UPDATED',res)
        dispatch({
            type:EDIT_PROFILE,
            payload:res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}
