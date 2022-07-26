const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState =  {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 10, message: body} ],
            }
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage,
            }
        default:
            return state;
    }

    return state;
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageBodyCreator = (message) => {

    return {
        type: UPDATE_MESSAGE,
        newMessage: message,
    }
}


export default dialogsReducer;
