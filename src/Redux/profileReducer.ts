import {ActionsTypes, PostType, ProfilePageType, RootStateType} from './state';

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

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 6,
                message: state.messageForNewText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.messageForNewText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.messageForNewText = action.newText
            break;
        default:
            return state
    }
}

// state.action.postText