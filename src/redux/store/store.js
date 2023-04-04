import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "../reducers/loadingReducer";
import { userReducer } from "../reducers/userReducer";
import { restaurantsReducer } from "../reducers/restaurantsReducer";
import { menuReducer } from "../reducers/menuReducer";

const reducer = {
    user: userReducer,
    loadingCreateAccount: loadingReducer,
    restaurants: restaurantsReducer,
    menu: menuReducer
};

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store