import { ICartItem } from "./cartitem.types";

export interface ICartInitialState {
    items: ICartItem[]
    visible : boolean
    comVis: boolean
}

export interface IAddCartPayload extends Omit<ICartItem, 'id'> {
    text : string
    script : string
    color : string
    name : string
}

export interface IChangeQuantity extends Pick<ICartItem, 'id'> {
    type: 'minus' | 'plus'
}