import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
// test data
let initialState = {
    posts: [
        {id: 1, message: 'Hi123', likesCount: 12},
        {id: 2, message: 'first qwePost', likesCount: 5 },
        {id: 3, message: 'second qwePost', likesCount: 60 },
    ],
}

it('posts length should be incremented', () => {
    // action
    let action = addPostActionCreator('hello world')
    let newState = profileReducer(initialState,action);
    // expectation
    expect(newState.posts.length).toBe(4)
})


it('new text adding', () => {
    // action
    let action = addPostActionCreator('hello world')
    let newState = profileReducer(initialState,action);
    // expectation
    expect(newState.posts[3].message).toBe('hello world')
})

it('delete post', () => {
    // action
    let action = deletePost(1)
    let newState = profileReducer(initialState,action);
    // expectation
    expect(newState.posts.length).toBe(2)
})