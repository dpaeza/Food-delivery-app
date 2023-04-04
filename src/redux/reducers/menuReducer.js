import { menuTypes } from "../types/userTypes";

const initialValue = {
    menu: [],
};

export const menuReducer = (state = initialValue, action) => {
    switch (action.type) {
        case menuTypes.GET_MENU:
            return {
                // ...state,
                menu: action.payload,
            };
        default:
            return state;
    }
};