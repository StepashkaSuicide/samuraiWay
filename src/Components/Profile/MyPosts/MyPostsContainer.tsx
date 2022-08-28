import React from 'react';
import {addPostAC, PostType} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/reduxStore';

export type mapStatePropsType = {
    posts: Array<PostType>
    // Textarea: string
}
export type mapDispatchPropsType = {
    addPost: (messageForNewText: string)=>void
    // onPostChange:(newText: string)=> void
}

export type MyPostContainerType = mapStatePropsType & mapDispatchPropsType
const mapStateToProps = (state: AppStateType):mapStatePropsType  => {
    return {
        posts: state.profilePage.posts,
        // Textarea: state.profilePage.Textarea
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: (messageForNewText: string) => {
            dispatch(addPostAC(messageForNewText))
        },
        // onPostChange: (newText: string) => {
        //     dispatch(changeNewTextAC(newText))
        // }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)