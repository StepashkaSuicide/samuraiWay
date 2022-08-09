import React from 'react';


export type InitialStateTypeAuthReducer = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
}


export type AuthReducerActionType =
    ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFetching>


export type AuthType = {
    id: number
    login: string
    email: string
    messages: []
    fieldsErrors: []
    resultCode: number
}


const initialState = {
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
export const toggleIsFetching = () => {
    return {
        type: 'toggle_is_fetching',
        isFetching: false,
    } as const
}


export const authReducer = (state = initialState, action: AuthReducerActionType): InitialStateTypeAuthReducer => {
    switch (action.type) {
        case 'set_user_data':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case 'toggle_is_fetching':
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state

    }
}