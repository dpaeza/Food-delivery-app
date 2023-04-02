import React from "react";
import homeGrey from "../../assets/home_grey.svg";
import homeYellow from "../../assets/home_yellow.svg";
import searchGrey from "../../assets/search_grey.svg";
import searchYellow from "../../assets/search_yellow.svg";
import historialGrey from "../../assets/historial_grey.svg";
import historialYellow from "../../assets/historial_yellow.svg";
import profileGrey from "../../assets/profile_grey.svg";
import profileYellow from "../../assets/profile_yellow.svg";
import activeYellow from "../../assets/active_yellow.svg";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    const icons = [
        { path: "/home", greyIcon: homeGrey, yellowIcon: homeYellow },
        { path: "/search", greyIcon: searchGrey, yellowIcon: searchYellow },
        {
            path: "/orders",
            greyIcon: historialGrey,
            yellowIcon: historialYellow,
        },
        { path: "/profile", greyIcon: profileGrey, yellowIcon: profileYellow },
    ];

    return (
        <footer className="footer">
            {icons.map((icon) => (
                <figure key={icon.path}>
                    <NavLink to={icon.path}>
                        <div className="footer__div">
                            <img
                                src={
                                    location.pathname === icon.path
                                        ? icon.yellowIcon
                                        : icon.greyIcon
                                }
                                alt="icon"
                            />
                            <img
                                src={activeYellow}
                                alt="active point icon"
                                className="footer__div__active"
                                style={{
                                    visibility:
                                        location.pathname === icon.path
                                            ? "visible"
                                            : "hidden",
                                }}
                            />
                        </div>
                    </NavLink>
                </figure>
            ))}
            {/* <figure>
                <NavLink to="/home">
                    {location.pathname === "/home" ? (
                        <div className="footer__div">
                            <img src={homeYellow} alt="home icon yellow" />
                            <img
                                src={activeYellow}
                                alt="active point icon"
                                className="footer__div__active"
                                style={{ visibility: "visible" }}
                            />
                        </div>
                    ) : (
                        <div className="footer__div">
                            <img src={homeGrey} alt="home icon grey" />
                            <img
                                src={activeYellow}
                                alt="active point icon"
                                className="footer__div__active"
                                style={{ visibility: "hidden" }}
                            />
                        </div>
                    )}
                </NavLink>
            </figure>
            <figure>
                <NavLink to="/search">
                    {location.pathname === "/search" ? (
                        <div className="footer__div">
                            <img src={searchYellow} alt="home icon yellow" />
                            <img
                                src={activeYellow}
                                alt="active point icon"
                                className="footer__div__active"
                                style={{ visibility: "visible" }}
                            />
                        </div>
                    ) : (
                        <div className="footer__div">
                            <img src={searchGrey} alt="home icon grey" />
                            <img
                                src={activeYellow}
                                alt="active point icon"
                                className="footer__div__active"
                                style={{ visibility: "hidden" }}
                            />
                        </div>
                    )}
                </NavLink>
            </figure>
            <figure>
                <NavLink to="/orders">
                    {location.pathname === "/orders" ? (
                        <div className="footer__div">
                            <img src={historialYellow} alt="home icon yellow" />
                            <img
                                src={activeYellow}
                                alt="active point icon"
                                className="footer__div__active"
                                style={{ visibility: "visible" }}
                            />
                        </div>
                    ) : (
                        <div className="footer__div">
                            <img src={historialGrey} alt="home icon grey" />
                            <img
                                src={activeYellow}
                                alt="active point icon"
                                className="footer__div__active"
                                style={{ visibility: "hidden" }}
                            />
                        </div>
                    )}
                </NavLink>
            </figure>
            <figure>
                <NavLink to="/profile">
                    {location.pathname === "/profile" ? (
                        <div className="footer__div">
                            <img src={profileYellow} alt="home icon yellow" />
                            <img
                                src={activeYellow}
                                alt="active point icon"
                                className="footer__div__active"
                                style={{ visibility: "visible" }}
                            />
                        </div>
                    ) : (
                        <div>
                            <img src={profileGrey} alt="home icon grey" />
                            <img
                                src={activeYellow}
                                alt="active point icon"
                                className="footer__div__active"
                                style={{ visibility: "hidden" }}
                            />
                        </div>
                    )}
                </NavLink>
            </figure> */}
        </footer>
    );
};

export default Footer;