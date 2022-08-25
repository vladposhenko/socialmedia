import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';
const SAVE_PROFILE = 'SAVE_PROFILE';


// type profileInitialState = {
//     posts: Array<object>
//     profile: null
//     status: string
// }



let initialState = {
    posts: [
        {id: 1, message: 'Hi123', likesCount: 12},
        {id: 2, message: 'first qwePost', likesCount: 5 },
        {id: 3, message: 'second qwePost', likesCount: 60 },
    ],
    profile: null,
    status: '',
}


const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 10,
                message: action.postText,
                likesCount: 3
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(el =>  el.id != action.postId )};
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile ,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos:action.photos}
            }
        }

        default: {
            return state;
        }
    }
}

// ACTION CREATORS

export const addPostActionCreator = (postText) => ({type: ADD_POST,postText})
export const deletePost = (postId) => ({type: DELETE_POST,postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})
export const saveProfileSuccess = (profile) => ({type: SAVE_PHOTO, profile})

// REDUX THUNKS
export const getProfileUser = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfileUser(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}


export const saveProfile = (profile) => async (dispatch, getState) => {
    const response = await profileAPI.saveProfile(profile)
    const userId = getState().auth.userId
    if(response.data.resultCode === 0) {
        console.log(response)
        dispatch(getProfileUser(userId))
    } else {
        dispatch(stopSubmit("profileData" , {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer;