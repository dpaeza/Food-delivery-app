import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "../reducers/loadingReducer";
import { userReducer } from "../reducers/userReducer";

const reducer = {
    user: userReducer,
    loadingCreateAccount: loadingReducer
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store