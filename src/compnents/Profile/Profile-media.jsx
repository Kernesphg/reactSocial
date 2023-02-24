import React from 'react';
import style from './profileMedia.module.css'

const ProfileMedia = () => {
    return (
        <div className={style.profile__media}>
            <div className={style.profile__media_inner}>
                <nav>
                    <button>Фото</button>
                    <button>Музыка</button>
                    <button>Видео</button>
                </nav>
                <div className={style.profile__media_photos}>
                    <div><img src="https://sun1-15.userapi.com/impg/W9QJ_n4LdTxZ5f89T9xK2zw2AXT-1p08ZeEH_g/UewWlvI5Z9M.jpg?size=1620x2160&quality=95&sign=b2fc23b5ac128670ce881e71961a2243&type=album" alt="photo1"/></div>
                    <div><img src="https://sun1-27.userapi.com/impg/io6YiLyX7R4GPOQj2tQcKawE2OFi_rqi3yWl-Q/3U140gkD9Do.jpg?size=672x1080&quality=95&sign=a19bb3bb80e3ebf0e956fe5f481f5d68&type=album" alt="photo2"/></div>
                    <div><img src="https://sun1-84.userapi.com/impg/96jyt8K1teuALdbWhHodFmONNhmBEk3xNldUsQ/EsbTINcD06o.jpg?size=1080x1920&quality=96&sign=501b8dc7da2fad47a0334a5f84dd7f39&type=album" alt="photo3"/></div>
                    <div><img src="https://sun9-21.userapi.com/impg/Qyhk-Kzk_Y4ZwE9UGEok0c6msnco2F9CrGAACA/b2vnwKTu65I.jpg?size=1280x1600&quality=96&sign=5a6df678c298d068704e7866ce1e222d&type=album" alt="photo4"/></div>
                </div>
            </div>
        </div>
    );
};

export default ProfileMedia;