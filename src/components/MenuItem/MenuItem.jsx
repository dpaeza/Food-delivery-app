import React, { useState } from "react";
import { Notify } from "../../helpers/swithAlerts"
import backArrow from "../../assets/back_arrow.svg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuAsync } from "../../redux/actions/menuActions";
import clock from "../../assets/clock.svg";
import check from "../../assets/check.svg"
import { addItemCart } from "../../redux/actions/cartActions";

const MenuItem = () => {
    const { idItem } = useParams();
    const dispatch = useDispatch();
    const itemMenu = useSelector((state) => state.menu);
    const res = useSelector((state) => state.restaurants);
    const user = useSelector((state) => state.user);
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(itemMenu.menu[0]?.price);
    const [extra, setExtra] = useState([]);

    useEffect(() => {
        const itemValues = {
            key: "__name__",
            value: idItem,
        };
        console.log(itemValues);
        dispatch(getMenuAsync(itemValues));
    }, []);

    useEffect(() => {
        console.log(itemMenu.menu);
    }, [itemMenu]);

    useEffect(() => {
        setTotal(quantity * itemMenu.menu[0]?.price);
    }, [quantity]);

    useEffect(() => {
        let totalPriceExtras = 0;
        for (let i = 0; i < extra.length; i++) {
            for (let j = 0; j < itemMenu.menu[0].additional_ingredients.length; j++) {
                if (extra[i] === itemMenu.menu[0].additional_ingredients[j].name) {
                totalPriceExtras += itemMenu.menu[0].additional_ingredients[j].price;
                break; // si hay una coincidencia, sal del bucle interno
                }
            }
        }
        setTotal((quantity * itemMenu.menu[0]?.price )+ totalPriceExtras);
    }, [extra]);

    const goBack = () => {
        window.history.back();
    };

    const decrease = () => {
        if (quantity>1) {
            setQuantity(quantity - 1);
        }
    }

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const toogleSelectExtra = (value) => {
        console.log(value);
        if (extra.some((extra) => extra === value)) {
            const extraFiltered = extra.filter(
                (item) => item !== value
            );
            setExtra(extraFiltered)
            console.log(extraFiltered);
        } else {
            setExtra([...extra, value]);
        }
    }

    const addCart = () => {

        const restaurant = res.restaurants.find(
            (restaurant) => restaurant.id === itemMenu.menu[0].id_restaurant
        );

        const addNewItemCart = {
            id_restaurant: itemMenu.menu[0].id_restaurant,
            id_item: idItem,
            id_user: user.uid,
            item_name: itemMenu.menu[0].name,
            item_img: itemMenu.menu[0].picture,
            item_price: total,
            quantity: quantity,
            item_additional: extra,
            restaurant_name: restaurant.name,
            restaurant_logo: restaurant.logo,
            status: "",
            payment: "",
            Note: "",
        };

        dispatch(addItemCart(addNewItemCart))
        Notify("Item added to shopping cart 🛒 ", "#FFE031", "#FFC107");
    }

    return (
        <section className="menuItem">
            <div className="menuItem__div1">
                <div
                    style={{
                        backgroundImage: `url(${itemMenu.menu[0].picture})`,
                    }}
                    className="menuItem__div1__header"
                >
                    <figure>
                        <img
                            src={backArrow}
                            alt="back arrow icon"
                            onClick={goBack}
                        />
                    </figure>
                </div>
                <div className="menuItem__div1__titleLine">
                    <h1>{itemMenu.menu[0]?.name}</h1>
                    <div className="menuItem__div1__titleLine__div">
                        <i>
                            <img src={clock} alt="clock icon" />
                        </i>
                        <p>{itemMenu.menu[0]?.preparation_time}</p>
                    </div>
                </div>
                <p className="menuItem__div1__description">
                    {itemMenu.menu[0]?.description}
                </p>
                <h2>Additional Ingredients</h2>
                {itemMenu.menu[0]?.additional_ingredients.map(
                    (option, index) => (
                        <div className="menuItem__div1__option" key={index}>
                            <div className="menuItem__div1__option__div">
                                {extra.some((value) => value == option.name) ? (
                                    <div
                                        className="menuItem__div1__option__div__Select"
                                        onClick={() =>
                                            toogleSelectExtra(option.name)
                                        }
                                    >
                                        <img src={check} alt="check icon" />
                                    </div>
                                ) : (
                                    <div
                                        className="menuItem__div1__option__div__noSelect"
                                        onClick={() =>
                                            toogleSelectExtra(option.name)
                                        }
                                    ></div>
                                )}
                                <p>{option.name}</p>
                            </div>
                            <p
                                className="menuItem__div1__option__price"
                                style={{
                                    color: extra.some(
                                        (value) => value == option.name
                                    )
                                        ? "#FFE031"
                                        : "#414141",
                                }}
                            >
                                +{option.price}$
                            </p>
                        </div>
                    )
                )}
            </div>
            <div className="menuItem__div2">
                <div className="menuItem__div2__div">
                    <button type="button" onClick={decrease}>
                        -
                    </button>
                    <span>{quantity}</span>
                    <button type="button" onClick={increase}>
                        +
                    </button>
                </div>
                <button
                    type="button"
                    className="menuItem__div2__add"
                    onClick={addCart}
                >
                    <p className="menuItem__div2__add">Add</p>
                    <p className="menuItem__div2__total">${total.toFixed(1)}</p>
                </button>
            </div>
        </section>
    );
}

export default MenuItem