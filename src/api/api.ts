import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': '938d5b70-0da7-4cf1-845c-1367ca037db0'
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

}


// export const getUsers =(currentPage: number, pageSize: number)=> {
//     return    instance.get(`users?page=${currentPage}&count=${pageSize}`,
//         {
//             withCredentials: true
//         })
//         .then(response => {
//             return response.data
//         })
// }
