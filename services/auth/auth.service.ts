import { axiosClassic } from "@/api/api.onterceper"
import { IAuthResponse, IEmailPassword, IRegister } from "@/types/user.types"
import { saveToStoraga } from "./auth.helper"
import Cookies from 'js-cookie'

export const AuthService = {
    
    async login(data : IEmailPassword ) {
        const response = await axiosClassic<IAuthResponse>({
            url: '/auth/login',
            method: 'POST',
            data
        })

        if(response.data) {
            saveToStoraga(response.data)
            localStorage.setItem('count', '2')
        }

        return response.data
    },

    async register(data : IRegister) {
        const response = await axiosClassic<IAuthResponse>({
            url: '/auth/register',
            method: 'POST',
            data
        })

        if(response.data) {
            saveToStoraga(response.data)
            localStorage.setItem('count', '2')
        }

        return response
    },

    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken')

        const response = await axiosClassic<string, {data : IAuthResponse}>({
            url: '/auth/tokens',
            method: 'POST',
            data: {refreshToken} 
        })

        if(response.data.accesToken) {
            saveToStoraga(response.data)
        }

        return response
    }

}