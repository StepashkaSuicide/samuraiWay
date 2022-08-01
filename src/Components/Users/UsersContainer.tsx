import {connect} from 'react-redux';
import {
    followAC,
    onPageChangedAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../Redux/usersReducer';
import {AppStateType} from '../../Redux/reduxStore';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';


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
    onPageChanged:(pageNumber: number)=>void
}
export type AllMapDisPropsType = mapStateToPropsType & mapDispatchPropsType

export class UsersContainer1 extends React.Component<AllMapDisPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    render(): React.ReactNode {
        return <Users

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
    }
}

export const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

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
        onPageChanged: (pageNumber: number)=>{
            dispatch(onPageChangedAC(pageNumber))
        }
    }
}

export const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(UsersContainer1);