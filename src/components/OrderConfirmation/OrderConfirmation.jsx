import { useState } from "react";
import "./OrderConfirmation.scss";

function OrderConfirmation() {
    return (
        <div>
            <h3>Orders #34562</h3>
            <div className="only-labels">
                <label htmlFor="option1" className={`payment-photo-options ${PaymentOption === "option1" ? "selected" : ""}`}>
                    <input className="input-type-radio" type="radio" id="option1" name="options" value="option1" checked={PaymentOption === "option1"}
                        onChange={handleOptionChange} />
                    <img src={cCard} alt="" srcSet="" />
                    Credit Card
                </label>
                <label htmlFor="option2" className={`payment-photo-options ${PaymentOption === "option2" ? "selected" : ""}`}>
                    <input className="input-type-radio" type="radio" id="option2" name="options" value="option2" checked={PaymentOption === "option2"}
                        onChange={handleOptionChange} />
                    <img src={paypalPhoto} alt="" srcSet="" />
                    Paypal
                </label>
                <label htmlFor="option3" className={`payment-photo-options ${PaymentOption === "option3" ? "selected" : ""}`}>
                    <input className="input-type-radio" type="radio" id="option3" name="options" value="option3" checked={PaymentOption === "option3"}
                        onChange={handleOptionChange} />
                    <img src={cashPhoto} alt="" srcSet="" />
                    Cash
                </label>

            </div>
        </div>
    );
}

export default OrderConfirmation;
