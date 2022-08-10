import React from 'react';
import Header from './Header';
import axios from 'axios';
import {setAuthUserData} from '../../Redux/authReducer';
import {toggleIsFetching} from '../../Redux/usersReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/reduxStore';

type MapStatePropsType = {
    isFetching: boolean
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    toggleIsFetching: (isFetching: boolean) => void
    setAuthUserData: (userId: string | null, email: string | null, login: string | null) => void
}
type PropsTypeHeaderContainer = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsTypeHeaderContainer> {
    componentDidMount() {

        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })

            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.toggleIsFetching(false)
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }
    render() {
        return (
            <Header {...this.props}/>
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

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);