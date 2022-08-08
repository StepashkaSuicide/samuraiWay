import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile, UserProfileReducerType} from '../../Redux/profileReducer';
import {AppStateType} from '../../Redux/reduxStore';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
// @ts-ignore
import { RouteComponentProps } from 'react-router';

function withRouter(Component: any /*React.ElementType*/) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

type PathParamsType = {
    userId: string
}
export type MapStateToPropsType = {
    profile: UserProfileReducerType | null
}
export type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileReducerType)=>void
}
type PropsType = RouteComponentProps<PathParamsType> & AllMapDisPropsType
type AllMapDisPropsType = MapStateToPropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId ;
        if (!userId){
            userId = 21422
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render()/*: React.ReactNode*/ {
        return (

                <Profile profile={this.props.profile} />
        );
    }
}
const mapStatePropsType = (state:AppStateType ): ProfileType=> ({
    profile: state.profilePage.profile
})
export default connect (mapStatePropsType, {setUserProfile})(withRouter(ProfileContainer))