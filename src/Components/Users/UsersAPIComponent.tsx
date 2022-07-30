import React from 'react';
import {AllMapDisPropsType} from './UsersContainer';
import axios from 'axios';
import {Users} from './Users';

export class UsersAPIComponent extends React.Component<AllMapDisPropsType> {

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
            users={this.props.users}/>
    }
}







