import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import backArrow from "../../assets/back_arrow.svg";
import starYellow from "../../assets/star_yellow.svg";
import starGrey from "../../assets/star_grey.svg";
import { getMenuAsync } from "../../redux/actions/menuActions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Restaurant = () => {
    const { idRestaurant } = useParams();
    const dispatch = useDispatch();
    const res = useSelector((state) => state.restaurants);
    const restaurantMenu = useSelector((state) => state.menu);
    const restaurantSelected = res.restaurants.find(
        (restaurant) => restaurant.id === idRestaurant
    );
    const [category, setCategory] = useState([]);
    const [categorySelected, setCategorySelected] = useState("All");

    useEffect(() => {
        console.log(restaurantSelected);
        const restaurantFilter = {
            key: "id_restaurant",
            value: idRestaurant
        };
        dispatch(getMenuAsync(restaurantFilter));
    }, []);

    useEffect(() => {
        console.log(restaurantMenu.menu);
        const newCategories = [
            ...new Set(restaurantMenu.menu.map((item) => item.category)),
        ];
        const categories = ["All", ...newCategories];
        setCategory(categories);
        console.log(categories);
        console.log(categories);
    }, [restaurantMenu]);

    const goBack = () => {
        window.history.back();
    };

    return (
        <section className="restaurant">
            <section className="restaurant__header">
                <div className="restaurant__header__div1">
                    <i>
                        <img
                            src={backArrow}
                            alt="back arrow icon"
                            className="restaurant__header__div1__arrow"
                            onClick={goBack}
                        />
                    </i>
                    <figure>
                        <img
                            src={restaurantSelected.logo}
                            alt="restaurant logo"
                            className="restaurant__header__div1__img"
                        />
                    </figure>
                    <figure></figure>
                </div>
                <div className="restaurant__header__div2">
                    <figure>
                        <img
                            src={restaurantSelected.picture}
                            alt="restaurant image"
                            className="restaurant__header__div2__img"
                        />
                    </figure>
                    <section>
                        <div>
                            <h1>{restaurantSelected.name}</h1>
                            <p className="restaurant__header__div2__description">
                                {restaurantSelected.description}
                            </p>
                            <div className="restaurant__header__div2__div">
                                <div className="home__restaurants__restaurant__stars">
                                    {Array.from(
                                        { length: restaurantSelected.stars },
                                        (_, i) => (
                                            <img
                                                key={i}
                                                src={starYellow}
                                                alt="star icon"
                                            />
                                        )
                                    )}
                                    {Array.from(
                                        {
                                            length:
                                                5 - restaurantSelected.stars,
                                        },
                                        (_, i) => (
                                            <img
                                                key={
                                                    restaurantSelected.stars + i
                                                }
                                                src={starGrey}
                                                alt="star icon"
                                            />
                                        )
                                    )}
                                </div>
                                <p>{restaurantSelected.delivery_time}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className="restaurant__carouselButtons">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    modules={[Pagination]}
                    pagination={{ clickable: true, type: "bullets", el: null }}
                    className="mySwiper"
                >
                    {category.map((categoria, index) => (
                        <SwiperSlide key={index}>
                            <p
                                style={{
                                    backgroundColor:
                                        categoria == categorySelected
                                            ? "#FFE031"
                                            : "#F2F2F2",
                                }}
                                onClick={() => setCategorySelected(categoria)}
                            >
                                {categoria}
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <main className="restaurant__cards">
                {restaurantMenu.menu
                    .filter((plato) =>
                        categorySelected === "All"
                            ? true
                            : plato.category === categorySelected
                    )
                    .map((platillo, index) => (
                        <Link
                            className="restaurant__cards__link"
                            key={index}
                            to={`/item/${platillo.id}`}
                        >
                            <div className="restaurant__cards__card">
                                <figure>
                                    <img src={platillo.picture} alt="" />
                                </figure>
                                <p className="restaurant__cards__card__tittle">
                                    {platillo.name}
                                </p>
                                <p className="restaurant__cards__card__price">{`$ ${platillo.price}`}</p>
                            </div>
                        </Link>
                    ))}
            </main>
        </section>
    );
};

export default Restaurant;
