import {
    follow,
    toggleFollowingInProgress,
    onPageChanged,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserType,
    getUsersThunkCreator
} from '../../Redux/usersReducer';
import {AppStateType} from '../../Redux/reduxStore';
import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {Preloader} from '../../Common/preloader/Preloader';
import {usersAPI} from '../../api/api';

type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number)=> void

}
export type AllMapDisPropsType = mapStateToPropsType & mapDispatchPropsType

export class UsersContainer extends React.Component<AllMapDisPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

    }

    render()/*: React.ReactNode*/ {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                getUsersThunkCreator={this.props.getUsersThunkCreator}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
                   toggleIsFetching={this.props.toggleIsFetching}
                   isFetching={this.props.isFetching}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   pageSize={this.props.pageSize}
                   setCurrentPage={this.props.setCurrentPage}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   setUsers={this.props.setUsers}
                   totalUsersCount={this.props.totalUsersCount}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
            />
        </>
    }
}

export const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,



    }
}

export default connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        onPageChanged,
        toggleIsFetching,
        toggleFollowingInProgress,
        getUsersThunkCreator,
    }
)(UsersContainer);