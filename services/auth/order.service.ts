import instance from "@/api/api.onterceper"
import { ICartItem } from "@/types/cartitem.types"
import { IOrder } from "@/types/order.types"

const ORDER = 'orders'

interface II {
    quantity : number
    price : number
    productId : number
    userId : number
    text : string
    script : string
    color : string
}

interface OrderTypeDto {
    status : 'PENDING' | 'PAYED' | 'SHIPPED' | 'DELIVERED'
    items : ICartItem[]
}

export const OrderService = {
    async getAll() {
        return instance<IOrder[]>({
            url: ORDER,
            method: 'GET'
        })
    },  

    async placeOrder(dto : OrderTypeDto) {
        return instance({
            url: `${ORDER}/new-order`,
            data: dto,
            method: 'POST'
        })
    }
}