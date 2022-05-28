import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../Redux/state";




const MyPosts = (props:ProfilePageType) => {

    let postsElement = props.posts.map(p=><Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)
    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea > </textarea>
                    <div>
                        <button>add post</button>
                    </div>
                </div >
                <div className={s.posts}>
                    {postsElement}

            </div>
        </div>

    );
};

export default MyPosts;