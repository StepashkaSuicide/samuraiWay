import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/state";






export const Dialogs = (props:DialogPageType) => {
    debugger
    let DialogsElements = props.dialogs.map(d =>
        <DialogItem  key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m =>
        <Message  key={m.id} message={m.message} id={m.id}/>
    )
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

