import { cartTypes } from "../types/userTypes";

export const addItemCart = (obj) => {
    return {
        type: cartTypes.ADD_ITEM,
        payload: obj,
    };
};
