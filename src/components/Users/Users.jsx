import React from "react";
import classes from './users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount,pageSize,  onPageChanged, ...props}) => {
    return (
        <div>
            <div className={classes.usersContainer}>
            {
                props.users.map(user => <User user={user}
                                              followingInProgress={props.followingInProgress}
                                              follow={props.follow}
                                              unfollow={props.unfollow}
                                              key={user.id}/>)
            }
            </div>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       onPageChanged={onPageChanged}
                       currentPage={currentPage}
            />
        </div>
    )
}




export default Users;