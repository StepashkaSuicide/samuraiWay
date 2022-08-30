import React from 'react';
import Header from './Header';
import {getAuthUserData, logoutTC} from '../../Redux/authReducer';
import {toggleIsFetching} from '../../Redux/usersReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/reduxStore';

type MapStatePropsType = {
    isFetching: boolean
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
    toggleIsFetching: (isFetching: boolean) => void
    logoutTC: () => void
}

export type PropsTypeHeaderContainer = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsTypeHeaderContainer> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header  {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthUserData, toggleIsFetching, logoutTC})(HeaderContainer);