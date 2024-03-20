import { IAddCartPayload, ICartInitialState } from "@/types/cart.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState : ICartInitialState = {
    items : [],
    visible : false,
    comVis: false
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action : PayloadAction<any>) {
            const isColor = state.items.some(item => 
                item.product?.id === action.payload.product?.id
            )

            const isText = state.items.some(item => 
                item.text === action.payload.text
            )

            if(!isText) {
                state.items.push({...action.payload, id: state.items.length})
            }
        },

        removeFromCart(state, action : PayloadAction<{slug : string | undefined, text : string}>) {
            state.items = state.items.filter((item) => item.text !== action.payload.text)
        },

        changeQuantity(state, action : PayloadAction<{slug : string, type : 'plus' | 'minus', text : string}>) {
            const {slug, type, text} = action.payload
            const item = state.items.find(item => item.text === text)

            if(item) {
                type === 'plus' ? item.quantity && item.quantity++ : item.quantity && item.quantity--
            }
        },

        resetCart(state) {
            state.items = []
        },
        
        setVisible(state, action : PayloadAction<{visible : boolean}>) {
            if(action.payload.visible) {
                state.visible = false
            } else {
                state.visible = true
            }
        },
        setComVis(state, action : PayloadAction<{visible : boolean}>) {
            if(action.payload.visible) {
                state.visible = false
            } else {
                state.visible = true
            }
        }
    }
})

export default CartSlice.reducer
export const {addToCart, removeFromCart, changeQuantity, resetCart, setVisible, setComVis} = CartSlice.actions