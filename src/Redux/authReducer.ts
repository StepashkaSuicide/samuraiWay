import React from 'react';
import { AppActionType } from './reduxStore';


export type InitialStateTypeAuthReducer = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean

}


export type AuthReducerActionType = ReturnType<typeof setAuthUserData>



export type DataType = {
    id: number
    email: string
    login: string
}

export type AuthAPIType = {
    resultCode: number
    messages: string[]
    data: DataType
}

const initialState: InitialStateTypeAuthReducer = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null) => {
    return {
        type: 'set_user_data',
        payload: {userId, email, login}
    } as const
}

export const authReducer = (state: InitialStateTypeAuthReducer = initialState, action: AppActionType): InitialStateTypeAuthReducer => {
    switch (action.type) {
        case 'set_user_data':
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        default:
            return state
    }
}