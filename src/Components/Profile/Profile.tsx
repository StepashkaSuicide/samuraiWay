import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../Redux/profileReducer';



const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
            />
        </div>
    );
};

export default Profile;