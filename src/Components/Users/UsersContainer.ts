import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UserType} from '../../Redux/usersReducer';
import {AppStateType} from '../../Redux/reduxStore';
import {Dispatch} from 'redux';


export type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
export type mapDispatchPropsType = {
    follow: (userID: string)=> void
    unfollow: (userID: string)=> void
    setUsers: (users: Array<UserType>)=>void
    setCurrentPage:(pageNumber: number)=>void
    setTotalUsersCount: (totalCount: number)=> void
}
export type AllMapDisPropsType = mapStateToPropsType & mapDispatchPropsType

export const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
export const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number)=> {
        dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number)=> {
        dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(Users);