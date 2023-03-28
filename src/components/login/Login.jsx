import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/main_icon.svg";
import phone from "../../assets/phone.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import emailIcon from "../../assets/email.png";

const Login = () => {
    return (
        <section className="login">
            <figure>
                <img src={logo} alt="logo icon" />
            </figure>
            <h1>Login</h1>
            <p className="login__p">
                Login with your phone number, Google or Facebook or
                <Link className="createAccount__Link" to="/create_account">
                    create an account.
                </Link>
            </p>
            <section className="login__methos__container">
                <Link to="/loginNumber" className="loginPhone__Link">
                    <div className="login__phone">
                        <figure>
                            <img src={phone} alt="phone icon" />
                        </figure>
                        <span>Login with Phone number</span>
                    </div>
                </Link>
                <Link to="/loginNumber" className="loginPhone__Link">
                    <div className="login__email">
                        <figure>
                            <img src={emailIcon} alt="phone icon" />
                        </figure>
                        <span>Login with Email and password</span>
                    </div>
                </Link>
                <div className="login__google">
                    <figure>
                        <img src={google} alt="google icon" />
                    </figure>
                    <span>Login with Google</span>
                </div>
                <div className="login__facebook">
                    <figure>
                        <img src={facebook} alt="facebook icon" />
                    </figure>
                    <span>Login with Facebook</span>
                </div>
            </section>
            <div className="login__footerText">
                <p>By clicking the button next you accept</p>
                <p className="login__footerText__subrayado">Terms of use</p>
            </div>
        </section>
    );
};

export default Login;
