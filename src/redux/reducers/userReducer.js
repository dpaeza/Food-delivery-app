import { userTypes } from "../types/userTypes";

const initialState = {
    name: "",
    email: "",
    error: false,
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
        case userTypes.LOGIN_USER_EMAIL_AND_PASSWORD:
            return {
                ...action.payload
            };
        default:
            return initialState;
    }
};
