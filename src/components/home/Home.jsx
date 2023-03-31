import React from "react";
import { useDispatch } from "react-redux";
import { doLogoutAsync } from "../../redux/actions/userActions";

const Home = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(doLogoutAsync());
    }

    return (
        <>
            <h1>HOME</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Home