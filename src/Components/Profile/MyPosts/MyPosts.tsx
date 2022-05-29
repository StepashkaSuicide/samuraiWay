import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../Redux/state";




const MyPosts = (props:ProfilePageType) => {


    let postsElement = props.posts.map(p=><Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement:any = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }
    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                    <div>
                        <button onClick={addPost}>add post</button>
                    </div>
                </div >
                <div className={s.posts}>
                    {postsElement}

            </div>
        </div>

    );
};

export default MyPosts;