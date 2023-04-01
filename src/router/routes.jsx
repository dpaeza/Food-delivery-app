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

const RouterDom = () => {
    const dispatch = useDispatch();
    const userG = useSelector((state) => state.user);

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         console.log(user);
    //         if (user?.uid) {
    //             dispatch(
    //                 userLoginEmail({
    //                     name: user.displayName,
    //                     email: user.email,
    //                     error: false,
    //                     isLogged: true,
    //                 })
    //             );
    //         }
    //     });
    // }, []);

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
                <Route path="/search" element={<Search />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterDom;
