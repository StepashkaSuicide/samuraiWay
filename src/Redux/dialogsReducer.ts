import { v1 } from 'uuid';
import { AppActionType } from './reduxStore';

export type DialogsReducerActionType =
    ReturnType<typeof sendMessageAC>


export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: 'send_message',
        newMessageBody
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

}

// export type initialStateType = typeof initialState

type initialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const initialState: initialStateType = {
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
}


export const dialogsReducer = (state: initialStateType = initialState, action: AppActionType): initialStateType => {

    switch (action.type) {
        case 'send_message':
            const messageID = v1()
            let newMessage = {id: messageID, message: action.newMessageBody}

            return {
                ...state,
                messages: [newMessage, ...state.messages],
            }

        default:
            return state
    }

}