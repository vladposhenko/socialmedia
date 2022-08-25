import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer.ts";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message: 'Hi123', likesCount: 12},
                {id: 2, message: 'first qwePost', likesCount: 5 },
                {id: 3, message: 'second qwePost', likesCount: 60 },
            ],
            newPostText: "123"
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'H12312i'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Wass222up'},
            ],
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Vladosik'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Ksenia'},
                {id: 6, name: 'Egor'},
            ],
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state reload')
    },
    getState () {
        return this._state
    },

    subscribe  (observer)  {
        this._callSubscriber = observer
    },
    addPost ()  {
        let newPost = {
            id:10,
            message: this._state.profilePage.newPostText,
            likesCount:3
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText  (newText)  {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }

}




export  default  store

window.store = store