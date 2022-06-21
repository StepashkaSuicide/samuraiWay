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
    store: RootStateType
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
    _callSubscriber(state: RootStateType) {
        console.log('state changed')
    },

    subscribe(observer: any) {
        _callSubscriber = observer
    },

    addPost(postText: string) {
        const newPost: PostType = {
            id: 6,
            message: postText,
            likesCount: 0,
        }
        this.store.profilePage.posts.push(newPost)
        this.store.profilePage.messageForNewText = ''
        this.store._callSubscriber(state)
    },
    changeNewPostText(newText: string) {
        state.profilePage.messageForNewText = newText
        _callSubscriber(state)

    },

}




