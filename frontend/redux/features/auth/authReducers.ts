import { createReducer } from "@reduxjs/toolkit";
import { userLoggedIn, openCreateStoreModal, closeStoreModal } from "./authActions";

const initialState = {
    loggedIn: false,
    createStoreModapOpen: false
}

const authReducers = createReducer(initialState, (builder) => {
    builder
        .addCase(userLoggedIn, (state, action) => {
            state.loggedIn = action.payload
        })
        .addCase(openCreateStoreModal, (state, action) => {
            state.createStoreModapOpen = true
        })
        .addCase(closeStoreModal, (state, action) => {
            state.createStoreModapOpen = false
        })
})

export default authReducers