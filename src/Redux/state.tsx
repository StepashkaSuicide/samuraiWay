
export type MessageType = {
    id: number
    message: string

}
export type DialogType = {
    id: number
    name: string
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
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type StoreType = {
    _state: RootStateType
    changeNewPostText: (newText:string)=> void
    addPost: (newPost: string)=> void
    _onChange: ()=> void
    subscribe: (callBack: (state: StoreType) => void)=> void
    getState: ()=> RootStateType
    dispatch: (action: ActionsTypes )=> void
}

export type ActionsTypes =  AddPostActionType | ChangeNewTextActionType




type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}
type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}


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
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Linklenia'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'JijaBass'},
                {id: 5, name: 'Artem'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Bye'},
                {id: 3, message: 'Helloy'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'gg'},
            ],
        },
    },
    changeNewPostText(newText: string) {
        this._state.profilePage.messageForNewText = newText
        this._onChange()
    },
    addPost(postText: string) {
        const newPost: PostType = {
            id: 6,
            message: postText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        // this._state.profilePage.messageForNewText = ''
        this._onChange()
    },
    _onChange() {
        console.log('hello')
    },
    subscribe(callback) {
        this._onChange()
    },
    getState() {
        return this._state
    },
    dispatch(action){
        if (action.type==='ADD-POST') {
            const newPost: PostType = {
                id: 6,
                message: action.postText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            // this._state.profilePage.messageForNewText = ''
            this._onChange()
        }else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.messageForNewText = action.newText
            this._onChange()
        }

    }
}

export default store
