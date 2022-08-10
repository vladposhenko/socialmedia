import React from "react";
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    unfollow,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true)
        // getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(response.data.items)
        // })
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }



    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       users={this.props.users}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}


// данные из state
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers: requestUsers,
})(UsersContainer);

// export default compose(
//     withAuthRedirect,
//     connect(mapStateToProps, {
//         follow,
//         unfollow,
//         setCurrentPage,
//         setTotalUsersCount,
//         toggleFollowingProgress,
//         getUsers,
//     })
// )(UsersContainer)
