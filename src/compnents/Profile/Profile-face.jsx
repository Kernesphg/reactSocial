import React from 'react';
import style from './profileFace.module.css'

const ProfileFace = () => {
    return (
        <div className={style.profile__face}>
            <div className={style.profile__face_block}>
                <img src="https://sun1-15.userapi.com/impg/W9QJ_n4LdTxZ5f89T9xK2zw2AXT-1p08ZeEH_g/UewWlvI5Z9M.jpg?size=1620x2160&quality=95&sign=b2fc23b5ac128670ce881e71961a2243&type=album" alt="avatar"/>
                <div className={style.profile__face_info}>
                    <p className={style.name}>Илья Каляшманов</p>
                    <p>Статус</p>
                    <p>Нижний Новгород</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileFace;