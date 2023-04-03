import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../components/splash/Splash.jsx";
import Slide from "../components/slide/Slide.jsx";
import Login from "../components/login/Login.jsx";
import LoginNumber from "../components/loginNumber/LoginNumber.jsx";
import Verification from "../components/verification/Verification.jsx";
import CreateAccount from "../components/createAccount/CreateAccount.jsx";
import Location from "../components/location/Location.jsx";
import Home from "../components/home/Home.jsx";
import Search from "../components/search/Search.jsx";
import Orders from "../components/orders/Orders.jsx";
import Profile from "../components/profile/Profile.jsx";
import LoginEmail from "../components/loginEmail/LoginEmail.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.js";
import { useDispatch, useSelector } from "react-redux";
import { userLoginEmail } from "../redux/actions/userActions.js";
import PrivateRoutes from "./PrivateRoutes.jsx";
import { filterCollection } from "../services/filterCollection.js";

const RouterDom = () => {
    const dispatch = useDispatch();
    const userG = useSelector((state) => state.user);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            console.log(user);
            if (user?.uid) {
                const userCollection = await filterCollection({
                    key: "uid",
                    value: user.uid,
                    collectionName: "users",
                });
                console.log(userCollection);
                if (userCollection.length == 0) {
                    console.log('entre al borrado');
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
                            uid: user.uid,
                            error: false,
                            isLogged: true,
                            register: false,
                        })
                    );
                } else {
                    console.log("entre al no borrado");
                    dispatch(
                        userLoginEmail({
                            ...userCollection[0],
                            error: false,
                            isLogged: true,
                            register: true,
                        })
                    );
                }
            }
            // if (user?.uid && userG.register && userG.address != '') {
            //     dispatch(
            //         userLoginEmail({
            //             error: false,
            //             isLogged: true,
            //             register: true,
            //         })
            //     );
            // }
            // if (user?.uid && !userG.register) {
            //     dispatch(
            //         userLoginEmail({
            //             error: false,
            //             isLogged: true,
            //             register: false,
            //         })
            //     );
            // }
        });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/slide" element={<Slide />} />
                <Route path="/login" element={<Login />} />
                <Route path="/loginNumber" element={<LoginNumber />} />
                <Route path="/loginEmail" element={<LoginEmail />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="/create_account" element={<CreateAccount />} />
                <Route path="/location" element={<Location />} />
                <Route
                    path="/home"
                    element={
                        <PrivateRoutes>
                            <Home />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <PrivateRoutes>
                            <Search />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/orders"
                    element={
                        <PrivateRoutes>
                            <Orders />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoutes>
                            <Profile />
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterDom;
