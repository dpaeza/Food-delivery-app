import { cartTypes } from "../types/userTypes";

export const addItemCart = (obj) => {
    return {
        type: cartTypes.ADD_ITEM,
        payload: obj,
    };
};

export const acctualizarCart = (array) => {
    return {
        type: cartTypes.UPDATE,
        payload: array,
    };
};

export const deleteItem = (idItem) => {
    return {
        type: cartTypes.DELETE_ITEM,
        payload: idItem,
    };
};
