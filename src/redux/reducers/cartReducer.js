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
        case cartTypes.UPDATE:
            return {
                cart: action.payload,
            };
        case cartTypes.DELETE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(
                    (elemento) => elemento.id_item !== action.payload
                ),
            };
        default:
            return state;
    }
};
