import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer.ts";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText,
    }

}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer