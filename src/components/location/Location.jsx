import React from "react";
import map from "../../assets/map.png"

const Location = () => {

    return (
        <section className="location">
            <section className="location__modal">
                <div>
                    <p className="location__pinitial">
                        Allow access to geo data on the device mark your address
                        on the map
                    </p>
                    <figure>
                        <img src={map} alt="map" />
                    </figure>
                    <p className="location__whereIam">Where I am ?</p>
                    <input type="text" />
                </div>
                <button>Confirm</button>
            </section>
        </section>
    );
}

export default Location