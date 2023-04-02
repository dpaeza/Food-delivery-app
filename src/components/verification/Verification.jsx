import React, { useEffect } from "react";
import logo from "../../assets/main_icon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { validateCodeAsync } from "../../redux/actions/userActions";
import { showAlert } from "../../helpers/swithAlerts";

//const que valida que el numero telefonico sea numero y que tenga 10 digitos
const numberRegex = /^[0-9]{1}$/;

const schema = yup
    .object({
        a: yup
            .string()
            .required("All digits are required")
            .matches(numberRegex, "One number per box"),
        b: yup
            .string()
            .required("All digits are required")
            .matches(numberRegex, "One number per box"),
        c: yup
            .string()
            .required("All digits are required")
            .matches(numberRegex, "One number per box"),
        d: yup
            .string()
            .required("All digits are required")
            .matches(numberRegex, "One number per box"),
        e: yup
            .string()
            .required("All digits are required")
            .matches(numberRegex, "One number per box"),
        f: yup
            .string()
            .required("All digits are required")
            .matches(numberRegex, "One number per box"),
    })
    .required();

const Verification = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const fields = ["a", "b", "c", "d", "e", "f"];
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    //FUncion al enviar el form
    const submitCode = (data) => {
        const code = data.a + data.b + data.c + data.d + data.e + data.f;
        console.log(code);
        dispatch(validateCodeAsync(code));
    };

    //Use effect para redirija al usuario a home si ya está loggueado
    // useEffect(() => {
    //     if (user.isLogged) {
    //         navigate("/home");
    //     }
    // }, [user.isLogged]);

    //Use effect para redirija al usuario a home si ya está loggueado y tiene documento en la colección users
    useEffect(() => {
        if (user.isLogged && user.register) {
            console.log(user.register);
            console.log(user.isLogged);
            showAlert({
                icon: "success",
                text: "Login successful",
            });
            navigate("/home");
        }
    }, [user.isLogged]);

    //Use effect para validar si se tiene o no coleccion del usuario que se logue con el provedor google o facebook
    useEffect(() => {
        if (!user.register && user.isLogged) {
            console.log(user.register);
            console.log(user.isLogged);
            showAlert({
                icon: "success",
                text: "To continue please fill out the following form",
            });
            navigate("/create_account");
            console.log("estoy entrado a createeee");
        }
    }, [user.register]);

    return (
        <section className="login">
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <h1>Verification</h1>
            <p className="login__p">
                Enter the six-digit code from SMS.
                <span className="verification__sendAgain"> Send again?</span>
            </p>
            <form
                className="verification__form"
                onSubmit={handleSubmit(submitCode)}
            >
                <div className="verification__form__div">
                    {fields.map((field, index) => (
                        <input
                            key={index}
                            type="number"
                            className="verification__form__input"
                            {...register(field)}
                        />
                    ))}
                </div>
                {fields.find((field) => errors[field]) && (
                    <span className="createAccount__error">
                        {errors[fields.find((field) => errors[field])].message}
                    </span>
                )}
                <button type="submit">Validate</button>
            </form>
        </section>
    );
}

export default Verification