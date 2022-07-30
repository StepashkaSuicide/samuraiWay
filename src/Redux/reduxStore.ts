import {combineReducers, createStore} from 'redux';
import {ProfilePageType, profileReducer} from './profileReducer';
import {DialogPageType, dialogsReducer} from './dialogsReducer';
import {usersReducer} from './usersReducer';


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}




const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer> //ипортировать в контейнерные компоненты

export const store = createStore(rootReducer)


