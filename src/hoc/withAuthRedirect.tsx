import React, {ComponentType, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../Redux/reduxStore';


type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsForRedirectType) => {
        if (!props.isAuth) return <Navigate to={'/login/'}/>

        let {isAuth, ...restProps} = props
        return <Component {...restProps as T} />
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}