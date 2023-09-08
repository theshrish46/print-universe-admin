'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

type User = {
    id: number;
    username: string;
    useremail: string
}

type AuthState = {
    isAuthenticated: boolean;
    token: string | null;
    user: User | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: localStorage.getItem('token') || null,
    user: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string; user: User }>) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer