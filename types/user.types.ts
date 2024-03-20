import { ICartItem } from "./cartitem.types"
import { IOrder } from "./order.types"
import { IProduct } from "./product.types"
import { IReview } from "./rewiew.types"

export interface IUser {
    id : number
    email : string
    name : string
    phone : string
    avatarPath : string
}

export interface IFullUser extends IUser {
    favorites : IProduct[]
    Orders : IOrder[]
    Rewiews : IReview[]
    Carts : ICartItem[]
}

export interface IEmailPassword {
    password : string
    email : string
}

export interface IRegister {
    password : string
    email : string
    phone : string
    name : string
}



export interface IUserState {
    email : string
    isAdmin : boolean
}

export interface Itokens {
    accesToken : string
    refreshToken : string
}

export interface IInitialState {
    user : IUser | null
    isLoading : boolean
}

export interface IAuthResponse extends Itokens {
    user : IUser
}

export interface IUpdateProfile {
    email ?: string
    password ?: string
    name ?: string
    phone ?: string
    avatarPath ?: string
}