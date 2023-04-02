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
import { filterCollection } from "../../services/filterCollection";

const userRegister = (obj) => {
    return {
        type: userTypes.CREATE_USER,
        payload: obj,
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
            //Ejecutar la funcion sincrona
            dispatch(toogleLoading());
            dispatch(
                userRegister({
                    ...newUser,
                    error: false,
                    isLogged: true,
                    register: true,
                })
            );
        } catch (error) {
            dispatch(
                userRegister({
                    name,
                    email,
                    error: true,
                    isLogged: false,
                    register: false,
                })
            );
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
            const { user } = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            // Obtener el documento del usurio en la coleccion users con su info
            const userCollection = await filterCollection({
                key: "uid",
                value: user.uid,
                collectionName: "users",
            });
            // Se ejecuta la funcion sincrona pasandole name, email y error en false
            dispatch(
                userLoginEmail({
                    ...userCollection[0],
                    error: false,
                    isLogged: true,
                })
            );
        } catch (error) {
            // Se ejecuta la funcion sincrona pasandole name, email y error en true
            dispatch(
                userLoginEmail({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    address: "",
                    birthday: "",
                    photoURL: "",
                    userType: "",
                    uid: "",
                    error: true,
                    isLogged: false,
                })
            );
            showAlert({
                icon: "error",
                text: "Ops, there was an error processing your request try agaian",
            });
        }
    };
};

export const userLoginProvider = (provider) => {
    return async (dispatch) => {
        try {
            const { user } = await signInWithPopup(auth, provider);
            console.log(user);
            const userCollection = await filterCollection({
                key: "uid",
                value: user.uid,
                collectionName: "users",
            });
            if (userCollection.length == 0) {
                dispatch(
                    userLoginEmail({
                        uid: user.uid,
                        error: false,
                        isLogged: true,
                        register: false,
                    })
                );
            } else {
                dispatch(
                    userLoginEmail({
                        ...userCollection[0],
                        error: false,
                        isLogged: true,
                        register: true,
                    })
                );
            }
        } catch (error) {
            dispatch(
                userLoginEmail({
                    name: "",
                    email: "",
                    error: true,
                    isLogged: false,
                })
            );
            showAlert({
                icon: "error",
                text: "Ops, there was an error processing your request try agaian",
            });
        }
    };
};

const doLogout = () => {
    return {
        type: userTypes.DO_LOGOUT,
    };
};

export const doLogoutAsync = () => {
    return async (dispatch) => {
        try {
            await signOut(auth);
            dispatch(doLogout());
        } catch (error) {
            dispatch(doLogout());
            showAlert({
                icon: "error",
                text: "Ops, there was an error processing your request try agaian",
            });
        }
    };
};
