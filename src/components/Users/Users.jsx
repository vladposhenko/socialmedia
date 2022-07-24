import React from "react";
import classes from './users.module.css'
import userPhoto from './../../assets/images/user.png'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 className={classes.userPhoto} width={80}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>

                </div>)
            }
            <div className={classes.pageContainer}>
                {pages.map(page => {
                    return <span className={props.currentPage === page ? classes.selectedPage : classes.page}
                                 onClick={(e) => {
                                     props.onPageChanged(page)
                                 }}>{page}</span>
                })}
            </div>
        </div>
    )
}




export default Users;