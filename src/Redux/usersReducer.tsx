export type LocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: string | undefined
    large: string | undefined
}

export type UserType = {
    id: number
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


type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingInProgress: number[]
}

const initialState: InitialStateType = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 33,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],


}

export type UsersReducerType  = ReturnType<typeof follow>
    |  ReturnType<typeof unfollow>
    |  ReturnType<typeof setUsers>
    |  ReturnType<typeof setCurrentPage>
    |  ReturnType<typeof setTotalUsersCount>
    |  ReturnType<typeof onPageChanged>
    |  ReturnType<typeof toggleIsFetching>
    |  ReturnType<typeof toggleFollowingInProgress>

export const follow = (userID: number) => {
    return {type: 'follow', userID} as const
}
export const unfollow = (userID: number) => {
    return {type: 'unfollow', userID} as const
}
export const setUsers = (users: Array<UserType>) => {
    return {type: 'set_users', users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: 'set_current_page', currentPage} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: 'set_total_users_count', totalCount} as const
}
export const onPageChanged = (pageNumber: number) => {
    return {type: 'on_page_changed', pageNumber} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'toggle_is_fetching', isFetching} as const
}
export const toggleFollowingInProgress = (followingInProgress: boolean, userId: number) => {
    return {type: 'following_progress', followingInProgress, userId} as const
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerType): InitialStateType => {
    switch (action.type) {
        case 'follow':
            return {
                ...state,
                users: state.users.map(t => t.id === action.userID ? {...t, followed: true} : t)
            }
        case 'unfollow':
            return {
                ...state,
                users: state.users.map(t => t.id === action.userID ? {...t, followed: false} : t)
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
        case 'following_progress':
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ?[...state.followingInProgress, action.userId]
                    :state.followingInProgress.filter(id=>id != action.userId)
            }
        default:
            return state
    }
}