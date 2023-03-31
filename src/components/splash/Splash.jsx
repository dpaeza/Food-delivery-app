import React, { useEffect } from "react";
import maina_icon from "../../assets/main_icon.svg";
import 'animate.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Splash = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    setTimeout(() => {
        navigate("/slide");
    }, 3000);

    //Use effect para redirija al usuario a home si ya está loggueado
    useEffect(() => {
        if (user.isLogged) {
            navigate("/home");
        }
    }, [user.isLogged]);

    return (
        <section className="splash">
            <figure>
                <img src={maina_icon} alt="logo app" />
            </figure>
        </section>
    );
}

export default Splash