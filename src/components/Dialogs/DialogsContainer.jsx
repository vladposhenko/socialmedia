import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// данные из state
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
// кооллбеки
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (message) => {
            dispatch(updateNewMessageBodyCreator(message))
        },
        sendMessage: (message) => {
            dispatch(sendMessageCreator())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;