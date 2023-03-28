import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAsync } from "../../redux/actions/userActions";

const CreateAccount = () => {

    const dispatch = useDispatch();
    const loading = useSelector((state)=>state.loadingCreateAccount)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitSigIn = (data) => {
        console.log(data);
        dispatch(userRegisterAsync(data));
    };

    return (
        <section className="createAccount">
            <section className="createAccount__modal">
                <h1>Create account</h1>
                <form onSubmit={handleSubmit(submitSigIn)}>
                    <section>
                        <div>
                            <label>NAME</label>
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                            {errors.name ? (
                                <span className="createAccount__error">
                                    {errors.name.message}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
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
                        <p className="createAccount__p">
                            Do you already have an account?
                            <Link
                                to="/login"
                                className="createAccount__p__link"
                            >
                                Log in
                            </Link>
                        </p>
                    </section>
                    {loading ? <span>Loading...</span> : <></>}
                    <button disabled={loading}>Sing in</button>
                </form>
            </section>
        </section>
    );
};

export default CreateAccount;
