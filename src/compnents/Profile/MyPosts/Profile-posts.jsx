import React from 'react';
import style from './profilePosts.module.css'
import Post from "./Post/Post";

const ProfilePosts = () => {
    return (
        <div className={style.profile__posts}>
            <div className={style.profile__posts_inner}>
                <div className={style.profile__input}>
                    <img src="https://sun1-15.userapi.com/impg/W9QJ_n4LdTxZ5f89T9xK2zw2AXT-1p08ZeEH_g/UewWlvI5Z9M.jpg?size=1620x2160&quality=95&sign=b2fc23b5ac128670ce881e71961a2243&type=album" alt="avatar"/>
                    <input type="text" placeholder={'Что у вас нового?'}/>
                    <button >Отправить</button>
                </div>
                <Post message={"Первый пост"} likeCounter={"15"}/>
                <Post message={"А это второй пост"} likeCounter={"20"}/>
            </div>
        </div>
    );
};

export default ProfilePosts;