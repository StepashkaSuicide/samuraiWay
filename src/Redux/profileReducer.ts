import {v1} from 'uuid';
import {AppActionType, AppThunkType} from './reduxStore';
import {profileAPI} from '../api/api';

//     export type ResponseProfileTypeApi = {
//     resultCode: number
//     messages: Array<string>
//     data: UserType
// }

export type ProfileReducerActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type InitialStateType = {
    posts: Array<PostType>
    profile: UserProfileResponseType | null
    status: string

} /*typeof initialState*/

export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewText: string
    profile: UserProfileResponseType | null
}

export type ResponseStatusType<T = {}> = {
    data: T;
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
}
export type UserProfileResponseType = {
    userId: string
    fullName: string
    aboutMe?: string
    contacts: {
        facebook?: string
        github?: string
        instagram?: string
        mainLink?: string
        twitter?: string
        vk?: string
        website?: string
        youtube?: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large?: string
        small?: string
    }
}

export type ProfileType = {
    profile: UserProfileResponseType | null
    status: string
    updateStatus: any
}
export const addPostAC = (messageForNewText:string) => {
    return {
        type: 'add_post',
        textarea: messageForNewText
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: 'set_status',
        status
    } as const
}

export const setUserProfile = (profile: UserProfileResponseType) => {
    return {
        type: 'set_user_profile',
        payload: {profile}
    } as const
}

const initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'hi jija', likesCount: 12},
        {id: v1(), message: 'bb jija', likesCount: 11},
        {id: v1(), message: 'bye jija', likesCount: 14},
        {id: v1(), message: 'oo jija', likesCount: 15},
    ] as Array<PostType>,
    profile: null,
    status: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case 'add_post':
            const postID = v1()
            const newPost: PostType = {
                id: postID,
                message: action.textarea,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        case 'set_user_profile':

            return /*<InitialStateType>*/{
                ...state,
                profile: action.payload.profile,
            }
        case 'set_status':
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}

//sanka
export const getUserProfile = (userId: number): AppThunkType => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

//sanka
export const getProfileStatus = (userId: number): AppThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatusAC(response.data))
            })
    }
}

//sanka
export const updateStatus = (status: string): AppThunkType => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            })
    }
}
