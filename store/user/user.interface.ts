import { IUser } from "@/types/user.types";

export interface IUserState {
    email : string,
    isAdmin : boolean
}

export interface ITokens {
    accesToken : string
    refreshToken : string
}

export interface IInitialState {
    user : IUser | null
    isLoading : boolean
    message : string | null
    errPassword : string 
    editmes : string | null
}

export interface IAuthRes extends ITokens {
    user : IUser
}