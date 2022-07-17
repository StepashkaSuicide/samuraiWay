import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {ActionsTypes, DialogType, MessageType, StoreType,} from '../../Redux/reduxStore';
import { updateNewMessageBodyAC,  sendMessageAC} from '../../Redux/dialogsReducer';
import {Dialogs} from './Dialogs';



type DialogsPropsType = {
    store: StoreType
    // dialogs: Array<DialogType>
    // messages: Array<MessageType>
    // changeNewMessageBodyCallBack: (body: string) => void
    // dispatch: (action: ActionsTypes) => void
    // newMessageBody: string
}



export const DialogsContainer = (props: DialogsPropsType) => {

    const state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.store.dispatch(sendMessageAC(state.newMessageBody))
    }
    const onNewMessageChange =(body: string)=> {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs store={props.store}
                 addMessage={addMessage}
                 onNewMessageChange={onNewMessageChange}
                 dialogsPage={state}
        />
    )
};

