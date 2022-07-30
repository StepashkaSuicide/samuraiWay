import { v1 } from 'uuid';
import {addPostAC, changeNewTextAC} from './profileReducer';




export type DialogsReducerType =
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>


export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'update_new_message_body',
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'send_message',
    } as const
}
export type MessageType = {
    id: string
    message: string

}


export type DialogType = {
    id: string
    name: string

}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string

}

export type initialStateType = typeof initialState

const initialState = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Linklenia'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'JijaBass'},
        {id: v1(), name: 'Artem'},
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Bye'},
        {id: v1(), message: 'Helloy'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'gg'},
    ] as Array<MessageType>,
    newMessageBody: ''
}


export const dialogsReducer = (state: initialStateType = initialState, action: DialogsReducerType): initialStateType => {

    switch (action.type) {
        case 'send_message':
            const messageID = v1()
            let newMessage = {id: messageID, message: state.newMessageBody}

            return {
                ...state,
                messages: [newMessage, ...state.messages],
                newMessageBody: ''
            }
        case 'update_new_message_body':
            return {
                ...state,
                newMessageBody: action.body
        }
        default:
            return state
    }

}