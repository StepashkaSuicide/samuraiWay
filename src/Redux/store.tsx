import {addPostAC, changeNewTextAC, profileReducer} from './profileReducer';
// import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from './dialogsReducer';
//
// export type MessageType = {
//     id: number
//     message: string
//
// }
// export type DialogType = {
//     id: number
//     message: string
//
// }
// export type PostType = {
//     id: number
//     message: string
//     likesCount: number
// }
// export type ProfilePageType = {
//     posts: Array<PostType>
//     messageForNewText: string
// }
//
//
// export type DialogPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageBody: string
//
// }
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogPageType
// }
//
// export type StoreType = {
//     _state: RootStateType
//     changeNewPostText: (newText: string) => void
//     changeMessageBody: (body: string) => void
//     addPost: (newPost: string) => void
//     _callSubscriber: (observer: any) => void
//     subscribe: (callBack: (state: StoreType) => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }
//
//
//
// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'hi jija', likesCount: 12},
//                 {id: 2, message: 'bb jija', likesCount: 11},
//                 {id: 3, message: 'bye jija', likesCount: 14},
//                 {id: 4, message: 'oo jija', likesCount: 15},
//             ],
//             messageForNewText: '',
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, message: 'Dimych'},
//                 {id: 2, message: 'Linklenia'},
//                 {id: 3, message: 'Sveta'},
//                 {id: 4, message: 'JijaBass'},
//                 {id: 5, message: 'Artem'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'Bye'},
//                 {id: 3, message: 'Helloy'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'gg'},
//             ],
//             newMessageBody: ''
//         },
//     },
//     _callSubscriber() {
//         console.log('hello')
//     },
//
//     changeNewPostText(newTextPost: string) {
//         this._state.profilePage.messageForNewText = newTextPost
//         this._callSubscriber(this._state)
//     },
//
//     changeMessageBody(newTextMessage: string) {
//         this._state.dialogsPage.newMessageBody = newTextMessage
//         this._callSubscriber(this._state)
//     },
//
//
//     addPost(postText: string) {
//         let newPost: PostType = {
//             id: 6,
//             message: postText,
//             likesCount: 0,
//         }
//         this._state.profilePage.posts.push(newPost)
//         this._state.profilePage.messageForNewText = ''
//         this._callSubscriber(this._state)
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//         this._state.profilePage = usersReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber(this._state)
//     }
// }
// //Action Creators -------------------------------------------------
//
// export type ActionsTypes = ReturnType<typeof addPostAC> |
//     ReturnType<typeof changeNewTextAC> |
//     ReturnType<typeof updateNewMessageBodyAC> |
//     ReturnType<typeof sendMessageAC>
// //Action Creators -------------------------------------------------
//
// export default store
//
//
//
//
//
//
//
//
//
//
//
//
//
