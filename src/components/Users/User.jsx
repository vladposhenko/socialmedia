import React from "react";
import classes from './users.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Paginator from "../common/Paginator/Paginator";


let Users = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={classes.user} key={user.id}>
                    <span>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 className={classes.userPhoto} width={80}/>
                        </NavLink>
                        <div>
                            {user.followed
                                ? <Button size="small" variant="contained" className={classes.btnDisabled}
                                          disabled={followingInProgress.some( id => id === user.id )}
                                          onClick={() => {unfollow(user.id)}}>UnFollow</Button>
                                : <Button size="small" variant="contained" disabled={followingInProgress.some( id => id === user.id )}
                                          onClick={() => {follow(user.id)}}>Follow</Button>
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
                </div>
    )
}




export default Users;