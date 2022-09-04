import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect, useSelector} from 'react-redux';
import {
    getProfileStatus,
    getUserProfile,
    ProfileType,
    updateStatus,
    UserProfileResponseType
} from '../../Redux/profileReducer';
import {Navigate, useLocation, useNavigate, useParams,} from 'react-router-dom';
// @ts-ignore
import {RouteComponentProps} from 'react-router';
import {compose} from 'redux';
import {AppStateType} from '../../Redux/reduxStore';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

function withRouter(Component: any /*React.ElementType*/) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
    return ComponentWithRouterProp;
}

type PathParamsType = {
    userId: number
}
export type MapStateToPropsType = {
    profile: UserProfileResponseType | null
    status: string
    authorizedUserId: string | null
    isAuth: boolean
}
export type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileResponseType) => void
}

type PropsType = RouteComponentProps<PathParamsType> & AllMapDisPropsType
type AllMapDisPropsType = MapStateToPropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<PropsType> {


    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    }
}



const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateStatus}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)

// const profile = useSelector<AppStateType, UserProfileResponseType | null>(state => state.profilePage.profile)
// const profile = useSelector<AppStateType,  string>(state => state.profilePage.status)
// const profile = useSelector<AppStateType,  string | null>(state => state.auth.userId)
// const profile = useSelector<AppStateType,  boolean>(state => state.auth.isAuth)