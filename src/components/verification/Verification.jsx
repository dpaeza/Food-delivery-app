import React, { useEffect } from "react";
import logo from "../../assets/main_icon.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Verification = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    //Use effect para redirija al usuario a home si ya está loggueado
    useEffect(() => {
        if (user.isLogged) {
            navigate("/home");
        }
    }, [user.isLogged]);

    return (
        <section className="login">
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <h1>Verification</h1>
            <p className="login__p">
                Enter the four-digit code from SMS SMS not received.
                <span className="verification__sendAgain"> Send again?</span>
            </p>
            <form className="verification__form">
                <input type="number" />
                <button>Validate</button>
            </form>
        </section>
    );
}

export default Verification