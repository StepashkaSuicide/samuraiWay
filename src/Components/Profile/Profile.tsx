import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import {ActionsTypes, ProfilePageType, StoreType} from '../../Redux/reduxStore';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    store: StoreType
    // changeNewPostTextCallBack: (newText: string) => void
    // profilePage: ProfilePageType
    // addPostCallBack: (postText: string) => void
    // dispatch: (action: ActionsTypes )=> void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                // dispatch={props.store.dispatch}
                // messageForNewText={props.profilePage.messageForNewText}
                // changeNewPostTextCallBack={props.changeNewPostTextCallBack}
                // addPostCallBack={props.addPostCallBack}
                // posts={props.profilePage.posts }
            />
        </div>
    );
};

export default Profile;