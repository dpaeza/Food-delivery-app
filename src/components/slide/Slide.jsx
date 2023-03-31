import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Link, useNavigate } from "react-router-dom";
import slide_1 from "../../assets/slide_1.svg";
import slide_2 from "../../assets/slide_2.svg";
import slide_3 from "../../assets/slide_3.svg";
import { useSelector } from "react-redux";

const Slide = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    //Use effect para redirija al usuario a home si ya está loggueado
    useEffect(() => {
        if (user.isLogged) {
            navigate("/home");
        }
    }, [user.isLogged]);

    return (
        <section className="slide">
            <Carousel showArrows={false} showThumbs={false} showStatus={false} className="slide__carousel">
                <div>
                    <figure>
                        <img src={slide_1} alt="img" />
                    </figure>
                    <p>Choose what to eat choosing from a variety of restaurants from the list</p>
                </div>
                <div>
                    <figure>
                        <img src={slide_2} alt="img" />
                    </figure>
                    <p>Choose where you want to deliver by indicating on the map</p>
                </div>
                <div>
                    <figure>
                        <img src={slide_3} alt="img" />
                    </figure>
                    <p>We will deliver as soon as possible</p>
                </div>
            </Carousel>
            <button>
                <Link to="/login" className="slide__link">Next</Link>
            </button>
        </section>
    )
}

export default Slide