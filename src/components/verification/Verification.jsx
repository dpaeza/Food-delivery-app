import React from "react";
import logo from "../../assets/main_icon.svg";

const Verification = () => {

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