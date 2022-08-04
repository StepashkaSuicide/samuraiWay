import React from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from '../../../Common/preloader/Preloader';
import {ProfilePageType, ProfileType} from '../../../Redux/profileReducer';



const ProfileInfo = (props: ProfileType) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.img}>
                <img src="https://cdn.motor1.com/images/mgl/KPk7M/s1/2022-porsche-911-gt3-touring-exterior.jpg"
                     alt="main"/>
            </div>
            <div className={s.description}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;