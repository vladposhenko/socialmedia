import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


// данные из state
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);