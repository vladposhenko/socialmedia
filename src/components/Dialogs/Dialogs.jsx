import React from 'react';
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";




const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogElements = state.dialogs
        .map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/> )

    let messagesElements = state.messages
        .map((message) => <Message message={message.message} key={message.id} id={message.id}/>)

    let newMessageBody = state.newMessage;

    let addMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageBody(message)
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
            <div className={classes.actionArea}>
                    <textarea  className={classes.dialogsTextarea}
                              onChange={onNewMessageChange}
                              placeholder={'Enter the message'}
                              value={newMessageBody}
                    ></textarea>
                <button onClick={addMessage} className={classes.sendBtn}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;