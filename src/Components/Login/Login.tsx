import React from 'react';
import {LoginReactHookForm, LoginType} from './LoginReactHookForm';
import s from '../Login/ReactHookForm.module.css'
import {connect} from 'react-redux';
import {loginTC} from '../../Redux/authReducer';
import {Navigate} from 'react-router-dom';
import {AppStateType} from '../../Redux/reduxStore';

type MapStatePropsType = {
    isAuth: boolean
}
type LoginPropsType = {
    isAuth: boolean
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}


const Login = (props: LoginPropsType) => {   //как тут типизировать?

    const onSubmit = (data: LoginType) => props.loginTC(data.email, data.password, data.rememberMe)

    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }
    return (
        <div className={s.loginForm}>
            <h1>
                LOGIN
            </h1>
            <div>
                <LoginReactHookForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {loginTC})(Login)

