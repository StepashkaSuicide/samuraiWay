import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setUsersAC, unfollowAC, UsersType} from '../../Redux/usersReducer';
import {AppStateType} from '../../Redux/reduxStore';
import {Dispatch} from 'redux';


export type mapStateToPropsType = {
    users: Array<UsersType>
}
export type mapDispatchPropsType = {
    follow: (userID: string)=> void
    unfollow: (userID: string)=> void
    setUsers: (users: Array<UsersType>)=>void
}
export type AllMapDisPropsType = mapStateToPropsType & mapDispatchPropsType

export const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
export const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(Users);