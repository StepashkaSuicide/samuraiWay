import React from 'react';
import {AllMapDisPropsType} from './UsersContainer';
import s from './users.module.css'
import axios from 'axios';
import userPhoto from './../../assets/user1.jpg'


export class Users extends React.Component<AllMapDisPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }




    onPageChanged = (pageNumber: number)=> {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
}

    render(): React.ReactNode {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 12) {
                pages.push(i)
            }
        }

        const unfollowHandler = (userID: string) => {
            this.props.follow(userID)
        }
        const followHandler = (userID: string) => {
            this.props.unfollow(userID)
        }
        return (
            <div>
                <div>
                    {pages.map(t => {
                       return <span key={t} className={this.props.currentPage === t ? s.selectedPage:''}
                                    onClick={(e)=>{this.onPageChanged(t)}}>
                            {t}</span>
                    })}
                </div>
                {this.props.users.map(t =>
                    <div key={t.id}>
                <span>
                    <div>
                    <img className={s.ava} src={t.photos.small !== null ? t.photos.small : userPhoto} alt="photo"/>
                    </div>
                    <div>
                        {
                            t.followed
                                ? <button onClick={() => unfollowHandler(t.id)}>Unfollow</button>
                                : <button onClick={() => followHandler(t.id)}>Follow</button>}
                    </div>
                </span>
                        <span>
                     <span>
                        <div>{t.name}</div>
                         <div>{t.status}</div>
                    </span>
                    <span>
                        <div>{'country'}</div>
                        <div>{'city'}</div>
                    </span>
                </span>
                    </div>)}
            </div>
        );
    }
}







