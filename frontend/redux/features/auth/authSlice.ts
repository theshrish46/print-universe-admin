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
    role: Boolean;
    token: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    role: false,
    token: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string }>) => {
            state.isAuthenticated = true;
            state.role = true;
            state.token = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer