import React from 'react';
import style from './navbar.module.css'

const NavBar = () => {
    return (
        <div className={style.navbar}>
                <a href="src/compnents/NavBar/NavBar">Моя страница</a>
                <a href="src/compnents/NavBar/NavBar">Новости</a>
                <a href="src/compnents/NavBar/NavBar">Сообщения</a>
                <a href="src/compnents/NavBar/NavBar">Друзья</a>
                <a href="src/compnents/NavBar/NavBar">Видео</a>
                <a href="src/compnents/NavBar/NavBar">Музыка</a>
                <a href="src/compnents/NavBar/NavBar">Сообщества</a>
                <a href="src/compnents/NavBar/NavBar">Настройки</a>
        </div>
    );
};

export default NavBar;