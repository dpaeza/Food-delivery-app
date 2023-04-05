import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { showAlert } from "../../helpers/swithAlerts";
import { filterCollection } from "../../services/filterCollection";
import { orderTypes } from "../types/userTypes";
import { acctualizarCart } from "./cartActions";

const getOrders = (OrdersArray) => {
    return {
        type: orderTypes.GET_ORDERS,
        payload: OrdersArray,
    };
}

export const getOrdersAsync = (id) => {
    return async (dispatch) => {
        try {
            const orders = await filterCollection({
                key: "id_user",
                value: id,
                collectionName: "orders",
            });
            console.log(orders)
            dispatch(getOrders(orders));
        } catch (error) {
            dispatch([]);
            showAlert({
                icon: "error",
                text: "There was an error processing the request",
            });
        }
    };
};

const createOrder = (obj) => {
    return {
        type: orderTypes.CREATE_ORDER,
        payload: obj,
    };
};

export const createOrderAsync = (newOrder) => {
    return async (dispatch) => {
        try {
            //Agregar orden a la colección de ordenes
            await addDoc(collection(dataBase, "orders"), newOrder);
            dispatch(
                createOrder(newOrder)
            );
            dispatch(acctualizarCart([]));
            showAlert({
                icon: "success",
                text: "Order made successfully!",
            });
        } catch (error) {
            showAlert({
                icon: "error",
                text: "There was an error processing the request",
            });
        }
    };
};