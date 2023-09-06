import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./features/auth/authReducers";

const rootReducer = combineReducers({
    auth: authReducers
})

export default rootReducer