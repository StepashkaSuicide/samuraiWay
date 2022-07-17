import {ActionsTypes, PostType} from './reduxStore';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

const initialState = {
    posts: [
        {id: 1, message: 'hi jija', likesCount: 12},
        {id: 2, message: 'bb jija', likesCount: 11},
        {id: 3, message: 'bye jija', likesCount: 14},
        {id: 4, message: 'oo jija', likesCount: 15},
    ],
    messageForNewText: '',
}



export const profileReducer = (state=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 6,
                message: state.messageForNewText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.messageForNewText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.messageForNewText = action.newText
            return state;
        default:
            return state
    }
}

// state.action.postText