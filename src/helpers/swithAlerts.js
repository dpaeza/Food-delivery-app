import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showAlert = (obj) => {
    Swal.fire(obj);
};


export const Notify = (mensaje, color1, color2) => {
    Toastify({
        text: `${mensaje}`,
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: `linear-gradient(to right, ${color1}, ${color2})`,
        },
        onClick: function () {}, // Callback after click
    }).showToast();
};