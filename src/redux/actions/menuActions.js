import { filterCollection } from "../../services/filterCollection";
import { menuTypes } from "../types/userTypes";


const getMenu = (array) => {
    return {
        type: menuTypes.GET_MENU,
        payload: array,
    };
};

export const getMenuAsync = (data) => {
    return async (dispatch) => {
        try {
            const menuRestaurant = await filterCollection({
                key: data.key,
                value: data.value,
                collectionName: "menu",
            });
            console.log(menuRestaurant);
            dispatch(getMenu(menuRestaurant));
        } catch (error) {
            console.log(error);
        }
    };
};
