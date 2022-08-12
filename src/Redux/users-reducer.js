import {usersAPI} from "../api/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 21,
    currentPage:1,
    isFetching: false,
    followingInProgress: [],
}
const usersReducer = (state = initialState,action) => {
    switch (action.type) {
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS:{
            return {
                ...state,
                users: action.users
            }
        }

        case SET_CURRENT_PAGE:{
            return { ...state, currentPage: action.currentPage}
        }

        case SET_USERS_TOTAL_COUNT:{
            return { ...state, totalUsersCount: action.totalCount}
        }

        case TOGGLE_IS_FETCHING:{
                return { ...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {
                ...state,
                followingInProgress:  action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id =>  id != action.userId)
            }
        }

        default:
            return state
    }
}


export const followSuccess = (userId) => ({type:FOLLOW, userId:userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (currentPage, pageSize ) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setCurrentPage(currentPage))
        dispatch(setTotalUsersCount(response.data.totalCount))
    }
}


const followUnfollowFlow = async (dispatch, userId,apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if(response.data.resultCode == 0){
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.postFollowing.bind(usersAPI)
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod,actionCreator)
    }

}


export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.deleteFollowing.bind(usersAPI)
        let actionCreator = unfollowSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod,actionCreator)
    }
}


export default usersReducer;