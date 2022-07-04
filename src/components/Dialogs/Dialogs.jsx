import React from 'react';
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";




const Dialogs = (props) => {

    let dialogElements = props.state.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/> )

    let messagesElements = props.state.messages
        .map((message) => <Message message={message.message} id={message.id}/>)

    let newMessage = React.createRef()
    let addMessage = () => {
        let message = newMessage.current.value;
        alert(message)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.actionArea}>
                    <textarea ref={newMessage} className={classes.dialogsTextarea} placeholder={'Enter the message'}></textarea>
                    <button onClick={addMessage} className={classes.sendBtn}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;