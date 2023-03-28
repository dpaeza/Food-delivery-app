import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import UseAnimations from "react-useanimations";
// import loading from "react-useanimations/lib/loading";
import { userLoginEmailAsync } from "../../redux/actions/userActions";
import Swal from "sweetalert2";
import { useEffect } from "react";

const LoginEmail = () => {

    const dispatch = useDispatch();
    const user = useSelector((state)=> state.user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitLogin = (data) => {
        console.log(data);
        dispatch(userLoginEmailAsync(data));
    };

    return (
        <section className="createAccount">
            <section className="createAccount__modal">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(submitLogin)}>
                    <section>
                        <div>
                            <label>EMAIL</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                            />
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
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />
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
