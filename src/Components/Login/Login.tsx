import React from 'react';
import {FormType, LoginReactHookForm} from './LoginReactHookForm';
import s from '../Login/ReactHookForm.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {loginTC} from '../../Redux/authReducer';
import {Navigate} from 'react-router-dom';
import {AppStateType} from '../../Redux/reduxStore';

type IsAuthType = {
    isAuth: boolean
}
export const Login = () => {
    const dispatch = useDispatch()
    const redirectIsAuth= useSelector<AppStateType, IsAuthType>(state => state.auth)
    const onSubmit = (data: FormType) => {
        dispatch(loginTC(data.email, data.password, data.rememberMe))
    }
    if (redirectIsAuth.isAuth) {
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

// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         isAuth: state.auth.isAuth,
//     }
// }


// export default connect(mapStateToProps, {loginTC})(Login)

// type LoginPropsType = {
//     isAuth: boolean
//     loginTC: (email: string, password: string, rememberMe: boolean) => void
// }