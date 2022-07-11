const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


export type MessageType = {
    id: number
    message: string

}
export type DialogType = {
    id: number
    message: string

}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewText: string
}


export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type StoreType = {
    _state: RootStateType
    // changeNewMessageBody: (bodyUpdate: string)=> void
    changeNewPostText: (newText: string) => void
    changeMessageBody: (body: string) => void
    addPost: (newPost: string) => void
    _callSubscriber: (observer: any) => void
    subscribe: (callBack: (state: StoreType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}


//Action Creators -------------------------------------------------

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>

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
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export const sendMessageAC = (body: string) => {
    return {
        type: SEND_MESSAGE,
        sendBody: body
    } as const
}

//Action Creators -------------------------------------------------
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi jija', likesCount: 12},
                {id: 2, message: 'bb jija', likesCount: 11},
                {id: 3, message: 'bye jija', likesCount: 14},
                {id: 4, message: 'oo jija', likesCount: 15},
            ],
            messageForNewText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, message: 'Dimych'},
                {id: 2, message: 'Linklenia'},
                {id: 3, message: 'Sveta'},
                {id: 4, message: 'JijaBass'},
                {id: 5, message: 'Artem'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Bye'},
                {id: 3, message: 'Helloy'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'gg'},
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log('hello')
    },

    changeNewPostText(newText: string) {
        this._state.profilePage.messageForNewText = newText
        this._callSubscriber(this._state)
    },

    changeMessageBody(body: string) {
        this._state.dialogsPage.newMessageBody = body
        this._callSubscriber(this._state)
    },


    addPost(postText: string) {
        let newPost: PostType = {
            id: 6,
            message: postText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.messageForNewText = ''
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 6,
                message: action.postText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.messageForNewText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.messageForNewText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.messages.push({id: 44, message: body})
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }

    }
}


export default store


//
// } else if (action.type === SEND_MESSAGE) {
//     const bodyUpdate = this._state.dialogsPage.newMessageBody
//     const newMessage: MessageType = {id: 44, message: bodyUpdate}
//     this._state.dialogsPage.messages.push(newMessage)
//     this._state.dialogsPage.newMessageBody = ''
//     this._callSubscriber(this._state)
//
// } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//     this._state.dialogsPage.newMessageBody = action.bodyUpdate
//     this._callSubscriber(this._state)
// }













