import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import UserSlice from "./user/user.reducer";
import  CartSlice  from "./cart/cart.slice";
import storage from "@/assets/utils/storage";
import CatalogSlice from "./catalog/Catalog.slice";
import ScriptSlice from "./scripts/ScriptSlice";
import ThemeSlice from "./theme/ThemeSlice";
import orderSlice from "./orders/order.slice";

const persistConfig = {
    key: 'OLI Rewards',
    storage,
    whitelist: ['cart'],
    version : 1.0
}

const rootReducer = combineReducers({
    user: UserSlice,
    cart: CartSlice,
    category: CatalogSlice.reducer,
    script : ScriptSlice,
    theme: ThemeSlice,
    order: orderSlice
})

const persistReducers = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
            }
        })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch