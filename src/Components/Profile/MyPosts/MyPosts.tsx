import React, {useMemo} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostContainerType} from './MyPostsContainer';
import {FormTextArea} from '../../FormTextArea/FormTextArea';

const MyPosts = (props: MyPostContainerType) => {
    let postsElement = props.posts.map(p =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}
              id={p.id}/>)

    let onAddPost = (data: {textarea?: string}) => {
        if (data.textarea?.trim()===''){
            throw new Error('dolbaeb')
        }else if (data.textarea){
            props.addPost(data.textarea)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <FormTextArea   onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;
