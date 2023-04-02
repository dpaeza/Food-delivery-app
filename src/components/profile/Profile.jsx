import React from "react";
import { useDispatch } from "react-redux";
import { doLogoutAsync } from "../../redux/actions/userActions";

const Profile = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(doLogoutAsync());
    };

    return (
        <section>
            <button onClick={handleLogout}>Logout</button>
        </section>
    );
};

export default Profile;
