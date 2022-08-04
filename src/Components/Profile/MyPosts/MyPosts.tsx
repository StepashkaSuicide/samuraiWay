import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostContainerType} from './MyPostsContainer';


// type MessagesType = {
//     onPostChange:(newText: string)=> void
//     posts: Array<PostType>
//     addPost: ()=> void
//     // changeNewPostTextCallBack: (newText: string) => void
//     messageForNewText: string
// }


const MyPosts = (props: MyPostContainerType) => {
    let postsElement = props.posts.map(p =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}
              id={p.id}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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