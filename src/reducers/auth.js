import {REGISTER_SUCCESS,REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, DELETE_ACCOUNT, SEND_VERIFICATION_EMAIL, EDIT_PROFILE} from '../actions/types'
import {storeUserData} from '../storage/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const initalState={
    // token:AsyncStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    userVerified:false,
    emailVerification:false,
    user: null,
}

export default function(state = initalState, action){
    const {type, payload} = action
    switch(type){
        case USER_LOADED:
            return {
                ...state,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user:payload,
                isAuthenticated:true,
                loading:false,
            }
        case LOGIN_SUCCESS:
            console.log('LOGIN SUCCESS', payload.user)
            storeUserData('@userData', payload.user)
            // AsyncStorage.setItem('token', payload.token)
            return {
                ...state,
                user:payload,
                userVerified:true,
                isAuthenticated:true,
                loading:false,
            }
        case SEND_VERIFICATION_EMAIL:
            return {
                ...state,
                emailVerification:true
            }
        case LOGOUT:
            AsyncStorage.clear()
            return {
                ...state,
                user:null,
                token:null,
                userVerified:false,
                isAuthenticated:false,
                loading:false
            }
        case REGISTER_FAIL:
        // case AUTH_ERROR:
        // case LOGIN_FAIL:
        // case LOGOUT:
        // case DELETE_ACCOUNT:
        AsyncStorage.removeItem('@userData')
            return {
                ...state,
                token:null,
                user:null,
                userVerified:false,
                isAuthenticated:false,
                loading:false
            }
        case EDIT_PROFILE:
            storeUserData('@userData', payload)
            return{
                ...state,
                user:payload,
                loading:false
            }
        default:
            return state

        }
        


}