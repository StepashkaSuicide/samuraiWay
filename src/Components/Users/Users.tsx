import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/user1.jpg';
import {AllMapDisPropsType} from './UsersContainer';
import {NavLink} from 'react-router-dom';


export const Users = (props: AllMapDisPropsType) => {

    const unfollowHandler = (userID: string) => {
        props.follow(userID)
    }
    const followHandler = (userID: string) => {
        props.unfollow(userID)
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
                    return <span key={t} className={`${props.currentPage === t ? s.selectedPage : ''} ${stylePagination}`}
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
                        <NavLink to={'/profile/'+ t.id}>
                            <img className={s.ava} src={t.photos.small !== null ? t.photos.small : userPhoto} alt="photo"/>
                            </NavLink>

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
};
