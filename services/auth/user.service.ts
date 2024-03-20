
import instance from "@/api/api.onterceper"
import { IProduct } from "@/types/product.types"
import { IFullUser, IUser } from "@/types/user.types"

const USER = 'user'
const CART = 'cart'

export type TypeData = {
    email ?: string
    name ?: string
    password ?: string
    avatarPath ?: string
    phone ?: string
}

export type CartDto = {
    prodSlug : string
    color : string
    text : string
    script : string
    quantity : number
    price : number
    name : string
    slug : string
    images : string[]
}

export const UserService = {

    async getProfile() {
        return instance<IFullUser>({
            url: `${USER}/profile`,
            method: 'GET'
        })
    },

    async updateProfile(data : TypeData) {
        return instance<IUser>({
            url: `${USER}/update-profile`,
            method: 'PUT',
            data
        })
    },

    async toggleFavorites(productId : string | number) {
        return instance<{message : string}>({
            url: `${USER}/profile/favorites/${productId}`,
            method: 'PATCH'
        })
    }

}