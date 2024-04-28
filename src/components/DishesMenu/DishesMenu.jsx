import "./DishesMenu.scss";
import React, { useState, useEffect } from 'react';

import photo1 from "../../assets/food1.png";
import photo2 from "../../assets/food2.png";
import photo3 from "../../assets/food3.png";
import photo4 from "../../assets/food4.png";
import photo5 from "../../assets/food5.png";
import searchlogo from "../../assets/search.png";


function DishesMenu({ addToOrder }) {

    const dishes = [
        { id: 1, name: "Spicy seasoned seafood noodles", price: 2.29, imageSrc: photo1, coldDish: false, soup: false, quantity: 1 },
        { id: 2, name: "Salted Pasta with mushroom sauce", price: 2.71, imageSrc: photo2, coldDish: false, soup: true, quantity: 1 },
        { id: 3, name: "Beef dumpling in hot and sour soup", price: 2.96, imageSrc: photo3, coldDish: true, soup: false, quantity: 1 },
        { id: 4, name: "Healthy noodle with spinach leaf", price: 3.28, imageSrc: photo2, coldDish: false, soup: true, quantity: 1 },
        { id: 5, name: "Hot spicy fried rice with omelet", price: 3.05, imageSrc: photo4, coldDish: false, soup: false, quantity: 1 },
        { id: 6, name: "Spicy instant noodle with special omelette", price: 5.85, imageSrc: photo5, coldDish: false, soup: false, quantity: 1 },
        { id: 7, name: "Garlic Butter Shrimp Pasta", price: 4.52, imageSrc: photo3, coldDish: false, soup: true, quantity: 1 },
        { id: 8, name: "Rosemary Citrus Roasted Chicken", price: 4.85, imageSrc: photo2, coldDish: true, soup: false, quantity: 1 },
        { id: 9, name: "Smoky Barbecue Beef Brisket", price: 4.19, imageSrc: photo1, coldDish: true, soup: true, quantity: 1 },
        // Diğer yemeklerin bilgileri...
    ];

    // useState ile tarih ve saati tutacak state'i başlat
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        // Her saniye güncellenecek interval fonksiyonu
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Unmount olduğunda interval'ı temizle
        return () => {
            clearInterval(timer);
        };
    }, []);

    // Tarih ve saati formatlama
    const formatDate = (date) => {
        // İstediğiniz formatlama özelliklerini buraya ekleyebilirsiniz.
        // Örneğin: 'April 5, 2024, 10:55:00 AM'
        return date.toLocaleDateString(undefined, {
            year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
        }) + ', ' + date.toLocaleTimeString();
    };

    const [activeTab, setActiveTab] = useState('hot-dishes');

    function filterDishes(dish) {
        const matchesSearch = dish.name.toLowerCase().includes(searchQuery); // Yemek isminin arama sorgusunu içerip içermediğini kontrol et
        if (!matchesSearch) return false;

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
            return dish.coldDish && !dish.soup;
        }
        return true;
    }
    const [searchQuery, setSearchQuery] = useState("");


    function searchMeal(event) {
        setSearchQuery(event.target.value.toLowerCase()); // Kullanıcının girdiğini küçük harfe çevirerek state'i güncelle
    }


    return (<div className="Dishes-All">

        <div className="username-and-search-segment">
            <div className="left-top-of-dishes">
                <h2 className="username-of-hello">Hello, <span className="username-of-hello-color">John Doe</span></h2>
                <p className="today-date">{formatDate(currentDateTime)}</p>
            </div>
            <div className="search-bar-container">
                <img className="search-icon-logo" src={searchlogo} alt="" />
                <input type="text" placeholder="Search for food, coffee, etc..." className="search-bar-of-dishes" onChange={searchMeal} />
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
            <div className="top-segment-for-dishes">
                <h2 className="dishes-title">Choose Dishes</h2>
                <select name="" id="" className="options-for-dishes">
                    <option value="dine-in">Dine In</option>
                    <option value="dine-out">Dine Out</option>
                    <option value="dine-on">Dine On</option>
                    <option value="dine-up">Dine Up</option>
                </select>
            </div>
            <div className="dishes-container">
                {/* dishes.filter(filterDishes): dishes dizisindeki her bir dish öğesini filterDishes
                fonksiyonuna gönderir. filterDishes fonksiyonu, aktif tab'a göre bir yemeğin koşulları karşılayıp karşılamadığını kontrol eder.Koşulları karşılayan (true dönen) yemekler yeni bir dizi içinde bir araya getirilir.  .map(dish => { ... }): Filtrelenmiş dizi üzerinde iterasyon yaparak, her bir dish öğesi için JSX kod bloğu oluşturur. Oluşturulan bu JSX kod blokları, kullanıcı arayüzünde ilgili yemeklerin gösterilmesini sağlar. */}
                {
                    dishes.filter(filterDishes).map(dish => (
                        <button className="dish-card" key={dish.id} onClick={() => addToOrder(dish)}>
                            <img className="dish-image" src={dish.imageSrc} alt={dish.name} />
                            <h3 className="dish-name">{dish.name}</h3>
                            <p className="dish-price">${dish.price}</p>
                        </button>
                    ))
                }
            </div>

        </div>

    </div>);
}
export default DishesMenu