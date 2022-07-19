import React from 'react';
import {AppStateType, RootStateType} from '../../Redux/reduxStore';
import {DialogPageType, sendMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';



export type MapStatePropsType = {
    dialogsPage: DialogPageType
}
export type mapDispatchPropsType = {
    addMessage: ()=>void
    onNewMessageChange: (body: string)=> void
    }

export type AllMapDisToPropsType = MapStatePropsType & mapDispatchPropsType




const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
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