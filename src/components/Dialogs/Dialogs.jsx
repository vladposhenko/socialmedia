import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";




const Dialogs = (props) => {

    let dialogElements = props.state.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/> )

    let messagesElements = props.state.messages
        .map((message) => <Message message={message.message} id={message.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;