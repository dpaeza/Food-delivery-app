import React from "react";
import logo from "../../assets/main_icon.svg";
import phoneGrey from "../../assets/phone_grey.svg"

const LoginNumber = () => {

    return (
        <section className="login loginNumber">
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