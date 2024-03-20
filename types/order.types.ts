import { ICartItem } from "./cartitem.types"
import { IUser } from "./user.types"

export enum EnumStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED'
}

export interface IOrder {
    id : number
    createdAt : string
    orderItems : ICartItem[]
    status : EnumStatus
    user : IUser
}