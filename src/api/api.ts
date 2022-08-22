import axios from 'axios';
import {ResponseStatusType, UserProfileResponseType} from '../Redux/profileReducer';
import { UsersResponseApiType } from '../Redux/usersReducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': '015686a1-cd62-43db-84a7-db79cd151260'
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponseApiType>(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post<ResponseStatusType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseStatusType>(`follow/${userId}`)
    },
}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<UserProfileResponseType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`)
    },

    updateStatus(status: string) {
        return instance.put<ResponseStatusType>(`/profile/status`, {status})
    },
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}
