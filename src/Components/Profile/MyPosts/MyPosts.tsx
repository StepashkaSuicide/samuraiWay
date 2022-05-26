import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = () => {
    return (

            <div>
            <div>
                My posts
                <div>
                    <textarea > </textarea>
                    <div>
                        <button>add post</button>
                    </div>
                </div >
                <div className={s.posts}>
                  <Post message='hi jija' likesCount={'4'}/>
                  <Post  message='bye jija' likesCount={'6'}/>
            </div>
        </div>
        </div>
    );
};

export default MyPosts;