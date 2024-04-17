import { useEffect, useState } from 'react';
import "./OrderConfirmation.scss";


function OrderConfirmation({
  incomingFoodItems,
  deleteMeal,
  handleCustomerNoteChange,
}) {
  const [localFoodItems, setLocalFoodItems] = useState([]);
  // foodItems artık bir state
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    console.log("Yeni food items alındı:", incomingFoodItems);
    setLocalFoodItems(incomingFoodItems);
    if (incomingFoodItems) {
      // Assuming incomingFoodItems is an array of food items
      setFoodItems(incomingFoodItems);
    }
  }, [incomingFoodItems]);

  const addingButtonImg = "../src/assets/adding-button.png";
  const dustbin = "../src/assets/dustbin-logo.png";

  let discountPercentage = 20;



  // isNaN fonksiyonu, bir değerin NaN olup olmadığını kontrol eder. Eğer parametre olarak verilen değer NaN ise, true döner; aksi halde false döner.
  // ! operatörü, isNaN fonksiyonunun sonucunu tersine çevirir. Yani, eğer parsedQuantity NaN değilse, !isNaN(parsedQuantity) ifadesi true olur.
  const handlePieceChange = (id, value) => {
    setFoodItems(
      foodItems.map((item) => {
        if (item.id === id) {
          const parsedQuantity = parseInt(value, 10);
          const quantity = !isNaN(parsedQuantity) ? parsedQuantity : 0;
          return { ...item, quantity, totalPrice: quantity * item.price };
        }
        return item;
      })
    );
  };

  function subTotal() {
    // subtotal okay
    let total = 0;
    for (const element of incomingFoodItems) {
      total += element.price;
    }
    console.log(total, "BU TOTAL");
    let discountMoney = 100 - discountPercentage;
    total = total * (discountMoney / 100);
    return total.toFixed(2);
  }

  function discountedMoney() {
    // discountedmoney okay
    let total = 0;
    for (const element of incomingFoodItems) {
      total += element.price;
    }
    let discountMoney = total * (discountPercentage / 100);
    return discountMoney;
  }

  return (
    <div className="order-conf-main">
      <div className="title-order-conf">
        <div className="part-of-title-conf">
          <h1 className="h1-order-conf">Confirmation</h1>
          <h3 className="h3-order-conf">Orders #34562</h3>
        </div>
        <div className="part-of-title-conf">
          <img
            src={addingButtonImg}
            alt=""
            srcset=""
            className="adding-button-class"
          />
        </div>
      </div>

      {/* Map Metodu: foodItems.map(...) kullandığınızda, foodItems dizisindeki her bir öğe için bir döngü oluşturursunuz. Bu döngü içinde, her öğenin kendine ait bir div bloğu (ve içinde çöp kutusu butonu) oluşturulur. Her bir div ve içerdiği buton, o anki döngüdeki öğenin (foodItem) verileriyle (özellikle id değeriyle) ilişkilendirilmiş olur. */}

      {incomingFoodItems.map((foodItem) => (
        <div className="order-conf-body" key={foodItem.id}>
          <div className="conf-left-order-part">
            <div className="conf-pic-and-name-and-price">
              <div className="conf-pic-and-name-and-price-2">
                <img
                  src={foodItem.imageSrc}
                  alt=""
                  className="food-photos-order-conf"
                />
                <div className="name-and-price">
                  <p className="name-and-price-p">{foodItem.name}</p>
                  <p className="name-and-price-p">${foodItem.price}</p>
                </div>
              </div>
              <input
                type="text"
                placeholder="0"
                className="total-piece-of-food"
                onChange={(e) => handlePieceChange(foodItem.id, e.target.value)}
                value={foodItem.quantity || ""}
              />
            </div>

            <input
              type="text"
              onChange={(e) =>
                handleCustomerNoteChange(foodItem.id, e.target.value)
              }
              className="food-customer-note"
              placeholder="Order note..."
              value={foodItem.OrderNote}
            />
          </div>

          {/* OnClick Olayı: Çöp kutusu butonuna tıklandığında tetiklenen onClick olayında, deleteMeal(foodItem.id) ifadesi kullanılır. Bu ifade, tıklanan butonun ait olduğu foodItem öğesinin id değerini deleteMeal fonksiyonuna argüman olarak geçirir. */}

          <div className="conf-right-order-part">
            <p className="price-of-order-conf">
              ${foodItem.price * foodItem.quantity}
            </p>
            <button
              type="reset"
              className="reset-button-conf"
              onClick={() => deleteMeal(foodItem.id)}
            >
              <img
                src={dustbin}
                alt="Reset"
                className="reset-button-conf-img"
              />
            </button>
          </div>
        </div>
      ))}

      <div className="discount-subtotal-div-line"></div>

      <div className="discount-subtotal-div">
        <div className="discount-subtotal-div-line">
          <p className="discount-subtotal-p">
            Discount : %{discountPercentage}
          </p>
          <p className="discount-subtotal-p">
            -$ {discountedMoney().toFixed(2)}
          </p>
        </div>
        <div className="discount-subtotal-div-line">
          <p className="discount-subtotal-p">Sub total :</p>
          <p className="discount-subtotal-p">$ {subTotal()}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
