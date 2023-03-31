import React, { useEffect } from "react";
import logo from "../../assets/main_icon.svg";
import phoneGrey from "../../assets/phone_grey.svg"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginNumber = () => {

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
            <h1>Login</h1>
            <p className="login__p">
                Login or create an account with your phone number to start
                ordering
            </p>
            <form className="loginNumber__form">
                <div>
                    <figure>
                        <img src={phoneGrey} alt="phone icon" />
                    </figure>
                    <p>+</p>
                    <input type="number" />
                </div>

                <button>Login</button>
            </form>
        </section>
    );
}

export default LoginNumber