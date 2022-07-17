import {combineReducers, createStore} from 'redux';
import {addPostAC, changeNewTextAC, ProfilePageType, profileReducer} from './profileReducer';
import {DialogPageType, dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from './dialogsReducer';





export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type StoreType = {
    _state: RootStateType
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




const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer> //ипортировать в контейнерные компоненты

export const store = createStore(rootReducer)


