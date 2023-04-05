import React from "react";
import backArrow from "../../assets/back_arrow.svg";
import { getOneOrdersAsync } from "../../redux/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Order = () => {
    const { idOrder } = useParams();
    const dispatch = useDispatch();
    const order = useSelector((state) => state.orders.orders[0]);

    useEffect(() => {
        const itemValues = {
            key: "__name__",
            value: idOrder,
        };
        dispatch(getOneOrdersAsync(itemValues));
        console.log(order);
    }, [dispatch]);

    const goBack = () => {
        window.history.back();
    };

    return (
        <section className="order">
            <div className="order__header">
                <i>
                    <img src={backArrow} alt="back arrow icon" onClick={goBack}/>
                </i>
                <h1>{order.date}</h1>
                <p></p>
            </div>
            <div className="order__cardsContainer">
                {order.items.map((item, index) => (
                    <div key={index} className="order__cardsContainer__card">
                        <div>
                            <p className="order__cardsContainer__card__quantity">
                                {item.quantity}x
                            </p>
                            <p>{item.name}</p>
                        </div>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
            <div className="order__totals">
                <div>
                    <p>Production cost</p>
                    <p className="order__totals__num">
                        {order.production_cost}
                    </p>
                </div>
                <div>
                    <p>Сost of delivery</p>
                    <p className="order__totals__num">{order.delivery}</p>
                </div>
            </div>
            <div className="order__total">
                <p>Total</p>
                <p className="order__total__num">${order.total}</p>
            </div>
        </section>
    );
};

export default Order;
