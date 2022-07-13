import classes from './Post.module.css'

const Post = (props) => {
    return ( 
            <div className={classes.item}>
                <img className={classes.itemImg} src="https://www.researchgate.net/profile/Hanhe-Lin/publication/344400221/figure/fig1/AS:940579932348417@1601263139233/SAN-and-Tarsier-on-the-baboon-image-from-Set-14-The-image-generated-by-SAN-is-visibly.ppm" alt=""/>
                <div>
                    <p>{props.message}</p>
                    <p className={classes.likes}>{props.likesCount}</p>
                </div>
            </div>
    )
}

export default Post