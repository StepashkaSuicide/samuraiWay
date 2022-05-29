import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/state";

export const Dialogs = (props:DialogPageType) => {
    let DialogsElements = props.dialogs.map(d =>
        <DialogItem  key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m =>
        <Message  key={m.id} message={m.message} id={m.id}/>
    )
    let newPostElement:any = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
                <div className={s.postsBlock}>
                    <h3>send message</h3>
                    <div>
                        <textarea ref={newPostElement}> </textarea>
                        <div>
                            <button onClick={addPost}>send</button>
                        </div>
            </div>
            </div>
        </div>
    );
};

