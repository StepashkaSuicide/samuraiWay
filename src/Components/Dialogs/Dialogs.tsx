import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {AllMapDisToPropsType} from './DialogsContainer';
import {FormTextArea} from '../FormTextArea/FormTextArea';
import {Simulate} from 'react-dom/test-utils';



export const Dialogs = (props: AllMapDisToPropsType) => {

    const state = props.dialogsPage

    let DialogsElements = state.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m =>
        <Message key={m.id} message={m.message} id={m.id}/>
    )

    let addMessage = (data: {textarea?: string}) => {
        if (data.textarea?.trim()){
            props.addMessage(data.textarea)
            // throw new Error('dolbaeb')
        }else {
          return
        }
    }


    // const onNewMessageChange =(e:ChangeEvent<HTMLTextAreaElement>)=> {
    //     props.onNewMessageChange(e.currentTarget.value)
    // }

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

                        <FormTextArea onSubmit={addMessage}/>

                    </div>
                </div>
            </div>

        </div>
    );
};

{/*<textarea*/}
{/*    value={state.newMessageBody}*/}
{/*    onChange={onNewMessageChange}*/}
{/*> </textarea>*/}
{/*<div>*/}
{/*    <button onClick={addMessage}>send</button>*/}
{/*</div>*/}