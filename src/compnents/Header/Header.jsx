import React from 'react';
import style from './header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__wrap}>
                <img className={style.header__logo} src="https://www.figma.com/file/FOVWU8U7zJnRwccrk6KUa2/Untitled?node-id=1%3A23&t=9ma9mJgp4MlQxyn2-4" alt="logo"/>
            </div>
        </header>
    );
};

export default Header;