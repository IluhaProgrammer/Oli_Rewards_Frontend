import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TC {
    theme : 'black' | 'white'
}

const initialState : TC = {
    theme: 'white'
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, action : PayloadAction<{theme : 'white' | 'black'}>) {
            state.theme = action.payload.theme
        }
    }
})

export default ThemeSlice.reducer
export const { changeTheme } = ThemeSlice.actions