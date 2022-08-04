import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../Redux/profileReducer';
import {AppStateType} from '../../Redux/reduxStore';
import {UserType} from '../../Redux/usersReducer';


export type MapStateToPropsType = {
    profile: UserType | null
}
export type MapDispatchPropsType = {
    setUserProfile: (profile: UserType)=>void
}

type AllMapDisPropsType = MapStateToPropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<AllMapDisPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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


export default connect (mapStatePropsType, {setUserProfile})(ProfileContainer)