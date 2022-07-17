import {combineReducers, createStore} from 'redux';
import {addPostAC, changeNewTextAC, profileReducer} from './profileReducer';
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from './dialogsReducer';



export type MessageType = {
    id: number
    message: string

}
export type DialogType = {
    id: number
    message: string

}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewText: string
}


export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type StoreType = {
    _state: RootStateType
    // addMessage: ()=> void
    changeNewPostText: (newText: string) => void
    changeMessageBody: (body: string) => void
    addPost: (newPost: string) => void
    _callSubscriber: (observer: any) => void
    subscribe: (callBack: (state: StoreType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
export const store: StoreType = createStore(reducers)