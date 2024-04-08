import { useState } from "react";
import "./OrderConfirmation.scss";

function OrderConfirmation() {

    let [choosedTotalPieces, setChoosedTotalPieces] = useState({});
    let [priceOfOrder, setpriceOfOrder] = useState(0);

    // foodItems artık bir state
    const [foodItems, setFoodItems] = useState([
        { id: 1, name: "Spicy seasoned seafood noodles", price: 2.29, imageSrc: "../src/assets/food1.png", quantity: 0, totalPrice: 0 },
        { id: 2, name: "Salted Pasta with mushroom sauce", price: 2.69, imageSrc: "../src/assets/food1.png", quantity: 0, totalPrice: 0 },
        { id: 3, name: "Beef Dumpling in hot and sour soup", price: 2.99, imageSrc: "../src/assets/food1.png", quantity: 0, totalPrice: 0 },
        { id: 4, name: "Healthy noodle with spinach leaf", price: 3.29, imageSrc: "../src/assets/food1.png", quantity: 0, totalPrice: 0 },
    ]);

    // Bu ifadeyle, kullanıcının girdiği value değerinin boş bir string olup olmadığı ya da sadece sayılardan mı oluştuğu kontrol edilir.
    // Eğer value boş bir stringse veya sadece sayılardan oluşuyorsa, value'yu sayıya çevirir (parseInt(value, 10)). Değilse, miktarı 0 olarak ayarlar.
    // Bu, yalnızca geçerli miktarların kaydedilmesini sağlar.
    const handlePieceChange = (id, value) => {
        setFoodItems(foodItems.map(item => {
            if (item.id === id) {
                const quantity = value === '' || (/^\d+$/).test(value) ? parseInt(value, 10) : 0;
                return { ...item, quantity, totalPrice: quantity * item.price };
                // Mevcut item objesinin bir kopyası alınır (...item), ve quantity ile totalPrice özellikleri yeni hesaplanan değerlerle güncellenir.
            }
            return item;
            // Eğer mevcut item'ın idsi fonksiyona verilen id ile eşleşmiyorsa, item herhangi bir değişiklik yapılmadan direkt olarak dönülür.
        }));
    };

    // Silme işlevi : DeleteMeal Fonksiyonu: deleteMeal fonksiyonu, aldığı id değerine göre hangi yemeğin silineceğini anlar. Fonksiyon, filter metoduyla foodItems dizisinde dolaşır ve her bir öğenin id değeri ile fonksiyona argüman olarak verilen id değerini karşılaştırır. Eşleşmeyen (yani silinmesi gerekmeyen) öğeler yeni bir dizi oluşturmak üzere kullanılır. Eşleşen öğe (silinmesi gereken yemek) bu yeni dizide yer almaz.
    const deleteMeal = (id) => {
        const newFoodItems = foodItems.filter(item => item.id !== id);
        setFoodItems(newFoodItems);
    };


    const addingButtonImg = "../src/assets/adding-button.png";
    const dustbin = "../src/assets/dustbin-logo.png";
    const food1 = "../src/assets/food1.png";



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
                                <div className="bitmiyor">
                                    <img src={foodItem.imageSrc} alt="" className="food-photos-order-conf" />
                                    <div className="name-and-price">
                                        <p className="name-and-price-p">{foodItem.name}</p>
                                        <p className="name-and-price-p">${foodItem.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <input type="text" className="total-piece-of-food" onChange={(e) => handlePieceChange(foodItem.id, e.target.value)}
                                    value={foodItem.quantity || ''}
                                />

                            </div>

                            <input type="text" className="food-customer-note" placeholder="Order note..." />
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
