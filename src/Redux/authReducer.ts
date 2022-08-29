import {AppActionType, AppThunkType} from './reduxStore';
import {authAPI} from '../api/api';
import {toggleIsFetching} from './usersReducer';


export type InitialStateTypeAuthReducer = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean

}

export type AuthLoginType = {
    email: string,
    password: string,
    rememberMe: boolean
}


export type ResponseApiDeleteLoginType<T={}> = {
  data: T;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
}

export type AuthReducerActionType = ReturnType<typeof setAuthUserData>  /*ReturnType<typeof setAuthUserError>*/

const initialState: InitialStateTypeAuthReducer = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'set_user_data',
        payload: {userId, email, login, isAuth}
    } as const
}
// export const setAuthUserError = (messages: string[]) => {
//     return {
//         type: 'set_user_data_error',
//         payload: {messages}
//     } as const
// }

export const authReducer = (state: InitialStateTypeAuthReducer = initialState, action: AppActionType): InitialStateTypeAuthReducer => {
    switch (action.type) {
        case 'set_user_data':
            return {
                ...state,
                ...action.payload,
            }
        // case 'set_user_data_error':
        //     return {
        //         ...state,
        //         ...action.payload
        //     }
        default:
            return state
    }
}

export const getAuthUserData = (): AppThunkType => {
    return (dispatch) => {
        toggleIsFetching(true)
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    toggleIsFetching(false)
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}


export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
                // dispatch(setAuthUserError(['fdfd']))
        })
}

export const logoutTC = (): AppThunkType => (dispatch) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}