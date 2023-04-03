import { filterCollection } from "../../services/filterCollection";
import { restaurantTypes } from "../types/userTypes";

const getRestaurants = (array) => {
    return {
        type: restaurantTypes.GET_RESTAURANTS,
        payload: array,
    };
};

export const getRestaurantsAsync = () => {
    return async (dispatch) => {
        try {
            const restaurants = await filterCollection({
                key: "",
                value: '',
                collectionName: "restaurants",
            });
            console.log(restaurants)
            dispatch(getRestaurants(restaurants));
        } catch (error) {
            console.log(error);
            // dispatch(getRestaurants([]));
        }
    };
};