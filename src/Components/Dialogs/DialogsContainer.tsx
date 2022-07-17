import React from 'react';
import {AppStateType, RootStateType} from '../../Redux/reduxStore';
import {DialogPageType, sendMessageAC, updateNewMessageBodyAC} from '../../Redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


// type DialogsPropsType = {
//     store: StoreType
// }

// type MapStateToPropsType = {
//
// }
// // dispatch: Dispatch  типизация
// export const DialogsContainer1 = () => {
//
//     const state = props.store.getState().dialogsPage
//
//     let addMessage = () => {
//         props.store.dispatch(sendMessageAC(state.newMessageBody))
//     }
//     const onNewMessageChange =(body: string)=> {
//         props.store.dispatch(updateNewMessageBodyAC(body))
//     }
//
//     return (
//         <Dialogs store={props.store}
//                  addMessage={addMessage}
//                  onNewMessageChange={onNewMessageChange}
//                  dialogsPage={state}
//         />
//     )
// };

export type MapStateToPropsType = {
    dialogsPage: DialogPageType
}
export type mapDispatchToPropsType = {
    addMessage: ()=>void
    onNewMessageChange: (body: string)=> void
    }

export type AllMapDisToPropsType = MapStateToPropsType & mapDispatchToPropsType




const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
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