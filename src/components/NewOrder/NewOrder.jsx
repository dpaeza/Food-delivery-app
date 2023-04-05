import React, { useEffect, useState } from "react";
import backArrow from "../../assets/back_arrow.svg";
import nextArrow from "../../assets/next_arrow.svg";
import masterCard from "../../assets/master_card.svg";
import paypalIcon from "../../assets/paypal.svg";
import locationIcon from "../../assets/location.svg";
import trash from "../../assets/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { acctualizarCart, deleteItem } from "../../redux/actions/cartActions";
import { getFormattedDate } from "../../helpers/formatDate";
import { createOrderAsync } from "../../redux/actions/orderActions";
import { useNavigate } from "react-router-dom";

const NewOrder = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);
    const [total, setTotal] = useState(0)
    const [selectedFilter, setSelectedFilter] = useState("Cash");
    const [inputValue, setInputValue] = useState("");
    const delivery = 4.5;

    const paymentMethods = [
        {
            name: "Cash",
        },
        {
            name: "Master Card",
            icon: masterCard,
        },
        {
            name: "Paypal",
            icon: paypalIcon,
        },
        {
            name: "Transfer",
        },
    ];

    const sumarPrecios = () => {
        let totalProducts = 0;
        for (let i = 0; i < cart.cart.length; i++) {
            totalProducts += cart.cart[i].item_price;
        };
        console.log(totalProducts)
        setTotal(totalProducts);
    }

    const increseQuantity = (id) => {
        const itemToEdit = cart.cart.find((item) => item.id_item == id);
        const unitaryPrice = itemToEdit.item_price / itemToEdit.quantity;
        const updatedItem = {
            ...itemToEdit,
            quantity: itemToEdit.quantity + 1,
            item_price: itemToEdit.item_price + unitaryPrice,
        };
        const updatedCart = cart.cart.map((item) =>
            item.id_item === id ? updatedItem : item
        );
        console.log(updatedCart);
        dispatch(acctualizarCart(updatedCart));
    }

    const decreaseQuantity = (id) => {
        const itemToEdit = cart.cart.find((item) => item.id_item == id);
        if (itemToEdit.quantity > 1) {
            const unitaryPrice = itemToEdit.item_price / itemToEdit.quantity;
            const updatedItem = {
                ...itemToEdit,
                quantity: itemToEdit.quantity - 1,
                item_price: itemToEdit.item_price - unitaryPrice,
            };
            const updatedCart = cart.cart.map((item) =>
                item.id_item === id ? updatedItem : item
            );
            console.log(updatedCart);
            dispatch(acctualizarCart(updatedCart));
        }
    };

    const deleteItemCart = (id) => {
        dispatch(deleteItem(id));
    };

    const goBack = () => {
        window.history.back();
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue)
    };

    const createNewOrder = () => {
        const todayDate = getFormattedDate();
        const newOrder = {
            id_user: user.uid,
            id_restaurant: cart.cart[0].id_restaurant,
            restaurant_name: cart.cart[0].restaurant_name,
            restaurant_logo: cart.cart[0].restaurant_logo,
            status: "",
            date: todayDate,
            deliver_to: user.address,
            production_cost: total.toFixed(2),
            delivery: delivery,
            total: (total + delivery).toFixed(2),
            payment_methods: selectedFilter,
            note: inputValue,
            items: cart.cart.map((item) => ({
                name: item.item_name,
                quantity: item.quantity,
                additional_ingredients: item.item_additional,
                price: item.item_price,
                id_item: item.id_item,
            })),
        };
        console.log(newOrder);
        dispatch(createOrderAsync(newOrder));
        navigate('/home');
    }

    useEffect(() => {
        sumarPrecios()
    }, []);

    useEffect(() => {
        sumarPrecios();
    }, [cart]);
    


    return (
        <section className="newOrder">
            <section>
                <div section className="newOrder__header">
                    <i>
                        <img
                            src={backArrow}
                            alt="back arrow icon"
                            onClick={goBack}
                        />
                    </i>
                    <h1>New Order</h1>
                    <p></p>
                </div>
                <h2 section className="newOrder__deliverTo">
                    Deliver to
                </h2>
                <div section className="newOrder__address">
                    <div>
                        <i>
                            <img
                                src={locationIcon}
                                alt="location icon"
                                section
                                className="newOrder__address__location"
                            />
                        </i>
                        <p>{`${user.address}, ${user.city}`}</p>
                    </div>
                    <i>
                        <img src={nextArrow} alt="next arrow icon" />
                    </i>
                </div>
                <h3 className="newOrder__payment">Payment</h3>
                <section className="carouselButtons__Payment">
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={10}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                            type: "bullets",
                            el: null,
                        }}
                        className="mySwiper"
                    >
                        {paymentMethods.map((button, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    style={{
                                        backgroundColor:
                                            selectedFilter === button.name
                                                ? "#FFE031"
                                                : "#F2F2F2",
                                    }}
                                    onClick={() =>
                                        setSelectedFilter(button.name)
                                    }
                                >
                                    {button.icon ? (
                                        <i>
                                            <img src={button.icon} alt="icon" />
                                        </i>
                                    ) : null}
                                    <p>{button.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
                <section className="newOrder__itemsContainer">
                    {cart.cart.map((item, index) => (
                        <div
                            className="newOrder__itemsContainer__item"
                            key={index}
                        >
                            <div className="newOrder__itemsContainer__item__div">
                                <figure>
                                    <img src={item.item_img} alt="item img" />
                                </figure>
                                <div>
                                    <button
                                        onClick={() =>
                                            decreaseQuantity(item.id_item)
                                        }
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() =>
                                            increseQuantity(item.id_item)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                                <figure>
                                    <img
                                        src={trash}
                                        alt="trash icon"
                                        className="newOrder__itemsContainer__item__div__trash"
                                        onClick={() =>
                                            deleteItemCart(item.id_item)
                                        }
                                    />
                                </figure>
                                <p>{item.item_name}</p>
                            </div>
                            <p className="newOrder__itemsContainer__item__price">
                                ${item.item_price.toFixed(1)}
                            </p>
                        </div>
                    ))}
                </section>
                <h4 className="newOrder__note">Note</h4>
                <input
                    type="text"
                    placeholder="Write something"
                    className="newOrder__noteArea"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </section>
            <section className="newOrder__down">
                <div className="newOrder__down__div1">
                    <div>
                        <p>Products</p>
                        <p>{total.toFixed(2)}$</p>
                    </div>
                    <div>
                        <p>Delivery</p>
                        <p>{delivery}$</p>
                    </div>
                </div>
                <div className="newOrder__down__div2">
                    <p>Total</p>
                    <p className="newOrder__down__div2__total">
                        {(total + delivery).toFixed(2)}$
                    </p>
                </div>
                <button
                    className="newOrder__down__order"
                    onClick={createNewOrder}
                >
                    Order
                </button>
            </section>
        </section>
    );
}

export default NewOrder