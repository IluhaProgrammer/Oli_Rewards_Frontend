import { createSlice } from "@reduxjs/toolkit";

interface iInit {
    count : number
}

const initialState : iInit = {
    count : 2
}

const CatalogSlice = createSlice({
    name: 'Catalog',
    initialState,
    reducers: {
        setCategory(state, {payload}) {
            state.count = payload
        }
    }
})

export default CatalogSlice
export const {setCategory} = CatalogSlice.actions