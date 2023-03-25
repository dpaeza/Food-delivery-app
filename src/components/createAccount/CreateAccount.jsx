import React from "react";

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
                    </section>
                    <button>Sing in</button>
                </form>
            </section>
        </section>
    );
}

export default CreateAccount