import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../../Common/preloader/Preloader';
import userPhoto from './../../../assets/userphoto.png'
import {ProfileStatus} from './ProfileStatus';


const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.img}>
                <img src="https://cdn.motor1.com/images/mgl/KPk7M/s1/2022-porsche-911-gt3-touring-exterior.jpg"
                     alt="main"/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large === null
                    ? userPhoto
                    : props.profile.photos.large} alt="largePhotos"/>
                <div>{props.profile.fullName}</div>
                <ProfileStatus profile={props.profile} updateStatus={props.updateStatus}  status={props.status} />
            </div>
        </div>
    );
};

export default ProfileInfo;