import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfilePageType, profileReducer, ProfileReducerActionType} from './profileReducer';
import {DialogPageType, dialogsReducer, DialogsReducerActionType} from './dialogsReducer';
import {usersReducer, UsersReducerActionType} from './usersReducer';
import {authReducer, AuthReducerActionType} from './authReducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer> //ипортировать в контейнерные компоненты

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
//все типы экшенов в приложении
export type AppActionType = UsersReducerActionType | AuthReducerActionType | DialogsReducerActionType | ProfileReducerActionType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionType>


