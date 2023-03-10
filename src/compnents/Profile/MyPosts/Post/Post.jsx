import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src="" alt="avatar"/>
            <p>{props.message}</p>
            <button><p>like {props.likeCounter}</p></button>
        </div>
    );
};

export default Post;