import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/user1.jpg';
import {AllMapDisPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


export const Users = (props: AllMapDisPropsType) => {

    const unfollowHandler = (userID: number) => {
        props.toggleFollowingInProgress(true, userID)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`,
            {
                withCredentials: true,
                headers: {
                    'api-key': '938d5b70-0da7-4cf1-845c-1367ca037db0'
                }

            }
        )
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unfollow(userID)
                }
                props.toggleFollowingInProgress(false, userID)
            })
    }
    const followHandler = (userID: number) => {
        props.toggleFollowingInProgress(true, userID)
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {},
            {
                withCredentials: true,
                headers: {
                    'api-key': '938d5b70-0da7-4cf1-845c-1367ca037db0'
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(userID)
                }
                props.toggleFollowingInProgress(false, userID)
            })
    }
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 12) {
            pages.push(i)
        }
    }

    const stylePagination = s.stylePagination
    return (
        <div className={s.usersMainBlock}>
            <div className={s.number}>
                {pages.map(t => {
                    return <span key={t}
                                 className={`${props.currentPage === t ? s.selectedPage : ''} ${stylePagination}`}
                                 onClick={(e) => {
                                     props.onPageChanged(t)
                                 }}>
                            {t}</span>
                })}
            </div>
            {props.users.map(t =>
                <div key={t.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + t.id}>
                            <img className={s.ava} src={t.photos.small !== null ? t.photos.small : userPhoto}
                                 alt="photo"/>
                            </NavLink>

                    </div>
                    <div>
                        {
                            t.followed
                                ? <button disabled={props.followingInProgress.some(id=>id ===t.id)} onClick={() => unfollowHandler(t.id)}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=>id ===t.id)} onClick={() => followHandler(t.id)}>Follow</button>}
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
};
