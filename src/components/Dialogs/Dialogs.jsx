import React from 'react';
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";
import {Field, reduxForm} from "redux-form";




const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogElements = state.dialogs
        .map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/> )

    let messagesElements = state.messages
        .map((message) => <Message message={message.message} key={message.id} id={message.id}/>)


    let onSubmit = (value) => {
        props.sendMessage(value.newMessageBody)
    }

    if (!props.isAuth) return <Navigate to="/login"/>
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div></div>
            <AddMessageFormRedux onSubmit={onSubmit} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.actionArea}>
                    <Field component='textarea' name="newMessageBody" placeholder={'Enter the message'}/>
            <button className={classes.sendBtn}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
export default Dialogs;