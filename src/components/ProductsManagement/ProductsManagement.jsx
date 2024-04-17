import "./ProductsManagement.scss";
import React, { useState, useEffect } from 'react';


import photo4 from "../../assets/food4.png";
import photo5 from "../../assets/food5.png";

import filterPhoto from "../../assets/Filter.png";
import plusLogo from "../../assets/plus.png";
import NewDishModal from "./NewDishModal/NewDishModal";


function ProductsManagement() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleModalState() {
        setIsModalOpen((prevModalState) => !prevModalState);
    }

    const dishes = [
        { id: 1, name: "Spicy seasoned seafood noodles", price: 2.29, imageSrc: photo5, coldDish: false, soup: false },
        { id: 2, name: "Salted Pasta with mushroom sauce", price: 2.70, imageSrc: photo5, coldDish: false, soup: true },
        { id: 3, name: "Beef dumpling in hot and sour soup", price: 2.96, imageSrc: photo4, coldDish: true, soup: false },
        { id: 4, name: "Healthy noodle with spinach leaf", price: 3.20, imageSrc: photo4, coldDish: false, soup: true },
        { id: 5, name: "Hot spicy fried rice with omelet", price: 3.05, imageSrc: photo5, coldDish: false, soup: false },

    ];


    const [activeTab, setActiveTab] = useState('hot-dishes');

    function filterDishes(dish) {
        if (activeTab === 'hot-dishes') {
            return !dish.coldDish || dish.coldDish; //hepsi
        } else if (activeTab === 'cold-dishes') {
            return dish.coldDish && !dish.soup;
        } else if (activeTab === 'soup') {
            return !dish.coldDish && dish.soup;
        } else if (activeTab === 'grill') {
            return dish.coldDish && !dish.soup;
        } else if (activeTab === 'appetizer') {
            return !dish.coldDish && dish.soup;
        } else if (activeTab === 'dessert') {
            return !dish.coldDish || dish.coldDish;
        }
        return true;
    }

    return (<div className="products-managements-main">


        <div className="left-top-of-dishes">
            <h2 className="username-of-hello">Products Management</h2>

            <div className="filter-order-btn">
                <img className="filter-order-btn-img" src={filterPhoto} alt="filter-icon" />
                <select className="filter-order-select">
                    <option value="">Manage Categories</option>
                    <option value="highest">Highest Payment</option>
                    <option value="lowest">Lowest Payment</option>
                    <option value="status">Status</option>
                </select>
            </div>

        </div>


        <div className="category-tabs-dishes">
            <div className="category-tabs">
                <button className={activeTab === 'hot-dishes' ? 'active' : ''} onClick={() => setActiveTab('hot-dishes')}>Hot Dishes</button>
                <button className={activeTab === 'cold-dishes' ? 'active' : ''} onClick={() => setActiveTab('cold-dishes')}>Cold Dishes</button>
                <button className={activeTab === 'soup' ? 'active' : ''} onClick={() => setActiveTab('soup')}>Soup</button>
                <button className={activeTab === 'grill' ? 'active' : ''} onClick={() => setActiveTab('grill')}>Grill</button>
                <button className={activeTab === 'appetizer' ? 'active' : ''} onClick={() => setActiveTab('appetizer')}>Appetizer</button>
                <button className={activeTab === 'dessert' ? 'active' : ''} onClick={() => setActiveTab('dessert')}>Dessert</button>
            </div>

        </div>

        <div className="dishes-main">
            <div className="dishes-container">
                {/* dishes.filter(filterDishes): dishes dizisindeki her bir dish öğesini filterDishes
                fonksiyonuna gönderir. filterDishes fonksiyonu, aktif tab'a göre bir yemeğin koşulları karşılayıp karşılamadığını kontrol eder.Koşulları karşılayan (true dönen) yemekler yeni bir dizi içinde bir araya getirilir.  .map(dish => { ... }): Filtrelenmiş dizi üzerinde iterasyon yaparak, her bir dish öğesi için JSX kod bloğu oluşturur. Oluşturulan bu JSX kod blokları, kullanıcı arayüzünde ilgili yemeklerin gösterilmesini sağlar. */}

                <button onClick={handleModalState} className="dish-card-adding-segment">
                    <img src={plusLogo} alt="plus logo" />
                    <p className="segment-p-new-dish">Add New Dish</p>
                </button>
                {
                    dishes.filter(filterDishes).map(dish => (
                        <div className="dish-card" key={dish.id}>
                            <img className="dish-image" src={dish.imageSrc} alt={dish.name} />
                            <h3 className="dish-name">{dish.name}</h3>
                            <p className="dish-price">${dish.price}</p>
                            <button className="edit-dish-btn">Edit Dish</button>
                        </div>
                    ))
                }
            </div>

        </div>
        <div className="discard-or-save-changes">
            <button className="discard-changes-btn">Discard Changes</button>
            <button className="save-changes-btn">Save Changes</button>
        </div>
        {isModalOpen && (
            <NewDishModal handleModalState={handleModalState} />
        )}
    </div>);
}
export default ProductsManagement;