import React from 'react';
import {AppStateType, RootStateType} from '../../Redux/reduxStore';
import {DialogPageType, sendMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {InitialStateTypeAuthReducer} from '../../Redux/authReducer';



export type MapStatePropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean

}
export type mapDispatchPropsType = {
    addMessage: ()=>void
    onNewMessageChange: (body: string)=> void
    }

export type AllMapDisToPropsType = MapStatePropsType & mapDispatchPropsType




const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(sendMessageAC())
        },
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}

   export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)