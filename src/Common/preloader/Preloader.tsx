import React from 'react';
import loader from './../../assets/loader.gif'
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <span className={s.preloader}>
            <img src={loader} alt={'preloader'}/>
        </span>
    );
};
