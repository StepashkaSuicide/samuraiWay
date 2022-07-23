import {combineReducers, createStore} from 'redux';
import {addPostAC, changeNewTextAC, ProfilePageType, profileReducer} from './profileReducer';
import {DialogPageType, dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from './dialogsReducer';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, usersReducer} from './usersReducer';





export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC>


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer> //ипортировать в контейнерные компоненты

export const store = createStore(rootReducer)


