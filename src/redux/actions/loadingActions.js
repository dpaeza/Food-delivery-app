import { loadingTypes } from "../types/userTypes";

export const toogleLoading = (value = false) => {
    return {
        type: loadingTypes.TOGGLE_LOADING,
        payload: value,
    };
};
