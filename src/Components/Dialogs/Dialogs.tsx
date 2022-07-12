import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {ActionsTypes,  DialogType, MessageType,} from '../../Redux/state';
import { updateNewMessageBodyAC,  sendMessageAC} from '../../Redux/dialogsReducer';



type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    changeNewMessageBodyCallBack: (body: string) => void
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string


}



export const Dialogs = (props: DialogsPropsType) => {
    let DialogsElements = props.dialogs.map(d =>
        <DialogItem key={d.id} message={d.message} id={d.id}/>);
    let messagesElements = props.messages.map(m =>
        <Message key={m.id} message={m.message} id={m.id}/>
    )


    // let newPostElement: any = React.createRef()

    let addMessage = () => {

        props.dispatch(sendMessageAC(props.newMessageBody))

        // let text = newMessageBody.currentTarget.value
        // alert(text)
    }
    const onNewMessageChange =(e:ChangeEvent<HTMLTextAreaElement>)=> {
        // props.dispatch(updateNewMessageBodyAC(props.newMessageBody))
        props.changeNewMessageBodyCallBack(e.currentTarget.value)
        // props.newMessageBody
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.postsBlock}>
                    <h3>send message</h3>
                    <div>
                        <textarea
                            value={props.newMessageBody}
                            // ref={newPostElement}
                            onChange={onNewMessageChange}
                        > </textarea>
                        <div>
                            <button onClick={addMessage}>send</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

