import React from "react";
import Footer from "../Footer/Footer";
import searchGrey from "../../assets/search_grey.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMenuAsync } from "../../redux/actions/menuActions";
import { useEffect } from "react";

const Search = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const [itemsResult, setItemsResult] = useState([]);
    const items = useSelector((state) => state.menu.menu);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        // Verifica si la tecla presionada es "Enter" (código 13)
        if (event.keyCode === 13) {
            console.log("El usuario presionó la tecla Enter");
            const itemsFiltereds = items.filter((item) =>
                item.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setItemsResult(itemsFiltereds);
            console.log(itemsFiltereds);
        }
    }

    useEffect(() => {
        const searchValue = {
            key: "",
            value: "",
            collectionName: "menu",
        };
        dispatch(getMenuAsync(searchValue));
        console.log(items)
    }, []);

    return (
        <section className="searchPage">
            <div>
                <div className="searchPage__search">
                    <div className="searchPage__search__div">
                        <i>
                            <img src={searchGrey} alt="search icon" />
                        </i>
                        <input
                            type="text"
                            value={inputValue}
                            placeholder="Search for a dish"
                            onChange={handleInputChange}
                            onKeyDown={handleInputChange}
                        />
                    </div>
                </div>
                <div className="searchPage__results">
                    {itemsResult.map((dish, index) => (
                        <Link
                            className="searchPage__results__link"
                            key={index}
                            to={`/item/${dish.id}`}
                        >
                            <div className="searchPage__results__card">
                                <figure>
                                    <img src={dish.picture} alt="item img" />
                                </figure>
                                <div className="searchPage__results__card__div">
                                    <p className="searchPage__results__card__div__title">
                                        {dish.name}
                                    </p>
                                    <p className="searchPage__results__card__div__price">
                                        {`$ ${dish.price}`}
                                    </p>
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
}

export default Search