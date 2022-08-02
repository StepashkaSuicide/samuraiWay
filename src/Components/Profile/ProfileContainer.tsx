import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import { setUserProfile} from '../../Redux/profileReducer';
import {AppStateType} from '../../Redux/reduxStore';


export type MapStateToPropsType = {
    profile: any
}
export type MapDispatchPropsType = {
    setUserProfile: (profile: any)=>void
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
            <div>
                <Profile
                    posts={this.props.profile.posts}
                    profile={this.props.profile.profile}
                    messageForNewText={this.props.profile.messageForNewText}/>
                {/*<MyPostsContainer/>*/}
            </div>
        );
    }
}

const mapStatePropsType = (state:AppStateType ): MapStateToPropsType=> ({
    profile: state.profilePage.profile
})

export default connect (mapStatePropsType, {setUserProfile})(ProfileContainer)