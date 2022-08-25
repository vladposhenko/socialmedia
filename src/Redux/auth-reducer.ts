import {authApi, securityApi, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'social-network/auth/SET_USERS_DATA'
const SET_USER = 'SET_USER'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

// type initialStateType = {
//     userId: number | null
//     email: string | null
//     login:string | null
//     isAuth: boolean
//     captchaUrl: string | null
// }


let initialState = {
    userId: null as  number | null ,
    email: null as string | null,
    login:null as string | null,
    isAuth: false,
    captchaUrl:null as string | null
}

export type initialStateType = typeof initialState

const authReducer = (state = initialState,action: any):initialStateType  => {
    switch (action.type) {
        case SET_USERS_DATA:{
            return {
                ...state,
                ...action.data,
            }
        }
        case SET_USER: {
            return {
                ...state,
                ...action.data
            }
        }

        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

type setAuthUsersDataActionType = {
    type: typeof SET_USERS_DATA
    data: {
        userId: number,
        email: string,
        login: string,
        isAuth: boolean
    }
}


type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload:{
        captchaUrl: string
    }
}

export const setAuthUsersData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUsersDataActionType => ({type:SET_USERS_DATA,data: {userId, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getAuth = () => async (dispatch: any) => {
    let response = await usersAPI.getAuth();
    if (response.data.resultCode === 0) {
        let {id,login,email} = response.data.data
        dispatch(setAuthUsersData(id, email, login, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
        let response = await authApi.login(email, password, rememberMe, captcha);
        if(response.data.resultCode === 0) {
            dispatch(getAuth())
        } else {
            if(response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages : "Some error"
            dispatch(stopSubmit("login" , {_error: message}))
        }
}


export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityApi.getCaptcha()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
        let response = await authApi.logout()
            if(response.data.resultCode === 0) {
                dispatch(setAuthUsersData(null, null, null, false))
            }
}


export default authReducer;