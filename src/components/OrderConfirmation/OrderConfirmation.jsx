import { useState } from "react";
import "./OrderConfirmation.scss";

let PaymentOption = "option1";

const handleOptionChange = (e) => {
    PaymentOption = e.target.value;
    console.log(PaymentOption);
};

function OrderConfirmation() {
    return (
        <div>
            <h3>Orders #34562</h3>
            <div className="only-labels">
                <label htmlFor="option1" className={`payment-photo-options ${PaymentOption === "option1" ? "selected" : ""}`}>
                    <input className="input-type-radio" type="radio" id="option1" name="options" value="option1" checked={PaymentOption === "option1"}
                        onChange={handleOptionChange} />
                    Dine In
                </label>

                <label htmlFor="option2" className={`payment-photo-options ${PaymentOption === "option2" ? "selected" : ""}`}>
                    <input className="input-type-radio" type="radio" id="option2" name="options" value="option2" checked={PaymentOption === "option2"}
                        onChange={handleOptionChange} />
                    To Go
                </label>

                <label htmlFor="option3" className={`payment-photo-options ${PaymentOption === "option3" ? "selected" : ""}`}>
                    <input className="input-type-radio" type="radio" id="option3" name="options" value="option3" checked={PaymentOption === "option3"}
                        onChange={handleOptionChange} />
                    Delivery
                </label>

            </div>
        </div>
    );
}

export default OrderConfirmation;
