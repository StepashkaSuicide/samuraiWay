import {v1} from 'uuid';

export type ProfileReducerType = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof setUserProfile>

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type PhotosType = {
    large: string
    small:string
}
export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewText: string
    profile: UserProfileReducerType | null

}

export  type ContactsType = {
    facebook: string
    github: string
    instagram: string
    mainLink: string
    twitter: string
    vk: string
    website: string
    youtube: string
}
export type UserProfileReducerType = {
    userId: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
}
//     export type ResponseProfileTypeApi = {
//     resultCode: number
//     messages: Array<string>
//     data: UserType
// }

export type ProfileType = {
    profile: UserProfileReducerType | null
}



export const addPostAC = () => {
    return {
        type: 'add_post',
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'update_new_post_text',
        newText: newText
    } as const
}
export const setUserProfile = (profile: UserProfileReducerType) => {
    return {
        type: 'set_user_profile',
        payload: {profile}
    } as const
}

export type InitialStateType = {
    posts:  Array<PostType>
    messageForNewText: string
    profile: UserProfileReducerType | null

} /*typeof initialState*/

const initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'hi jija', likesCount: 12},
        {id: v1(), message: 'bb jija', likesCount: 11},
        {id: v1(), message: 'bye jija', likesCount: 14},
        {id: v1(), message: 'oo jija', likesCount: 15},
    ] as Array<PostType>,
    messageForNewText: '',
    profile: null,
}


export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerType): InitialStateType => {
    switch (action.type) {
        case 'add_post':
            const postID = v1()
            const newPost: PostType = {
                id: postID,
                message: state.messageForNewText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                messageForNewText: ''
            }
        case 'update_new_post_text':
            return {
                ...state,
                messageForNewText: action.newText
            }
        case 'set_user_profile':

            return /*<InitialStateType>*/{
                ...state,
                profile: action.payload.profile,
            }
        default:
            return state
    }
}

