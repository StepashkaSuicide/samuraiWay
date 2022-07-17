import React from 'react';
import { MessageType } from '../../../Redux/dialogsReducer';
import s from "./../Dialogs.module.css";




const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}
export default Message

