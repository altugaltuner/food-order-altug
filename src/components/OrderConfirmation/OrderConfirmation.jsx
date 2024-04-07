import { useState } from "react";
import "./OrderConfirmation.scss";

function OrderConfirmation() {
    return (
        <div>
            <h3>Orders #34562</h3>
            <div className="order-conf-button-div">
                <button className="order-conf-button-small">Dine In</button>
                <button className="order-conf-button-small">To Go</button>
                <button className="order-conf-button-small">Delivery</button>

            </div>
        </div>
    );
}

export default OrderConfirmation;
