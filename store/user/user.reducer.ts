import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./user.interface";
import { getLocalStorage } from "./user.utils";
import { register,login, checkAuth, logout } from "./user.actions";

const initialState : IInitialState = {
    user: getLocalStorage('user'),
    isLoading: false,
    message : '',
    errPassword : '',
    editmes : ''
}

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
                state.message = ''
            })

            .addCase(register.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
                state.message = ''
            })

            .addCase(register.rejected, (state) => {
                state.isLoading = false
                state.message = 'User с таким email или именем уже есть'
            })

            .addCase(login.pending, (state) => {
                console.log('Идет загрузка')
                state.isLoading = true
                state.errPassword = ''
            })

            .addCase(login.fulfilled, (state, {payload}) => {
                console.log('Успешный вход')
                state.isLoading = false
                state.user = payload.user
                state.errPassword = ''
            })

            .addCase(login.rejected, (state) => {
                console.log('Произошла внеплановая ошибка')
                state.isLoading = false
                state.user = null
                state.errPassword = 'Неверный пароль или почта'
            })

            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false
                state.user = null
            })

            .addCase(checkAuth.fulfilled, (state, {payload}) => {
                state.user = payload.user
            })
    }
})

export default UserSlice.reducer