import classes from './Post.module.css'

const Post = (props) => {
    return ( 
            <div className={classes.item}>
              <p>{props.message}</p>
              <p>{props.likesCount}</p>
            </div>
    )
}

export default Post