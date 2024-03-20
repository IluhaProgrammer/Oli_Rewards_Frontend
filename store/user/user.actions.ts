import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthRes } from "./user.interface";
import { IAuthResponse, IEmailPassword, IRegister, IUser } from "@/types/user.types";
import { AuthService } from "@/services/auth/auth.service";
import { removeTokensStorage } from "@/services/auth/auth.helper";
import { errorCatch } from "@/api/api.helper";
import { TypeData, UserService } from "@/services/auth/user.service";
import { useRouter } from "next/navigation";
import { resetCart } from "../cart/cart.slice";

/* register */

export const register = createAsyncThunk<IAuthRes, IRegister>('auth/register', async (data, thunkApi) => {
    try {
        const response = await AuthService.register(data)
        localStorage.setItem('count', '2')
        return response.data
    } catch(e) {
        return thunkApi.rejectWithValue(e)
    }
}) 

/* login */

export const login = createAsyncThunk<IAuthRes, IEmailPassword>('auth/login', async (data, thunkApi) => {
    try {
        const response = await AuthService.login(data)
        localStorage.setItem('count', '2')
        return response
    } catch(e) {
        return thunkApi.rejectWithValue(e)
    }
})

/* logout */

export const logout = createAsyncThunk('auth/logout', async () => {
    removeTokensStorage()
    resetCart()
})

/* getNewTokens and check-auth*/

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkApi) => {
    try {
        const response = await AuthService.getNewTokens()
        return response.data
    } catch(e) {
        if(errorCatch(e) === 'jwt expired') {
            thunkApi.dispatch(logout)
        }

        return thunkApi.rejectWithValue(e)
    }
})
