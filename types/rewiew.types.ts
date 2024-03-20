import { IUser } from "./user.types"

export interface IReview {
    id : number
    user : IUser
    createdAt : string
    text : string
    raiting : number
    order : string
}

export interface IReviewCreate {
    raiting : number
    text : string
    order : string
}