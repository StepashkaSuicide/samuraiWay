import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://cdn.motor1.com/images/mgl/KPk7M/s1/2022-porsche-911-gt3-touring-exterior.jpg"
                     alt="main"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;