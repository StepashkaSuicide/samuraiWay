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

    let DialogsElements = state.dialogs.map(d =>
        <DialogItem key={d.id} message={d.message} id={d.id}/>);
    let messagesElements = state.messages.map(m =>
        <Message key={m.id} message={m.message} id={m.id}/>
    )


    // let newPostElement: any = React.createRef()

    let addMessage = () => {
        props.store.dispatch(sendMessageAC(state.newMessageBody))
    }
    const onNewMessageChange =(e:ChangeEvent<HTMLTextAreaElement>)=> {
        props.store.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    return (
        <Dialogs store={props.store} />
    )
};

