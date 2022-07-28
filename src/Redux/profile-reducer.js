import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi123', likesCount: 12},
        {id: 2, message: 'first qwePost', likesCount: 5 },
        {id: 3, message: 'second qwePost', likesCount: 60 },
    ],
    newPostText: "123",
    profile: null,
}
const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 10,
                message: state.newPostText,
                likesCount: 3
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ' ' ,
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile ,
            };
        }
        default: {
            return state;
        }
    }
}


export const updateNewPostTextActionCreator = (message) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: message
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const getProfileUser = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileUser(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }

}



export default profileReducer;