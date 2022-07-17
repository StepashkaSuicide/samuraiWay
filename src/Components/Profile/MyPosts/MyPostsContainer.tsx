import React from 'react';
import {AppStateType} from '../../../Redux/reduxStore';
import {addPostAC, changeNewTextAC} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';


// type MessagesType = {
//     store: StoreType
// }

// const MyPostsContainer = () => {
//
//     // const state = store.getState().profilePage
//     let addPost = () => {
//         props.store.dispatch(addPostAC(state.messageForNewText))
//     }
//
//     let onPostChange = (newText: string) => {
//         props.store.dispatch(changeNewTextAC(newText))
//     }
//     return (
//         <MyPosts
//             addPost={addPost}
//             onPostChange={onPostChange}
//             posts={state.posts}
//             changeNewPostTextCallBack={props.store.changeNewPostText}
//             messageForNewText={state.messageForNewText}
//
//         />
//
//     );
// };
//
// export default MyPostsContainer;




const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        messageForNewText: state.profilePage.messageForNewText

    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
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