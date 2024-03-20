import { ICartItem } from "./cartitem.types"

export interface ISendMail {
    email : string
    fullName : string
    address : string
    phone : string
    deliver : string
    payment : string
    totalPrice : number
    cartProducts : ICartItem[]
}