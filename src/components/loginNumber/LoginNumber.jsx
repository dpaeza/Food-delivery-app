import React, { useEffect } from "react";
import logo from "../../assets/main_icon.svg";
import phoneGrey from "../../assets/phone_grey.svg"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

//const que valida que el numero telefonico sea numero y que tenga 10 digitos
const numberRegex = /^[0-9]{10}$/;

const schema = yup
    .object({
        phone: yup
            .string()
            .required("Phone number is required")
            .matches(numberRegex, "The phone number must be 10 digits"),
    })
    .required();

const LoginNumber = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
        const {
            register,
            handleSubmit,
            setValue,
            formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    
    const submitNumber = (data) => { 
        console.log(data)
    }

    //Use effect para redirija al usuario a home si ya está loggueado
    useEffect(() => {
        if (user.isLogged) {
            navigate("/home");
        }
    }, [user.isLogged]);

    const generateRecaptcha = () => {
        try {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => { },
                },
                auth
            );
        } catch (error) {
            console.log(error)
        }
        
    };

    const sendSMS = (phoneNumber) => {
        signInWithPhoneNumber()
    }

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
            <form
                className="loginNumber__form"
                onSubmit={handleSubmit(submitNumber)}
            >
                <div className="loginNumber__form__div">
                    <figure>
                        <img src={phoneGrey} alt="phone icon" />
                    </figure>
                    <p>+</p>
                    <input type="number" {...register("phone")} />
                    {errors.phone ? (
                        <span className="createAccount__error">
                            {errors.phone.message}
                        </span>
                    ) : (
                        <></>
                    )}
                </div>
                <div id="recaptcha-container"></div>
                <button type="submit">Login</button>
            </form>
        </section>
    );
}

export default LoginNumber