import React, {ChangeEvent} from 'react';
import {StoreType} from '../../../Redux/reduxStore';
import {addPostAC, changeNewTextAC} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';


type MessagesType = {
    store: StoreType
}

const MyPostsContainer = (props: MessagesType) => {

    const state = props.store.getState().profilePage
    let addPost = () => {
        props.store.dispatch(addPostAC(state.messageForNewText))
    }

    let onPostChange = (newText: string) => {
        props.store.dispatch(changeNewTextAC(newText))
        // props.changeNewPostTextCallBack(e.currentTarget.value)
    }
    return (
        <MyPosts
            addPost={addPost}
            onPostChange={onPostChange}
            posts={state.posts}
            changeNewPostTextCallBack={props.store.changeNewPostText}
            messageForNewText={state.messageForNewText}
            // addPostCallBack={props.addPostCallBack}
            // dispatch={props.store.dispatch}
        />

    );
};

export default MyPostsContainer;