import { createSlice } from "@reduxjs/toolkit";

interface II {
    orders : number
}

const initialState : II= {
    orders: 0
}

const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addNewOrder(state) {
            state.orders += 1
        }
    }
})

export default OrderSlice.reducer
export const {addNewOrder} = OrderSlice.actions