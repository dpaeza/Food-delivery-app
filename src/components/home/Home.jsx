import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import res1 from "../../assets/restaurant_1.png";
import res2 from "../../assets/restaurant_2.png";
import res3 from "../../assets/restaurant_3.png";
import res4 from "../../assets/restaurant_4.png";
import starYellow from "../../assets/star_yellow.svg";
import starGrey from "../../assets/star_grey.svg";
import logo1 from "../../assets/logo_restaurant_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const Home = () => {

    // const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
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
        { img: "🍗", text: "Chicken" },
        { img: "🍨", text: "Ice cream" },
        { img: "🍜", text: "Asian" },
        { img: "🌮", text: "Mexican" },
        { img: "🧆", text: "Arab" },
        { img: "🥘", text: "Colombian" },
        { img: "🍱", text: "Sushi" },
        { img: "🥩", text: "Beef" },
        { img: "🥗", text: "Healthy food" },
        { img: "🍝", text: "Italian" },
        { img: "🍤", text: "Seafood" },
        { img: "🥙", text: "Vegetarian" },
        { img: "🧋", text: "Drinks" },
        { img: "🌯", text: "International" },
        { img: "🍟", text: "American" },
        { img: "🍸", text: "Alcohol" },
        { img: "🧇", text: "Breakfast" },
        { img: "🍰", text: "Desserts" },
    ];
    const [selectedFilter, setSelectedFilter] = useState('All')
    useEffect(() => {
        console.log(user)
    }, []);
    const restaurants = [
        {
            name: " Pardes restaurant",
            starts: 4,
            open: "09:30",
            close: "23:00",
            before_you: 4,
            picture: res1,
            logo: logo1,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet maxime modi molestiae reiciendis harum est, placeat ex sapiente quod esse non officia quisquam et ratione incidunt nemo facilis. Neque.",
            delivery_time: "15-20 min",
            categories: ["salates", "pizzas"],
        },
        {
            name: " Pardes restaurant",
            starts: 4,
            open: "09:30",
            close: "23:00",
            before_you: 4,
            picture: res1,
            logo: logo1,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet maxime modi molestiae reiciendis harum est, placeat ex sapiente quod esse non officia quisquam et ratione incidunt nemo facilis. Neque.",
            delivery_time: "15-20 min",
            categories: ["salates", "pizzas"],
        },
        {
            name: " Pardes restaurant",
            starts: 4,
            open: "09:30",
            close: "23:00",
            before_you: 4,
            picture: res1,
            logo: logo1,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet maxime modi molestiae reiciendis harum est, placeat ex sapiente quod esse non officia quisquam et ratione incidunt nemo facilis. Neque.",
            delivery_time: "15-20 min",
            categories: ["salates", "pizzas"],
        },
        {
            name: " Pardes restaurant",
            starts: 4,
            open: "09:30",
            close: "23:00",
            before_you: 4,
            picture: res1,
            logo: logo1,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet maxime modi molestiae reiciendis harum est, placeat ex sapiente quod esse non officia quisquam et ratione incidunt nemo facilis. Neque.",
            delivery_time: "15-20 min",
            categories: ["salates", "pizzas"],
        },
    ];

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
                <div className="home__restaurants__restaurant">
                    <figure>
                        <img
                            src={res1}
                            alt="restaurant image"
                            className="home__restaurants__restaurant__imgRestaurant"
                        />
                    </figure>
                    <div>
                        <p className="home__restaurants__restaurant__name">
                            Pardes Restaurant
                        </p>
                        <div className="home__restaurants__restaurant__stars">
                            <img src={starYellow} alt="start icon" />
                            <img src={starYellow} alt="start icon" />
                            <img src={starYellow} alt="start icon" />
                            <img src={starYellow} alt="start icon" />
                            <img src={starGrey} alt="start icon" />
                        </div>
                        <p className="home__restaurants__restaurant__timetable">
                            Work time 09:30 - 23:00
                        </p>
                        <p className="home__restaurants__restaurant__before">
                            Before you <span>4$</span>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </section>
    );
}

export default Home