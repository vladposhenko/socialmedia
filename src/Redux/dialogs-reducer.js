const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState =  {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessage;
            return {
                ...state,
                messages: [...state.messages, {id: Math.random(), message: body} ],
            }

        default:
            return state;
    }

    return state;
}

export const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage})



export default dialogsReducer;
