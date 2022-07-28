import axios from "axios";

//
//
// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers: {
//         "API-KEY" : "97fd295a-1d0c-4a0a-94e5-e3b42d6c69d5"
//     }
// })

export const usersAPI = {
    getUsers (currentPage, pageSize)  {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials:true,
            })
    },
    getAuth ()  {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:  true,
        })
    },
    getProfileUser  (userId)  {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    },
    deleteFollowing  (userId)  {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,  {
            withCredentials:true,
            headers: {
                "API-KEY" : "97fd295a-1d0c-4a0a-94e5-e3b42d6c69d5"
            }
        })
    },
    postFollowing  (userId)  {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials:true,
            headers: {
                "API-KEY" : "97fd295a-1d0c-4a0a-94e5-e3b42d6c69d5"
            }
        })
    },
    getUsersPage  (page, pageSize)  {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`,{
            withCredentials: true,
        })
    }
}
