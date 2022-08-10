import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE POST';

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

// REDUX THUNKS
export const getProfileUser = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileUser(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }

}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}


export default profileReducer;