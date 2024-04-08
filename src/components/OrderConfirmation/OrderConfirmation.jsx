import { useState } from "react";
import "./OrderConfirmation.scss";

function OrderConfirmation() {

    let [choosedTotalPiece, setChoosedTotalPiece] = useState(0);
    let [priceOfOrder, setpriceOfOrder] = useState(4.58);

    const addingButtonImg = "../src/assets/adding-button.png";
    const dustbin = "../src/assets/dustbin-logo.png";
    const food1 = "/food1.png";
    const food2 = "/food2.png";
    const food3 = "/food3.png";
    const food4 = "/food4.png";

    return (
        <div>
            <div className="order-conf-main">

                <div className="title-order-conf">
                    <div className="part-of-title-conf">
                        <h1 className="h1-order-conf">Confirmation</h1>
                        <h3 className="h3-order-conf">Orders #34562</h3>
                    </div>
                    <div className="part-of-title-conf">
                        <img src={addingButtonImg} alt="" srcset="" className="adding-button-class" />
                    </div>
                </div>

                <div className="order-conf-body">

                    <div className="conf-left-order-part">
                        <div className="conf-pic-and-name-and-price">
                            <div className="bitmiyor">
                                <img src={food1} alt="" srcset="" className="food-photos-order-conf" />
                                <div className="name-and-price">
                                    <p className="name-and-price-p">Spicy seasoned sea...</p>
                                    <p className="name-and-price-p">$ 2.29</p>
                                </div>
                            </div>
                            <input type="text" className="total-piece-of-food" value={choosedTotalPiece} />
                        </div>

                        <input type="text" className="food-customer-note" placeholder="Order note..." />
                    </div>

                    <div className="conf-right-order-part">
                        <p className="price-of-order-conf">${priceOfOrder}</p>
                        <button type="reset" className="reset-button-conf"><img src={dustbin} alt="" srcset="" className="reset-button-conf-img" /></button>
                    </div>
                </div>


                {/* deneme amaçlı tekrar */}

                <div className="order-conf-body">

                    <div className="conf-left-order-part">
                        <div className="conf-pic-and-name-and-price">
                            <div className="bitmiyor">
                                <img src={food1} alt="" srcset="" className="food-photos-order-conf" />
                                <div className="name-and-price">
                                    <p className="name-and-price-p">Spicy seasoned sea...</p>
                                    <p className="name-and-price-p">$ 2.29</p>
                                </div>
                            </div>
                            <input type="text" className="total-piece-of-food" value={choosedTotalPiece} />
                        </div>

                        <input type="text" className="food-customer-note" placeholder="Order note..." />
                    </div>

                    <div className="conf-right-order-part">
                        <p className="price-of-order-conf">${priceOfOrder}</p>
                        <button type="reset" className="reset-button-conf"><img src="dustbin" alt="" srcset="" className="reset-button-conf-img" /></button>
                    </div>
                </div>

                <div className="order-conf-body">

                    <div className="conf-left-order-part">
                        <div className="conf-pic-and-name-and-price">
                            <div className="bitmiyor">
                                <img src={food1} alt="" srcset="" className="food-photos-order-conf" />
                                <div className="name-and-price">
                                    <p className="name-and-price-p">Spicy seasoned sea...</p>
                                    <p className="name-and-price-p">$ 2.29</p>
                                </div>
                            </div>
                            <input type="text" className="total-piece-of-food" value={choosedTotalPiece} />
                        </div>

                        <input type="text" className="food-customer-note" placeholder="Order note..." />
                    </div>

                    <div className="conf-right-order-part">
                        <p className="price-of-order-conf">${priceOfOrder}</p>
                        <button type="reset" className="reset-button-conf"><img src="dustbin" alt="" srcset="" className="reset-button-conf-img" /></button>
                    </div>
                </div>

                <div className="order-conf-body">

                    <div className="conf-left-order-part">
                        <div className="conf-pic-and-name-and-price">
                            <div className="bitmiyor">
                                <img src={food1} alt="" srcset="" className="food-photos-order-conf" />
                                <div className="name-and-price">
                                    <p className="name-and-price-p">Spicy seasoned sea...</p>
                                    <p className="name-and-price-p">$ 2.29</p>
                                </div>
                            </div>
                            <input type="text" className="total-piece-of-food" value={choosedTotalPiece} />
                        </div>

                        <input type="text" className="food-customer-note" placeholder="Order note..." />
                    </div>

                    <div className="conf-right-order-part">
                        <p className="price-of-order-conf">${priceOfOrder}</p>
                        <button type="reset" className="reset-button-conf"><img src="dustbin" alt="" srcset="" className="reset-button-conf-img" /></button>
                    </div>
                </div>

                <div className="discount-subtotal-div-line"></div>

                <div className="discount-subtotal-div">
                    <div className="discount-subtotal-div-line">
                        <p className="discount-subtotal-p">Discount</p>
                        <p className="discount-subtotal-p">$ 0.00</p>
                    </div>
                    <div className="discount-subtotal-div-line">
                        <p className="discount-subtotal-p">Sub total</p>
                        <p className="discount-subtotal-p">$ 21.43</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OrderConfirmation;
