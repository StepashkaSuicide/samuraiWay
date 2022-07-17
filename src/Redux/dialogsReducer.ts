import {ActionsTypes} from './reduxStore';

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
        // body: body
    } as const
}
export type MessageType = {
    id: number
    message: string

}


export type DialogType = {
    id: number
    message: string

}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string

}





export type initialStateType = typeof initialState

const initialState = {
        dialogs: [
            {id: 1, message: 'Dimych'},
            {id: 2, message: 'Linklenia'},
            {id: 3, message: 'Sveta'},
            {id: 4, message: 'JijaBass'},
            {id: 5, message: 'Artem'},
        ] as Array<DialogType>,
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Bye'},
            {id: 3, message: 'Helloy'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'gg'},
        ] as Array<MessageType>,
        newMessageBody: ''
}


export const dialogsReducer = (state=initialState, action: ActionsTypes):initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const body = state.newMessageBody
            state.messages.push({id: 44, message: body})
            state.newMessageBody = ''
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }

}