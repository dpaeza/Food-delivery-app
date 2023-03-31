import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/main_icon.svg";
import phone from "../../assets/phone.svg";
import googleIcon from "../../assets/google.svg";
import facebookIcon from "../../assets/facebook.svg";
import emailIcon from "../../assets/email.png";
import { useDispatch, useSelector } from "react-redux";
import { userLoginProvider } from "../../redux/actions/userActions";
import { google, facebook } from "../../firebase/firebaseConfig";
import { showAlert } from "../../helpers/swithAlerts";

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const sesionProvider = (provider) => {
        dispatch(userLoginProvider(provider));
    };

    //Borrar despues
    useEffect(() => {
        console.log(user)
    }, [user]);

    //Use effect para redirija al usuario a home si ya está loggueado
    useEffect(() => {
        if (user.isLogged) {
            navigate("/home");
        }
    }, [user.isLogged]);


    return (
        <section className="login">
            <figure>
                <img src={logo} alt="logo icon" />
            </figure>
            <h1>Login</h1>
            <section className="login__methos__container">
                <Link to="/loginNumber" className="loginPhone__Link">
                    <div className="login__phone">
                        <figure>
                            <img src={phone} alt="phone icon" />
                        </figure>
                        <span>Login with Phone number</span>
                    </div>
                </Link>
                <Link to="/loginEmail" className="loginPhone__Link">
                    <div className="login__email">
                        <figure>
                            <img src={emailIcon} alt="phone icon" />
                        </figure>
                        <span>Login with Email and password</span>
                    </div>
                </Link>
                <div
                    className="login__google"
                    onClick={() => sesionProvider(google)}
                >
                    <figure>
                        <img src={googleIcon} alt="google icon" />
                    </figure>
                    <span>Login with Google</span>
                </div>
                <div
                    className="login__facebook"
                    onClick={() => sesionProvider(facebook)}
                >
                    <figure>
                        <img src={facebookIcon} alt="facebook icon" />
                    </figure>
                    <span>Login with Facebook</span>
                </div>
            </section>
            <p className="login__p">
                You don't have an account?
                <Link className="createAccount__Link" to="/create_account">
                    Register with your email.
                </Link>
            </p>
            <div className="login__footerText">
                <p>By clicking the button next you accept</p>
                <p className="login__footerText__subrayado">Terms of use</p>
            </div>
        </section>
    );
};

export default Login;
