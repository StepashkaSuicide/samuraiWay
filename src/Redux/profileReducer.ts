import {v1} from 'uuid';

export type ProfileReducerType = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC>

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

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewText: string
}

export type initialStateType = typeof initialState


const initialState = {
    posts: [
        {id: v1(), message: 'hi jija', likesCount: 12},
        {id: v1(), message: 'bb jija', likesCount: 11},
        {id: v1(), message: 'bye jija', likesCount: 14},
        {id: v1(), message: 'oo jija', likesCount: 15},
    ] as Array<PostType>,
    messageForNewText: '',
}


export const profileReducer = (state: initialStateType = initialState, action: ProfileReducerType): initialStateType => {
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
        default:
            return state
    }
}

