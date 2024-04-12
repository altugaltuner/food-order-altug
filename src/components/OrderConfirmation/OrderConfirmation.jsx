import { useState } from "react";
import "./OrderConfirmation.scss";

function OrderConfirmation() {

    let discountPercentage = 20;

    // foodItems artık bir state
    const [foodItems, setFoodItems] = useState([
        { id: 1, name: "Spicy seasoned seafood noodles", price: 2.29, imageSrc: "../src/assets/food1.png", quantity: 0, totalPrice: 0, OrderNote: "" },
        { id: 2, name: "Salted Pasta with mushroom sauce", price: 2.69, imageSrc: "../src/assets/food1.png", quantity: 0, totalPrice: 0, OrderNote: "" },
        { id: 3, name: "Beef Dumpling in hot and sour soup", price: 2.99, imageSrc: "../src/assets/food1.png", quantity: 0, totalPrice: 0, OrderNote: "" },
        { id: 4, name: "Healthy noodle with spinach leaf", price: 3.29, imageSrc: "../src/assets/food1.png", quantity: 0, totalPrice: 0, OrderNote: "" },
    ]);

    // isNaN fonksiyonu, bir değerin NaN olup olmadığını kontrol eder. Eğer parametre olarak verilen değer NaN ise, true döner; aksi halde false döner.
    // ! operatörü, isNaN fonksiyonunun sonucunu tersine çevirir. Yani, eğer parsedQuantity NaN değilse, !isNaN(parsedQuantity) ifadesi true olur.
    const handlePieceChange = (id, value) => {
        setFoodItems(foodItems.map(item => {
            if (item.id === id) {
                const parsedQuantity = parseInt(value, 10);
                const quantity = !isNaN(parsedQuantity) ? parsedQuantity : 0;
                return { ...item, quantity, totalPrice: quantity * item.price };
            }
            return item;
        }));
    };

    function subTotal() {
        let total = 0;
        for (const element of foodItems) {
            total += element.totalPrice;
        }
        let discountMoney = 100 - discountPercentage;
        total = (total * (discountMoney / 100));
        return total;
    };

    function discountedMoney() {
        let total = 0;
        for (const element of foodItems) {
            total += element.totalPrice;
        }
        let discountMoney = total * (discountPercentage / 100);
        return discountMoney;
    };

    const handleCustomerNoteChange = (id, note) => {
        setFoodItems(foodItems.map(item => {
            if (item.id === id) {
                return { ...item, OrderNote: note };
            }
            return item;
        }));
        console.log(foodItems);
        //burada notedaki sıkıntı son harfi almıyor!!!
    };

    // Silme işlevi : DeleteMeal Fonksiyonu: deleteMeal fonksiyonu, aldığı id değerine göre hangi yemeğin silineceğini anlar. Fonksiyon, filter metoduyla foodItems dizisinde dolaşır ve her bir öğenin id değeri ile fonksiyona argüman olarak verilen id değerini karşılaştırır. Eşleşmeyen (yani silinmesi gerekmeyen) öğeler yeni bir dizi oluşturmak üzere kullanılır. Eşleşen öğe (silinmesi gereken yemek) bu yeni dizide yer almaz.
    const deleteMeal = (id) => {
        const newFoodItems = foodItems.filter(item => item.id !== id);
        setFoodItems(newFoodItems);
    };


    const addingButtonImg = "../src/assets/adding-button.png";
    const dustbin = "../src/assets/dustbin-logo.png";


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

                {/* Map Metodu: foodItems.map(...) kullandığınızda, foodItems dizisindeki her bir öğe için bir döngü oluşturursunuz. Bu döngü içinde, her öğenin kendine ait bir div bloğu (ve içinde çöp kutusu butonu) oluşturulur. Her bir div ve içerdiği buton, o anki döngüdeki öğenin (foodItem) verileriyle (özellikle id değeriyle) ilişkilendirilmiş olur. */}

                {foodItems.map((foodItem) => (
                    <div className="order-conf-body" key={foodItem.id}>

                        <div className="conf-left-order-part">
                            <div className="conf-pic-and-name-and-price">
                                <div className="conf-pic-and-name-and-price-2">
                                    <img src={foodItem.imageSrc} alt="" className="food-photos-order-conf" />
                                    <div className="name-and-price">
                                        <p className="name-and-price-p">{foodItem.name}</p>
                                        <p className="name-and-price-p">${foodItem.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <input type="text" placeholder="0" className="total-piece-of-food" onChange={(e) => handlePieceChange(foodItem.id, e.target.value)}
                                    value={foodItem.quantity || ''}
                                />

                            </div>


                            <input type="text" onChange={(e) => handleCustomerNoteChange(foodItem.id, e.target.value)} className="food-customer-note" placeholder="Order note..." value={foodItem.OrderNote} />
                        </div>

                        {/* OnClick Olayı: Çöp kutusu butonuna tıklandığında tetiklenen onClick olayında, deleteMeal(foodItem.id) ifadesi kullanılır. Bu ifade, tıklanan butonun ait olduğu foodItem öğesinin id değerini deleteMeal fonksiyonuna argüman olarak geçirir. */}

                        <div className="conf-right-order-part">
                            <p className="price-of-order-conf">${foodItem.totalPrice.toFixed(2)}</p>
                            <button type="reset" className="reset-button-conf" onClick={() => deleteMeal(foodItem.id)}><img src={dustbin} alt="Reset" className="reset-button-conf-img" /></button>
                        </div>
                    </div>
                ))}


                <div className="discount-subtotal-div-line"></div>

                <div className="discount-subtotal-div">
                    <div className="discount-subtotal-div-line">
                        <p className="discount-subtotal-p">Discount : %{discountPercentage}</p>
                        <p className="discount-subtotal-p">-$ {discountedMoney()}</p>
                    </div>
                    <div className="discount-subtotal-div-line">
                        <p className="discount-subtotal-p">Sub total :</p>
                        <p className="discount-subtotal-p">$ {subTotal().toFixed(2)}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OrderConfirmation;