import React from 'react';
import {AllMapDisPropsType} from './UsersContainer';
import s from './users.module.css'
import {v1} from 'uuid';

export const Users = (props: AllMapDisPropsType) => {

    const photoURL= 'https://cdn-icons-png.flaticon.com/512/21/21104.png'
    if (props.users.length===0){
        props.setUsers([{
            id: v1(),
            photoURL: photoURL,
            followed: false,
            fullName: 'JEKA',
            status: 'boss',
            location: {city: 'Oryol', country: 'Russia'}
        },
            {
                id: v1(),
                followed: true,
                photoURL: photoURL,
                fullName: 'LEXA',
                status: 'litle boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                followed: false,
                photoURL: photoURL,
                fullName: 'MAX',
                status: ' ne boss',
                location: {city: 'SP', country: 'Russia'}
            },
            {
                id: v1(),
                followed: true,
                photoURL: photoURL,
                fullName: 'DIMYCH',
                status: 'hard boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },])
    }

    const unfollowHandler = (userID: string) => {
        props.follow(userID)
    }
    const followHandler = (userID: string) => {
        props.unfollow(userID)
    }

    return (
        <div>
            {props.users.map(t =>
                <div key={t.id}>
                <span>
                    <div>
                    <img className={s.ava} src={t.photoURL} alt="photo"/>
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
                        <div>{t.fullName}</div>
                         <div>{t.status}</div>
                    </span>
                    <span>
                        <div>{t.location.country}</div>
                        <div>{t.location.city}</div>
                    </span>
                </span>
                </div>)}
        </div>
    );
};
