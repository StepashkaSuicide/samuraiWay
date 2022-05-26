import React from 'react';
import s from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div >
                <a>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a >Message</a>
            </div>
            <div>
                <a >News</a>
            </div>
            <div>
                <a >Music</a>
            </div>
        </nav>
    );
};

export default NavBar;