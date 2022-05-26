import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = () => {
    return (

            <div>
            <div>
                My posts
                <div>
                    <textarea> </textarea>
                    <div>
                        <button>add post</button>
                    </div>
                </div >
                <div className={s.posts}>
                  <Post message='hi jija'/>
                  <Post  message='bye jija'/>
            </div>
        </div>
        </div>
    );
};

export default MyPosts;