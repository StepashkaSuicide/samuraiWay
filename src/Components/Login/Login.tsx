import React from 'react';
import {LoginReactHookForm} from './LoginReactHookForm';
import s from '../Login/ReactHookForm.module.css'


export const Login = () => {

    return (
        <div className={s.loginForm}>
            <h1>
                LOGIN

            </h1>
            <div>
                <LoginReactHookForm/>
            </div>

        </div>
    );
};


