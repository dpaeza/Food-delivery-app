import { userTypes } from "../types/userTypes";
import { auth } from "../../firebase/firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
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

export const userRegisterAsync = ({
    name,
    email,
    password,
    phone,
    picture,
}) => {
    return async (dispatch) => {
        try {
            dispatch(toogleLoading());
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: name,
                phoneNumber: phone,
                photoURL: picture,
            });
            dispatch(userRegister({ name, email, error: false }));
            dispatch(toogleLoading());
        } catch (error) {
            dispatch(userRegister({ name, email, error: true }));
        }
    };
};

const userLoginEmail = (user) => {
    return {
        type: userTypes.LOGIN_USER_EMAIL_AND_PASSWORD,
        payload: user,
    };
};

export const userLoginEmailAsync = ({ email, password }) => {
    return async (dispatch) => {
        try {
            // signInWithEmailAndPassword metodo de Firebase que permite loguear
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            // Se ejecuta la funcion sincrona pasandole name, email y error en false
            dispatch(
                userLoginEmail({
                    name: user.user.displayName,
                    email: user.user.email,
                    error: false,
                })
            );
            console.log(user);
            console.log("llegue hasta aquí");
        } catch (error) {
            // Se ejecuta la funcion sincrona pasandole name, email y error en true
            dispatch(
                userLoginEmail({
                    name: "",
                    email: "",
                    error: true,
                })
            );
        }
    };
};

export const userLoginProvider = (provider) => {
    return async (dispatch) => {
        try {
            const { user } = await signInWithPopup(auth, provider);
            console.log(user)
            dispatch(
                userLoginEmail({
                    name: user.displayName,
                    email: user.email,
                    error: false,
                })
            );
        } catch (error) {
            dispatch(
                userLoginEmail({
                    name: "",
                    email: "",
                    error: true,
                })
            );
            console.log(error);
        }
    };
};
