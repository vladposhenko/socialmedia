import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/> )
    return (
        <div className={classes.postsBlock}>
          <h3>My Posts</h3>
            <div>
                <textarea name="" id="" ></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
          <div className={classes.posts}>
              {postElements}
          </div>
        </div>
    )
}

export default MyPosts