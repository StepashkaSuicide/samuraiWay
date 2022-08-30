import React from 'react';
import s from './Header.module.css';
import logo from '../../Common/images/logo.png';
import {NavLink} from 'react-router-dom';
import {PropsTypeHeaderContainer} from './HeaderContainer';


const Header = (props: PropsTypeHeaderContainer) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logoutTC}>LOGOUT</button></div>
                    :<NavLink to={'/login/'}>Login</NavLink>
                     }
            </div>
        </header>
    );
};

export default Header;