import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "97fd295a-1d0c-4a0a-94e5-e3b42d6c69d5"
    }
})

export const usersAPI = {
    getUsers (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)},
    getAuth ()  {
        return instance.get(`auth/me`,)
    },
    getProfileUser  (userId)  {
        console.warn('this method old')
        return profileAPI.getProfileUser(userId)
    },
    deleteFollowing  (userId)  {
        return instance.delete(`follow/${userId}`)
    },
    postFollowing  (userId)  {
        return instance.post(`follow/${userId}` )
    },
}


export const profileAPI = {
    getProfileUser  (userId)  {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status:status})
    },
    savePhoto (file) {
        let formData = new FormData()
        formData.append("image" ,file)
        return instance.put(`profile/photo`, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },
    saveProfile (profile) {
        return instance.put(`profile`, profile)
    },
}

export const authApi = {
    login (email,password,rememberMe = false, captcha = null) {
        return instance.post('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logout () {
        return instance.delete('auth/login')
    }
}

export const securityApi = {
    getCaptcha () {
        return instance.post('security/get-captcha-url', )
    },

}