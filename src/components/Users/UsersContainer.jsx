import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    unFollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

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
        // this.props.setCurrentPage(page)
        // this.props.toggleIsFetching(true)
        // getUsersPage(page, this.props.pageSize).then(response => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(response.data.items)
        //     this.props.setTotalUsersCount(response.data.totalCount)
        // })
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
                       unfollow={this.props.unFollow}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// кооллбеки
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers,
})(UsersContainer);