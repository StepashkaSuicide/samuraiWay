export type UsersReducerType  = ReturnType<typeof followAC>
|  ReturnType<typeof unfollowAC>
|  ReturnType<typeof setUsersAC>
|  ReturnType<typeof setCurrentPageAC>
|  ReturnType<typeof setTotalUsersCountAC>
|  ReturnType<typeof onPageChangedAC>
|  ReturnType<typeof isFetchingAC>

export const followAC = (userID: string) => {
    return {type: 'follow', userID} as const
}
export const unfollowAC = (userID: string) => {
    return {type: 'unfollow', userID} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: 'set_users', users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'set_current_page', currentPage} as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: 'set_total_users_count', totalCount} as const
}
export const onPageChangedAC = (pageNumber: number) => {
    return {type: 'on_page_changed', pageNumber} as const
}
export const isFetchingAC = (isFetching: boolean) => {
    return {type: 'toggle_is_fetching', isFetching} as const
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
    isFetching: boolean

    // location: LocationType
}

export type UsersType = {
    users: Array<UserType>
}

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 33,
    currentPage: 1,
    isFetching: false


}


export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerType): InitialStateType => {
    switch (action.type) {
        case 'follow':
            return {
                ...state,
                users: state.users.map(t => t.id === action.userID ? {...t, followed: false} : t)
            }
        case 'unfollow':
            return {
                ...state,
                users: state.users.map(t => t.id === action.userID ? {...t, followed: true} : t)
            }
        case 'set_users':
            return {
                ...state, users: action.users
            }
        case 'set_current_page':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'set_total_users_count':
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case 'on_page_changed':
            return {
                ...state, currentPage: action.pageNumber
            }
        case 'toggle_is_fetching':
            return  {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}