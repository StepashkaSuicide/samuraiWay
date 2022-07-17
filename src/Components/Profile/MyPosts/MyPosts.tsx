import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, PostType} from '../../../Redux/reduxStore';
import {changeNewTextAC} from '../../../Redux/profileReducer';


type MessagesType = {
    onPostChange:(newText: string)=> void
    posts: Array<PostType>
    addPost: ()=> void
    // addPostCallBack: (postText: string) => void
    changeNewPostTextCallBack: (newText: string) => void
    messageForNewText: string
    // dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MessagesType) => {

    let postsElement = props.posts.map(p =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}
              id={p.id}/>)

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostAC(props.messageForNewText))

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(changeNewTextAC(e.currentTarget.value))
        props.onPostChange(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.messageForNewText}
                    onChange={onPostChange}
                > </textarea>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    );
};

export default MyPosts;