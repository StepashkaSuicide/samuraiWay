import {
    follow,
    onPageChanged,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserType
} from '../../Redux/usersReducer';
import {AppStateType} from '../../Redux/reduxStore';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {connect} from 'react-redux';
import {Preloader} from '../../Common/preloader/Preloader';

 type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

 type mapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type AllMapDisPropsType = mapStateToPropsType & mapDispatchPropsType

export class UsersContainer extends React.Component<AllMapDisPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)

        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    render(): React.ReactNode {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
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

    }
}

export default connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        onPageChanged,
        toggleIsFetching
}
   )(UsersContainer);