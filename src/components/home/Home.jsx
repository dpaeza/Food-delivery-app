import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import locationIcon from "../../assets/location.svg";
import promo1 from "../../assets/promo_1.png";
import promo2 from "../../assets/promo_2.png";
import promo3 from "../../assets/delivery.jpg";
import promo4 from "../../assets/delivery_2.jpg";
import promo5 from "../../assets/delivery_3.jpg";
import promo6 from "../../assets/delivery_4.jpg";
import promo7 from "../../assets/delivery_5.jpg";
import promo8 from "../../assets/delivery_6.jpg";
import promo9 from "../../assets/delivery_7.jpg";
import promo10 from "../../assets/delivery_9.jpg";
import nothingFound from "../../assets/nothingFound.png";
import starYellow from "../../assets/star_yellow.svg";
import starGrey from "../../assets/star_grey.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { getRestaurantsAsync } from "../../redux/actions/restaurantsActions";


const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const res = useSelector((state) => state.restaurants);
    const images = [
        promo1,
        promo2,
        promo3,
        promo4,
        promo5,
        promo6,
        promo7,
        promo8,
        promo9,
        promo10
    ];
    const buttons = [
        { text: "All" },
        { img: "🍔", text: "Fast food" },
        { img: "🍕", text: "Pizza" },
        { img: "🧇", text: "Breakfast" },
        { img: "🥖", text: "Bakery" },
        { img: "🥩", text: "Beef" },
        { img: "🍗", text: "Chicken" },
        { img: "🍨", text: "Ice cream" },
        { img: "🍜", text: "Asian" },
        { img: "🌮", text: "Mexican" },
        { img: "🧆", text: "Arab" },
        { img: "🥘", text: "Colombian" },
        { img: "🍱", text: "Sushi" },
        { img: "🥗", text: "Healthy food" },
        { img: "🍝", text: "Italian" },
        { img: "🍤", text: "Seafood" },
        { img: "🥙", text: "Vegetarian" },
        { img: "🧋", text: "Drinks" },
        { img: "🌯", text: "International" },
        { img: "🍟", text: "American" },
        { img: "🍸", text: "Alcohol" },
        { img: "🍰", text: "Desserts" },
    ];
    const [selectedFilter, setSelectedFilter] = useState('All')
    useEffect(() => {
        dispatch(getRestaurantsAsync());
    }, []);

    useEffect(() => {
        console.log(user);
        console.log(res.restaurants);
    }, [res]);

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
                        {`${user?.address}, ${user?.city}`}
                    </p>
                </div>
            </div>
            <section className="carouselIMG">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={16}
                    modules={[Pagination]}
                    pagination={{ clickable: true, type: "bullets", el: null }}
                    className="mySwiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`promo ${index + 1}`}
                                className="swiper-no-flexbox-shrink"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <h1>Restaurants and cafes</h1>
            <section className="carouselButtons">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    modules={[Pagination]}
                    pagination={{ clickable: true, type: "bullets", el: null }}
                    className="mySwiper"
                >
                    {buttons.map((button, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="home__buttons"
                                style={{
                                    backgroundColor:
                                        selectedFilter === button.text
                                            ? "#FFE031"
                                            : "#F2F2F2",
                                }}
                                onClick={() => setSelectedFilter(button.text)}
                            >
                                {button.img ? <p>{button.img}</p> : null}
                                <p>{button?.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <main className="home__restaurants">
                {res.restaurants
                    .filter((restaurant) =>
                        selectedFilter === "All"
                            ? true
                            : restaurant.category === selectedFilter
                    )
                    .map((restaurant, index) => (
                        <Link
                            key={index}
                            className="home__restaurants__restaurant"
                        >
                            <figure>
                                <img
                                    src={restaurant.picture}
                                    alt="restaurant image"
                                    className="home__restaurants__restaurant__imgRestaurant"
                                />
                            </figure>
                            <div>
                                <p className="home__restaurants__restaurant__name">
                                    {restaurant.name}
                                </p>
                                <div className="home__restaurants__restaurant__stars">
                                    {Array.from(
                                        { length: restaurant.stars },
                                        (_, i) => (
                                            <img
                                                key={i}
                                                src={starYellow}
                                                alt="star icon"
                                            />
                                        )
                                    )}
                                    {Array.from(
                                        { length: 5 - restaurant.stars },
                                        (_, i) => (
                                            <img
                                                key={restaurant.stars + i}
                                                src={starGrey}
                                                alt="star icon"
                                            />
                                        )
                                    )}
                                </div>
                                <p className="home__restaurants__restaurant__timetable">
                                    {`Work time ${restaurant.open} - ${restaurant.close}`}
                                </p>
                            </div>
                        </Link>
                    ))}
                {res.restaurants.filter((restaurant) =>
                    selectedFilter === "All"
                        ? true
                        : restaurant.category === selectedFilter
                ).length === 0 && (
                    <div className="home__restaurants__notFound">
                        <figure>
                            <img src={nothingFound} alt="img" />
                        </figure>
                        <p>Nothing found </p>
                    </div>
                )}
            </main>
            <Footer />
        </section>
    );
}

export default Home