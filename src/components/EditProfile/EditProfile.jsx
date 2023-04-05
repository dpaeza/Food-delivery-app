import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import edit from "../../assets/edit.svg";
import cam from "../../assets/cam.svg";
import backArrow from "../../assets/back_arrow.svg";
import { useState } from "react";

const EditProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [name, setName] = useState(user.name);
    const [isEditingName, setIsEditingName] = useState(false);
    const [email, setEmail] = useState(user.email);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [phone, setPhone] = useState(user.phone);
    const [isEditingPhone, setIsEditingPhone] = useState(false);
    const [birthday, setBirthday] = useState(user.birthday);
    const [isEditingBirthday, setIsEditingBirthday] = useState(false);

    const handleEditName = () => {
        setIsEditingName(true);
    };

    const handleEditEmail = () => {
        setIsEditingEmail(true);
    };

    const handleEditPhone = () => {
        setIsEditingPhone(true);
    };

    const handleEditBirthday = () => {
        setIsEditingBirthday(true);
    };

    const handleSave = (event) => {
        event.preventDefault();
        setIsEditingName(false);
        setIsEditingEmail(false);
        setIsEditingPhone(false);
    };

    const handleInputName = (event) => {
        setName(event.target.value);
    };

    const handleInputEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleInputPhone = (event) => {
        setPhone(event.target.value);
    };

    const handleInputBirthday = (event) => {
        setBirthday(event.target.value);
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <section className="profile">
            <div className="profile__div1">
                <div className="profile__div1__header">
                    <i>
                        <img
                            src={backArrow}
                            alt="back arrow icon"
                            onClick={goBack}
                        />
                    </i>
                    <h1>Profile</h1>
                    <p></p>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${user?.photoURL})`,
                        margin: "16px auto 0",
                        marginBottom: "16px",
                    }}
                    className="profile__div1__editPhoto"
                >
                    <img
                        src={cam}
                        alt="user profile image"
                        className="profile__div1__pic"
                    />
                </div>
                <form className="profile__div1__buttons" onSubmit={handleSave}>
                    <div>
                        {isEditingName ? (
                            <div className="profile__div1__buttons__button">
                                <input
                                    type="name"
                                    value={name}
                                    onChange={handleInputName}
                                    className="profile__div1__edit"
                                />
                                <i>
                                    <img src={edit} alt="edit icon" />
                                </i>
                            </div>
                        ) : (
                            <div className="profile__div1__buttons__button">
                                <p>
                                    {name} <i className="fas fa-pencil-alt" />
                                </p>
                                <i>
                                    <img
                                        src={edit}
                                        alt="edit icon"
                                        onClick={handleEditName}
                                    />
                                </i>
                            </div>
                        )}
                    </div>
                    <div>
                        {isEditingEmail ? (
                            <div className="profile__div1__buttons__button">
                                <input
                                    type="name"
                                    value={email}
                                    onChange={handleInputEmail}
                                    className="profile__div1__edit"
                                />
                                <i>
                                    <img src={edit} alt="edit icon" />
                                </i>
                            </div>
                        ) : (
                            <div className="profile__div1__buttons__button">
                                <p>
                                    {email} <i className="fas fa-pencil-alt" />
                                </p>
                                <i>
                                    <img
                                        src={edit}
                                        alt="edit icon"
                                        onClick={handleEditEmail}
                                    />
                                </i>
                            </div>
                        )}
                    </div>
                    <div>
                        {isEditingPhone ? (
                            <div className="profile__div1__buttons__button">
                                <input
                                    type="name"
                                    value={phone}
                                    onChange={handleInputPhone}
                                    className="profile__div1__edit"
                                />
                                <i>
                                    <img src={edit} alt="edit icon" />
                                </i>
                            </div>
                        ) : (
                            <div className="profile__div1__buttons__button">
                                <p>
                                    {phone} <i className="fas fa-pencil-alt" />
                                </p>
                                <i>
                                    <img
                                        src={edit}
                                        alt="edit icon"
                                        onClick={handleEditPhone}
                                    />
                                </i>
                            </div>
                        )}
                    </div>
                    <div>
                        {isEditingBirthday ? (
                            <div className="profile__div1__buttons__button">
                                <input
                                    type="date"
                                    value={birthday}
                                    onChange={handleInputBirthday}
                                    className="profile__div1__edit"
                                />
                                <i>
                                    <img src={edit} alt="edit icon" />
                                </i>
                            </div>
                        ) : (
                            <div className="profile__div1__buttons__button">
                                <p>
                                    {birthday}{" "}
                                    <i className="fas fa-pencil-alt" />
                                </p>
                                <i>
                                    <img
                                        src={edit}
                                        alt="edit icon"
                                        onClick={handleEditBirthday}
                                    />
                                </i>
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <button type="submit" className="profile__button">
                Save
            </button>
        </section>
    );
};

export default EditProfile;
