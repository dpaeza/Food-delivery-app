import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./components/splash/Splash.jsx";
import Slide from "./components/slide/Slide.jsx";
import SignIn from "./components/singIn/SignIn.jsx";
import Verification from "./components/verification/Verification.jsx";
import CreateAcount from "./components/createAcount/CreateAcount.jsx";
import Location from "./components/location/Location";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Orders from "./components/orders/Orders";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/slide" element={<Slide />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="/create_acount" element={<CreateAcount />} />
        <Route path="/location" element={<Location />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;