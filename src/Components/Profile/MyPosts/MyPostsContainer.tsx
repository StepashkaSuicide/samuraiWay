import React from 'react';
import {addPostAC, changeNewTextAC, PostType} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/reduxStore';


export type mapStatePropsType = {
    posts: Array<PostType>
    messageForNewText: string
}
export type mapDispatchPropsType = {
    addPost: ()=>void
    onPostChange:(newText: string)=> void
}

export type MyPostContainerType = mapStatePropsType & mapDispatchPropsType



const mapStateToProps = (state: AppStateType):mapStatePropsType  => {

    return {
        posts: state.profilePage.posts,
        messageForNewText: state.profilePage.messageForNewText

    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (newText: string) => {
            dispatch(changeNewTextAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)