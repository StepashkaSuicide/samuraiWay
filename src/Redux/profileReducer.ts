import {v1} from 'uuid';
import {ActionsTypes} from './reduxStore';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
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


export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST:
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                messageForNewText: action.newText
            }
        default:
            return state
    }
}

// state.action.postText