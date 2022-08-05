import {authApi, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
// import {toggleFollowingProgress, unfollowSuccess} from "./users-reducer";

const SET_USERS_DATA = 'SET_USERS_DATA'
const SET_USER = 'SET_USER'

let initialState = {
    userId: null,
    email: null,
    login:null,
    isAuth: false,
}
const authReducer = (state = initialState,action) => {
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
        default:
            return state
    }
}

export const setAuthUsersData = (userId, email, login, isAuth) => ({type:SET_USERS_DATA,data: {userId, email, login, isAuth}})
// export const setUserData = (email,password,rememberMe) => ({type: SET_USER, data: {email,password,rememberMe} })

export const getAuth = () => {
    return (dispatch) => {
        return usersAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data
                dispatch(setAuthUsersData(id, email, login, true))
            }
        })
    }
}
export const login = (email, password, rememberMe) => (dispatch) => {
        authApi.login(email, password, rememberMe).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages : "Some error"
                dispatch(stopSubmit("login" , {_error: message}))
            }
        })
}


export const logout = () => {
    return (dispatch) => {
        authApi.logout().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUsersData(null, null, null, false))
            }
        })
    }
}


export default authReducer;