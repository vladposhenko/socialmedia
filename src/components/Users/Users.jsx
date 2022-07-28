import React from "react";
import classes from './users.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={classes.usersContainer}>
            {
                props.users.map(user => <div className={classes.user} key={user.id}>
                    <span>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 className={classes.userPhoto} width={80}/>
                        </NavLink>
                        <div>
                            {user.followed
                                ? <button className={classes.btnDisabled}
                                          disabled={props.followingInProgress.some( id => id === user.id )}
                                          onClick={() => {
                                    props.toggleFollowingProgress(true, user.id)
                                    usersAPI.deleteFollowing(user.id).then(response => {
                                        if(response.data.resultCode == 0){
                                            props.unfollow(user.id);
                                        }
                                        props.toggleFollowingProgress(false, user.id)
                                    })
                                }}>UnFollow</button>
                                : <button disabled={props.followingInProgress.some( id => id === user.id )} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id)
                                    usersAPI.postFollowing(user.id).then(response => {
                                        if(response.data.resultCode == 0){
                                            props.follow(user.id);
                                        }
                                        props.toggleFollowingProgress(false, user.id)
                                    })
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
            </div>
            <ul className={classes.pageContainer}>
                {pages.map(page => {
                    return <li className={props.currentPage === page ? classes.selectedPage : classes.page}
                                 onClick={(e) => {
                                     props.onPageChanged(page)
                                 }}><a className={classes.pageLink} href="#">{page}</a></li>
                })}
            </ul>
        </div>
    )
}




export default Users;