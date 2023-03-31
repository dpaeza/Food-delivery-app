import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { isLogged } = useSelector((store) => store.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogged) {
            navigate("/login");
        }
    }, [isLogged]);

    return <>{isLogged ? children : <></>}</>;
};

export default PrivateRoutes;
