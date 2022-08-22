import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../Redux/profileReducer';



const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo status={props.status} updateStatus={props.updateStatus}  profile={props.profile}/>
            <MyPostsContainer
            />
        </div>
    );
};

export default Profile;