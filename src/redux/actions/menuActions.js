import { filterCollection } from "../../services/filterCollection";
import { menuTypes } from "../types/userTypes";


const getMenu = (array) => {
    return {
        type: menuTypes.GET_MENU,
        payload: array,
    };
};

export const getMenuAsync = (id) => {
    return async (dispatch) => {
        try {
            const menuRestaurant = await filterCollection({
                key: "id_restaurant",
                value: id,
                collectionName: "menu",
            });
            console.log(menuRestaurant);
            dispatch(getMenu(menuRestaurant));
        } catch (error) {
            console.log(error);
        }
    };
};
