import {ActionsTypes} from './reduxStore';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export const followAC = (userID: string) => {
    return {type: FOLLOW, userID} as const
}
export const unfollowAC = (userID: string) => {
    return {type: UNFOLLOW, userID} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount} as const
}


export type InitialStateType = typeof initialState

export type LocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: string | undefined
    large: string | undefined
}

export type UserType = {
    id: string
    name: string
    status: string
    photos: PhotosType
    followed: boolean
    // location: LocationType
}

export type UsersType = {
    users: Array<UserType>
}

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 33,
    currentPage: 2,

}


export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(t => t.id === action.userID ? {...t, followed: false} : t)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(t => t.id === action.userID ? {...t, followed: true} : t)
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        default:
            return state
    }
}