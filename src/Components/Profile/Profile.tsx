import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ActionsTypes, ProfilePageType} from '../../Redux/state';

type ProfilePropsType = {
    changeNewPostTextCallBack: (newText: string) => void
    profilePage: ProfilePageType
    addPostCallBack: (postText: string) => void
    dispatch: (action: ActionsTypes )=> void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                messageForNewText={props.profilePage.messageForNewText}
                changeNewPostTextCallBack={props.changeNewPostTextCallBack}
                addPostCallBack={props.addPostCallBack}
                posts={props.profilePage.posts }
            />
        </div>
    );
};

export default Profile;