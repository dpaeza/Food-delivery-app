import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {

    return (
        <section className="createAccount">
            <section className="createAccount__modal">
                <h1>Create account</h1>
                <form>
                    <section>
                        <div>
                            <label>NAME</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>EMAIL</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label>PASSWORD</label>
                            <input type="password" />
                        </div>
                        <p className="createAccount__p">
                            Do you already have an account? 
                            <Link to="/login" className="createAccount__p__link">
                                Log in
                            </Link>
                        </p>
                    </section>
                    <button>Sing in</button>
                </form>
            </section>
        </section>
    );
}

export default CreateAccount