import React, {ChangeEvent} from 'react';
import {StoreType} from '../../../Redux/reduxStore';
import {addPostAC, changeNewTextAC} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';


type MessagesType = {
    store: StoreType
}

const MyPostsContainer = (props: MessagesType) => {

    const state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.messageForNewText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(changeNewTextAC(e.currentTarget.value))
        // props.changeNewPostTextCallBack(e.currentTarget.value)
    }
    return (
        <MyPosts
            addPost={addPost}
            onPostChange={onPostChange}
            posts={state.profilePage.posts}
            changeNewPostTextCallBack={props.store.changeNewPostText}
            messageForNewText={state.profilePage.messageForNewText}
            // addPostCallBack={props.addPostCallBack}
            // dispatch={props.store.dispatch}
        />

    );
};

export default MyPostsContainer;