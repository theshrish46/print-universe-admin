'use client'
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducers from './features/auth/authSlice'


const rootReducer = combineReducers({
    auth: authReducers
})


export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch