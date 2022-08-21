import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, UserProfileReducerType} from '../../Redux/profileReducer';
import {useLocation, useNavigate, useParams,} from 'react-router-dom';
// @ts-ignore
import {RouteComponentProps} from 'react-router';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

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
    profile: UserProfileReducerType | null
    // isAuth: boolean
}
export type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileReducerType) => void
}
type PropsType = RouteComponentProps<PathParamsType> & AllMapDisPropsType
type AllMapDisPropsType = MapStateToPropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 21422
        }
        this.props.getUserProfile(userId)
    }

    render()/*: React.ReactNode*/ {

        return (

            <Profile profile={this.props.profile}/>
        );
    }
}



const mapStateToProps = (state: any): any => ({
    profile: state.profilePage.profile,
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)
