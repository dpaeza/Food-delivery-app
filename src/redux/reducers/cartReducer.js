import { cartTypes } from "../types/userTypes";

const initialValue = {
    cart: [],
};

export const cartReducer = (state = initialValue, action) => {
    switch (action.type) {
        case cartTypes.ADD_ITEM:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state;
    }
};
