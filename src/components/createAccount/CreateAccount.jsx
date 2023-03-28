import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAsync } from "../../redux/actions/userActions";
import UseAnimations from "react-useanimations";
import loading from 'react-useanimations/lib/loading';

const CreateAccount = () => {

    const dispatch = useDispatch();
    const loadingCreate = useSelector((state)=>state.loadingCreateAccount)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitSigIn = (data) => {
        console.log(data);
        // dispatch(userRegisterAsync(data));
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
                        <div>
                            <label>PHONE NUMBER</label>
                            <input
                                type="number"
                                {...register("phone", {
                                    required: "Phone number is required",
                                })}
                            />
                            {errors.phone ? (
                                <span className="createAccount__error">
                                    {errors.phone.message}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            <label>CITY</label>
                            <input
                                type="text"
                                {...register("city", {
                                    required: "City is required",
                                })}
                            />
                            {errors.city ? (
                                <span className="createAccount__error">
                                    {errors.city.message}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            <label>ADDRESS</label>
                            <input
                                type="text"
                                {...register("address", {
                                    required: "Address is required",
                                })}
                            />
                            {errors.address ? (
                                <span className="createAccount__error">
                                    {errors.address.message}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            <label>BIRTHDAY DATE</label>
                            <input
                                type="date"
                                {...register("birthday", {
                                    required: "Birthday is required",
                                })}
                            />
                            {errors.birthday ? (
                                <span className="createAccount__error">
                                    {errors.birthday.message}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            <label>PROFILE PICTURE</label>
                            <input
                                type="url"
                                {...register("picture", {
                                    required: "Profile picture is required",
                                })}
                            />
                            {errors.picture ? (
                                <span className="createAccount__error">
                                    {errors.picture.message}
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
                                Login
                            </Link>
                        </p>
                    </section>
                    {loadingCreate ? (
                        <UseAnimations
                            animation={loading}
                            size={40}
                            className="createAccount__loading"
                        />
                    ) : (
                        <></>
                    )}
                    {loadingCreate ? (
                        <></>
                    ) : (
                        <button disabled={loadingCreate}>Sing in</button>
                    )}
                </form>
            </section>
        </section>
    );
};

export default CreateAccount;
