import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../../helpers/swithAlerts";
import { doLogoutAsync } from "../../redux/actions/userActions";
import Footer from "../Footer/Footer";

const Home = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(doLogoutAsync());
    }

    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user)
    }, []);

    return (
        <>
            <h1>HOME</h1>
            <button onClick={handleLogout}>Logout</button>
            <Footer />
        </>
    );
}

export default Home