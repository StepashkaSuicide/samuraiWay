import {ActionsTypes, DialogPageType, RootStateType} from './state';

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export const sendMessageAC = (body: string) => {
    return {
        type: SEND_MESSAGE,
        sendBody: body
    } as const
}



export const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {


    switch (action.type) {
        case SEND_MESSAGE:
            const body = state.newMessageBody
            state.messages.push({id: 44, message: body})
            state.newMessageBody = ''
            break;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            break;
        default:
            return state
    }

}