import {AppActionType, AppThunkType} from './reduxStore';
import {getAuthUserData} from './authReducer';

export type InitialStateTypeAppReducer = {
    initialized: boolean
}
export type AppReducerActionType = ReturnType<typeof initializedSuccess>

const initialState: InitialStateTypeAppReducer = {
    initialized: false
}


export const initializedSuccess = () => {
    return {
        type: 'set_initialized',

    } as const
}


export const appReducer = (state: InitialStateTypeAppReducer = initialState, action: AppActionType)
    : InitialStateTypeAppReducer => {
    switch (action.type) {
        case 'set_initialized':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializeApp = (): AppThunkType => (dispatch) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(initializedSuccess())
        })
}
