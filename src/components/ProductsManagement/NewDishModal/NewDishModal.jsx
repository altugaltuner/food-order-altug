import { useState, useEffect } from "react";

import "./NewDishModal.scss";

function DishModal({ dish, handleModalState, onSave, dishes }) {
    const [dishName, setDishName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        if (dish) {
            setDishName(dish.name);
            setPrice(dish.price);
            setImage(dish.imageSrc);
        }
    }, [dish]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newDish = {
            ...dish,
            id: dish ? dish.id : dishes.length + 1,  // Yeni yemek için yeni bir ID atayın
            name: dishName,
            price: parseFloat(price),
            imageSrc: image,
        };

        onSave(newDish);
        handleModalState();  // Modal'ı kapat
        clearForm();  // Formu temizle
    };

    const clearForm = () => {
        setDishName("");
        setPrice("");
        setImage("");
    };

    return (
        <div className="mainContainer">
            <div className="innerCont">
                <h1>{dish ? "Edit Dish" : "New Dish"}</h1>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <input type="file" onChange={e => setImage(URL.createObjectURL(e.target.files[0]))} />
                    <input type="text" placeholder="Enter dish name" value={dishName} onChange={e => setDishName(e.target.value)} />
                    <input type="text" placeholder="Enter it's price" value={price} onChange={e => setPrice(e.target.value)} />
                    <button type="submit">{dish ? "Save Changes" : "Add Dish"}</button>
                </form>
                <button onClick={handleModalState}>Close (X)</button>
            </div>
        </div>
    );
}

export default DishModal;
