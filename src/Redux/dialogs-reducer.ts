const SEND_MESSAGE = 'SEND_MESSAGE';


type MessageType = {
    id: number,
    message: string
}

type DialogType = {
    id: number,
    name: string
}

let initialState =  {
    messages: [
        {id: 1, message: 'H12312i'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Wass222up'},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vladosik'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Ksenia'},
        {id: 6, name: 'Egor'},
    ] as Array<DialogType>,
}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any):initialStateType => {
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

type sendMessageActionType = {
    type: typeof SEND_MESSAGE,
    newMessage:string
}

export const sendMessageCreator = (newMessage: string): sendMessageActionType => ({type: SEND_MESSAGE, newMessage})



export default dialogsReducer;
