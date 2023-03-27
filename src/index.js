import React from "react";
import ReactDOM from "react-dom/client";
import RouterDom from "./router/routes";
import "./reset.css";
import "./styles.scss";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <RouterDom />
    </Provider>
);
