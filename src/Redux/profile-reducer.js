const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi123', likesCount: 12},
        {id: 2, message: 'first qwePost', likesCount: 5 },
        {id: 3, message: 'second qwePost', likesCount: 60 },
    ],
    newPostText: "123"
}
const profileReducer = (state = initialState,action) => {
    debugger;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 10,
                message: state.newPostText,
                likesCount: 3
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
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


export default profileReducer;