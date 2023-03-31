import { userTypes } from "../types/userTypes";

const initialState = {
    name: "",
    email: "",
    error: false,
    isLogged: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.CREATE_USER:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                error: action.payload.error,
            };
        case userTypes.TOGGLE_LOGIN:
            return {
                ...state,
                isLogged: !state.isLogged,
            };
        case userTypes.LOGIN_USER_EMAIL_AND_PASSWORD:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                error: action.payload.error,
                isLogged: action.payload.isLogged
            };
        case userTypes.DO_LOGOUT:
            return {
                initialState,
            };
        default:
            return initialState;
    }
};
