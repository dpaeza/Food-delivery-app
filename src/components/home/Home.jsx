import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import locationIcon from "../../assets/location.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import promo1 from "../../assets/promo_1.png";
import promo2 from "../../assets/promo_2.png";


const Home = () => {

    // const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user)
    }, []);

    return (
        <section className="home">
            <div className="home__locationContainer">
                <figure>
                    <img src={locationIcon} alt="location icon" />
                </figure>
                <div>
                    <p className="home__locationContainer__tittle">
                        DELIVER TO
                    </p>
                    <p className="home__locationContainer__direction">
                        882 Well St, New-York
                    </p>
                </div>
            </div>
            <div>
                <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                >
                    <div>
                        <figure>
                            <img src={promo1} alt="img promo" />
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img src={promo2} alt="img promo" />
                        </figure>
                    </div>
                </Carousel>
            </div>

            <Footer />
        </section>
    );
}

export default Home