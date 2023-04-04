import { restaurantTypes } from "../types/userTypes";

const initialValue = {
    restaurants: []
};

export const restaurantsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case restaurantTypes.GET_RESTAURANTS:
            return {
                // ...state,
                restaurants: action.payload,
            };
        default:
            return state;
    }
};