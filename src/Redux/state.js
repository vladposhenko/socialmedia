import {rerenderEntireTree} from "../render";

let state = {
    profilePage:{
        posts: [
            {id: 1, message: 'Hi123', likesCount: 12},
            {id: 2, message: 'first qwePost', likesCount: 5 },
            {id: 3, message: 'second qwePost', likesCount: 60 },
        ],
        newPostText: ""
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'H12312i'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Wass222up'},
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Vladosik'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Ksenia'},
            {id: 6, name: 'Egor'},
        ],
    }
}

window.state = state

export let addPost = () => {
    let newPost = {
        id:10,
        message: state.profilePage.newPostText,
        likesCount:3
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export  default  state