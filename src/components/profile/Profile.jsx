import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogoutAsync } from "../../redux/actions/userActions";
import Footer from "../Footer/Footer";
import account from "../../assets/account.svg";
import nextArrow from "../../assets/next_arrow.svg";
import campana from "../../assets/campana.svg";
import wallet from "../../assets/wallet.svg";
import world from "../../assets/world.svg";
import locationGrey from "../../assets/location_grey.svg";
import FAQ from "../../assets/FAQ.svg";
import call from "../../assets/call.svg";


const Profile = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(doLogoutAsync());
    };

    return (
        <section className="profile">
            <div className="profile__div1">
                <figure>
                    <img
                        src={user?.photoURL}
                        alt="user profile image"
                        className="profile__div1__pic"
                    />
                </figure>
                <h1>{user?.name}</h1>
                <section className="profile__div1__buttons">
                    <div className="profile__div1__buttons__button">
                        <div>
                            <i>
                                <img src={account} alt="icon" />
                            </i>
                            <p>Account edit</p>
                        </div>
                        <i>
                            <img src={nextArrow} alt="" />
                        </i>
                    </div>
                    <div className="profile__div1__buttons__button">
                        <div>
                            <i>
                                <img src={campana} alt="icon" />
                            </i>
                            <p>Account edit</p>
                        </div>
                        <i>
                            <img src={nextArrow} alt="" />
                        </i>
                    </div>
                    <div className="profile__div1__buttons__button">
                        <div>
                            <i>
                                <img src={wallet} alt="icon" />
                            </i>
                            <p>Payment</p>
                        </div>
                        <i>
                            <img src={nextArrow} alt="" />
                        </i>
                    </div>
                    <div className="profile__div1__buttons__button">
                        <div>
                            <i>
                                <img src={world} alt="icon" />
                            </i>
                            <p>Language</p>
                        </div>
                        <i>
                            <img src={nextArrow} alt="" />
                        </i>
                    </div>
                    <div className="profile__div1__buttons__button">
                        <div>
                            <i>
                                <img src={locationGrey} alt="icon" />
                            </i>
                            <p>Location</p>
                        </div>
                        <i>
                            <img src={nextArrow} alt="" />
                        </i>
                    </div>
                    <div className="profile__div1__buttons__button">
                        <div>
                            <i>
                                <img src={FAQ} alt="icon" />
                            </i>
                            <p>FAQ</p>
                        </div>
                        <i>
                            <img src={nextArrow} alt="" />
                        </i>
                    </div>
                    <div className="profile__div1__buttons__button">
                        <div>
                            <i>
                                <img src={call} alt="icon" />
                            </i>
                            <p>Support</p>
                        </div>
                        <i>
                            <img src={nextArrow} alt="" />
                        </i>
                    </div>
                    <div
                        className="profile__div1__buttons__button"
                        onClick={handleLogout}
                    >
                        <div>
                            <i>
                                <img src={account} alt="icon" />
                            </i>
                            <p>Logout</p>
                        </div>
                        <i>
                            <img src={nextArrow} alt="" />
                        </i>
                    </div>
                    {/* <button onClick={handleLogout}>Logout</button> */}
                </section>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    );
};

export default Profile;
