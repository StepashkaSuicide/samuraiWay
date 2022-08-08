import React from 'react';
import s from "./Header.module.css";
import logo from "../../Common/images/logo.png";
import {NavLink} from 'react-router-dom';

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    :<NavLink to={'/login/'}>Login</NavLink>
                     }
            </div>
        </header>
    );
};

export default Header;