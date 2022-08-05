import React from "react";
import classes from './users.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import {Pagination} from "@mui/material";


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
                                ? <Button size="small" variant="contained" className={classes.btnDisabled}
                                          disabled={props.followingInProgress.some( id => id === user.id )}
                                          onClick={() => {props.unfollow(user.id)}}>UnFollow</Button>
                                : <Button size="small" variant="contained" disabled={props.followingInProgress.some( id => id === user.id )}
                                          onClick={() => {props.follow(user.id)}}>Follow</Button>
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
                    return <li count={1} className={props.currentPage === page ? classes.selectedPage : classes.page}
                                 onClick={(e) => {
                                     props.onPageChanged(page)
                                 }}><a className={classes.pageLink} href="#">{page}</a></li>
                })}
            </ul>
        </div>
    )
}




export default Users;