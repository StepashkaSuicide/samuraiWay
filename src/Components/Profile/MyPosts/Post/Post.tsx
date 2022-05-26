import React from 'react';
import s from "./Post.module.css";



type PostType = {
    message: string
}

const Post = (props: PostType) => {
    return (

        <div>
            <div className={s.item}>
                <img src="https://i.pinimg.com/736x/72/d4/8d/72d48dd2b66849784a1e1acf2b186e62.jpg" alt="s"/>
            </div>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>

    );
};

export default Post;