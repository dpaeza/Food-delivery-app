import React from "react";
import Footer from "../Footer/Footer";
import nextArrow from "../../assets/next_arrow.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrdersAsync } from "../../redux/actions/orderActions";

const Orders = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const orders = useSelector((state) => state.orders.orders);

    useEffect(() => {
        dispatch(getOrdersAsync(user.uid));
        console.log(orders);
    }, [dispatch]);

    return (
        <section className="orders">
            <div className="orders__div1">
                <h1>All orders</h1>
                <div className="orders__div1__container">
                    {orders.map((order, index) => (
                        <Link
                            className="orders__div1__container__link"
                            key={index}
                            to={`/order/${order.id}`}
                        >
                            <div className="orders__div1__container__card">
                                <div className="orders__div1__container__card__div1">
                                    <figure>
                                        <img
                                            src={order.restaurant_logo}
                                            alt="restaurant logo"
                                        />
                                    </figure>
                                    <div>
                                        <p className="orders__div1__container__card__div1__tittle">
                                            {order.restaurant_name}
                                        </p>
                                        <p className="orders__div1__container__card__div1__price">
                                            {`$ ${order.total}`}
                                        </p>
                                    </div>
                                </div>
                                <div className="orders__div1__container__card__div2">
                                    <p
                                        className="orders__div1__container__card__div2__status"
                                        style={{
                                            color:
                                                order.status == "Delivered"
                                                    ? "#77DF52"
                                                    : "#DF5252",
                                        }}
                                    >
                                        {order.status}
                                    </p>
                                    <i>
                                        <img
                                            src={nextArrow}
                                            alt="next arrow icon"
                                        />
                                    </i>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </section>
    );
};

export default Orders;
