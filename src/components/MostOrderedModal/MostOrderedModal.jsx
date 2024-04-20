import { useState } from "react";
import "./MostOrderedModal.scss";

function MostOrderedModal({ mostOrderedFoods, handleModalState }) {
  return (
    <div className="mainContainer">
      <div className="innerCont">
        <h1>Most Ordered Foods</h1>
        <div>
          {mostOrderedFoods.map((food) => (
            <h3>
              {food.name} | {food.quantity} orders
            </h3>
          ))}
        </div>
        <button onClick={handleModalState}>Close (X)</button>
      </div>
    </div>
  );
}

export default MostOrderedModal;
