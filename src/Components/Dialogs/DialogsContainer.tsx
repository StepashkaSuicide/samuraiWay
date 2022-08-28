import React, {ComponentType} from 'react';
import {AppStateType} from '../../Redux/reduxStore';
import {DialogPageType, sendMessageAC} from '../../Redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


export type MapStatePropsType = {
    dialogsPage: DialogPageType
}
export type mapDispatchPropsType = {
    addMessage: (newMessageBody: string)=>void
    // onNewMessageChange: (body: string)=> void
    }

export type AllMapDisToPropsType = MapStatePropsType & mapDispatchPropsType


const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        addMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        },
        // onNewMessageChange: (body: string) => {
        //     dispatch(updateNewMessageBodyAC(body))
        // }
    }
}
// const AuthRedirectComponent = withAuthRedirect(Dialogs)

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)