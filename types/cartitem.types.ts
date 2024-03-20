import { IProduct } from "./product.types"

export interface ICartItem {
    id : number
    price : number
    quantity : number
    product : IProduct 
    productId : string
    color : string
    script : string
    text : string
    name : string
}   