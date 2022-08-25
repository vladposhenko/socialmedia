import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";
import Button from "@mui/material/Button";


function MyPosts(props) {

    let postElements = props.posts.map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    let onSubmit = (value) => {
        props.addPost(value.addPostText)
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)
const Textarea = Element("Textarea");

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} className={classes.areaField} name="addPostText" placeholder="Enter new post"
                       validate={[required,maxLength10]}/>
                <Button type={"submit"} className=" btn-small scale-transition" className={classes.send}>Add Post</Button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'addPostForm'
})(AddPostForm)

export default MyPosts