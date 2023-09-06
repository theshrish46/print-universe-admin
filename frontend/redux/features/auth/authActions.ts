import { createAction, createSlice } from '@reduxjs/toolkit'

export const userLoggedIn = createAction<boolean>('user/loggedin')

export const openCreateStoreModal = createAction<void>('modal/open')

export const closeStoreModal = createAction<void>('modal/close')