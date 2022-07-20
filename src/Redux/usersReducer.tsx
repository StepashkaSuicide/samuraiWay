import {ActionsTypes} from './reduxStore';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followAC = (userID: string) => {
    return {type: FOLLOW, userID} as const
}
export const unfollowAC = (userID: string) => {
    return {type: UNFOLLOW, userID} as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {type: SET_USERS, users} as const
}


export type InitialStateType = typeof initialState

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

const initialState = {
    users: [] as Array<UsersType>
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                users: state.users.map(t => t.id === action.userID ? {...t, followed: false} : t)
            }
        case UNFOLLOW:
            return {
                users: state.users.map(t => t.id === action.userID ? {...t, followed: true} : t)
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}