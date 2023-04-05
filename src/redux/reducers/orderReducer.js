import { orderTypes } from "../types/userTypes";

const initialValue = {
    orders: [],
};

export const orderReducer = (state = initialValue, action) => {
    switch (action.type) {
        case orderTypes.GET_ORDERS:
            return {
                orders: action.payload,
            };
        case orderTypes.CREATE_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload],
            };
        default:
            return state;
    }
};
