'use client'
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

import authReducers from './features/auth/authSlice'

const persistConfig = {
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    auth: authReducers
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true
})

export const persitsor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch