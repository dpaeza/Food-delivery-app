import { userTypes } from "../types/userTypes";
import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toogleLoading } from "./loadingActions";

const userRegister = ({ nombre, email, error }) => {
    return {
        type: userTypes.CREATE_USER,
        payload: {
            nombre,
            email,
            error,
        },
    };
};

export const userRegisterAsync = ({ name, email, password }) => {
    return async (dispatch) => {
        try {
            dispatch(toogleLoading());
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName: name });
            dispatch(userRegister({ name, email, error: false }));
            dispatch(toogleLoading())
        } catch (error) {
            dispatch(userRegister({ name, email, error: true }));
        }
    };
};
