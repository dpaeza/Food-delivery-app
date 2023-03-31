import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLoginEmailAsync } from "../../redux/actions/userActions";
import { useEffect } from "react";
import { showAlert } from "../../helpers/swithAlerts";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        email: yup.string().required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters long")
    })
    .required();

const LoginEmail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const submitLogin = (data) => {
        console.log(data);
        dispatch(userLoginEmailAsync(data));
    };

    //Use effect para mostrarle al usuario si pudo inicar sesión correctamente
    useEffect(() => {
        if (user.error) {
            showAlert({
                icon: "error",
                title: "Oppss...",
                text: "Wrong email or password",
            });
        }
        if (user.isLogged) {
            console.log(user);
            showAlert({
                icon: "success",
                text: "Login successful",
            });
            navigate("/home");
        }
    }, [user.isLogged]);

    //Use effect para redirija al usuario a home si ya está loggueado
    useEffect(() => {
        if (user.isLogged) {
            navigate("/home");
        }
    }, [user.isLogged]);

    return (
        <section className="createAccount loginEmail">
            <section className="createAccount__modal">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(submitLogin)}>
                    <section>
                        <div>
                            <label>EMAIL</label>
                            <input type="email" {...register("email")} />
                            {errors.email ? (
                                <span className="createAccount__error">
                                    {errors.email.message}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            <label>PASSWORD</label>
                            <input type="password" {...register("password")} />
                            {errors.password ? (
                                <span className="createAccount__error">
                                    {errors.password.message}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                    </section>
                    <button>Login</button>
                </form>
            </section>
        </section>
    );
};

export default LoginEmail;
