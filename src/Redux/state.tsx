
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

let renderTree = (state: RootStateType) => {
    console.log('statec')
}




let state: RootStateType = {
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
}


export const addPost = (postText: string) => {

    const newPost: PostType = {
        id: 6,
        message: postText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.messageForNewText = ''
    renderTree(state)
}
export const changeNewPostText = (newText: string) => {
    state.profilePage.messageForNewText = newText
    renderTree(state)

}
export const subscribe = (observer: any) => {
    renderTree = observer
}





export default state

