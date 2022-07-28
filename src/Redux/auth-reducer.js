import {usersAPI} from "../api/api";
// import {toggleFollowingProgress, unfollowSuccess} from "./users-reducer";

const SET_USERS_DATA = 'SET_USERS_DATA'
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
                isAuth: true,
            }
        }
        default:
            return state
    }
}

export const setAuthUsersData = (userId, email, login) => ({type:SET_USERS_DATA,data: {userId, email, login}})

export const getAuth = () => {
    return (dispatch) => {
        usersAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data
                dispatch(setAuthUsersData(id, email, login))
            }
        })
    }
}



export default authReducer;