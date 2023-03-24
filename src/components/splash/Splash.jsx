import React from "react";
import maina_icon from "../../assets/main_icon.svg";
import 'animate.css';
import { useNavigate } from "react-router-dom";

const Splash = () => {

    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/slide")
    }, 3000);

    return (
        <section className="splash">
            <figure>
                <img src={maina_icon} alt="logo app" />
            </figure>
        </section>
    )
}

export default Splash