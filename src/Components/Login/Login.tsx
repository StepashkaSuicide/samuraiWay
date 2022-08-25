import React from 'react';
import {ReactHookForm} from './ReactHookForm';
import s from '../Login/ReactHookForm.module.css'


export const Login = () => {

    return (
        <div className={s.loginForm}>
            <h1>
                LOGIN

            </h1>
            <div>
                <ReactHookForm/>
            </div>

        </div>
    );
};


