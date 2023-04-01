import { userTypes } from "../types/userTypes";
import { auth, dataBase } from "../../firebase/firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { toogleLoading } from "./loadingActions";
import { addDoc, collection, getDoc, query, where } from "firebase/firestore";
import { showAlert } from "../../helpers/swithAlerts";

const userRegister = (obj) => {
    return {
        type: userTypes.CREATE_USER,
        payload: obj
    };
};

export const userRegisterAsync = ({
    name,
    email,
    password,
    prefi,
    phone,
    city,
    address,
    birthday,
    picture,
}) => {
    return async (dispatch) => {
        try {
            dispatch(toogleLoading());
            //Crear usuario en firebase
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            //actualizar datos del usuario creado en firebase
            updateProfile(auth.currentUser, {
                displayName: name,
                phoneNumber: prefi + phone,
                photoURL: picture,
            });
            //crear el objeto newUser para subirlo a la coleccion de usuarios
            const newUser = {
                name: name,
                email: user.email,
                phone: prefi + phone,
                city: city,
                address: address,
                birthday: birthday,
                photoURL: picture,
                userType: "client",
                uid: user.uid,
            };
            //Agregar usario(newUser) a la coleccion users
            const userDoc = await addDoc(
                collection(dataBase, "users"),
                newUser
            );
            console.log(userDoc)
            //Ejecutar la funcion sincrona
            dispatch(toogleLoading());
            dispatch(userRegister({ ...newUser, error: false }));
            
        } catch (error) {
            dispatch(userRegister({ name, email, error: true }));
            showAlert({
                icon: "error",
                text: "There was an error processing the request, verify that you do not have an account registered with this email or try again",
            });
            dispatch(toogleLoading());
        }
    };
};

// const toggleLogin = () => {
//     return {
//         type: userTypes.TOGGLE_LOGIN,
//     };
// };

export const userLoginEmail = (user) => {
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
                    isLogged: true
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
                    isLogged: false
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
                    isLogged: true
                })
            );
            console.log("llegue hasta aquí");
        } catch (error) {
            dispatch(
                userLoginEmail({
                    name: "",
                    email: "",
                    error: true,
                    isLogged: false
                })
            );
            console.log(error);
        }
    };
};

const doLogout = () => {
    return {
        type: userTypes.DO_LOGOUT
    }
}

export const doLogoutAsync = () => {
    return async (dispatch) => {
        try {
            await signOut(auth);
            dispatch(doLogout());
        } catch (error) {
            dispatch(doLogout());
        }
    }
};
