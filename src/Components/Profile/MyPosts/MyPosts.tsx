import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostAC, PostType} from '../../../Redux/state';


type MessagesType = {
    posts: Array<PostType>
    addPostCallBack: (postText: string) => void
    changeNewPostTextCallBack: (newText: string) => void
    messageForNewText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MessagesType) => {

    let postsElement = props.posts.map(p =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}
              id={p.id}/>)

    let addPost = () => {
        props.dispatch(addPostAC(props.messageForNewText))

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostTextCallBack(e.currentTarget.value)
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
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    );
};

export default MyPosts;