import {
    follow,
    unfollow,
    toggleFollowingInProgress,
    getUsers,
    onPageChanged,
    setCurrentPage,
    UserType
} from '../../Redux/usersReducer';
import {AppStateType} from '../../Redux/reduxStore';
import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {Preloader} from '../../Common/preloader/Preloader';

type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type mapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userID: number)=>void
    follow: (userID: number)=>void

    // toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    onPageChanged: (pageNumber: number) => void


}
export type AllMapDisPropsType = mapStateToPropsType & mapDispatchPropsType

export class UsersContainer extends React.Component<AllMapDisPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render()/*: React.ReactNode*/ {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                getUsers={this.props.getUsers}
                // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
                isFetching={this.props.isFetching}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                setCurrentPage={this.props.setCurrentPage}
                totalUsersCount={this.props.totalUsersCount}
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
        setCurrentPage,
        onPageChanged,
        getUsers,
    }
)(UsersContainer);