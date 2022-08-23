import React from 'react';
import {ReactHookForm} from './ReactHookForm';


type FormData = {
    email: string;
    password: string;
    errors: string
    checkbox: boolean
};


export const Login = () => {

    return (
        <>
            <h1>
                LOGIN
            </h1>
            <div>
                <ReactHookForm/>
            </div>

        </>
    );
};


