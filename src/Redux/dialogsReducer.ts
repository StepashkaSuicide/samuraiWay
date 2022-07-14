import {ActionsTypes, DialogPageType} from './reduxStore';

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

const initialState = {
        dialogs: [
            {id: 1, message: 'Dimych'},
            {id: 2, message: 'Linklenia'},
            {id: 3, message: 'Sveta'},
            {id: 4, message: 'JijaBass'},
            {id: 5, message: 'Artem'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Bye'},
            {id: 3, message: 'Helloy'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'gg'},
        ],
        newMessageBody: ''
}

export const dialogsReducer = (state=initialState, action: ActionsTypes) => {


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