import { useState } from "react";
import "./NewDishModal.scss";

function NewDishModal({ handleModalState }) {
    return (
        <div className="mainContainer">
            <div className="innerCont">
                <h1>New Dish</h1>
                <form>
                    <input type="text" placeholder="Enter dish name" />
                    <input type="text" placeholder="Enter it's price" />
                    <button type="submit">Add Dish</button>
                </form>
                <button onClick={handleModalState}>KAPAT(X)</button>
            </div>
        </div>
    );
}

export default NewDishModal;
