import "./DishesMenu.scss";
import React, { useState, useEffect } from 'react';

import photo1 from "../../assets/food1.png";
import photo2 from "../../assets/food2.png";
import photo3 from "../../assets/food3.png";
import searchlogo from "../../assets/search.png";


function DishesMenu() {

    const dishes = [
        { id: 1, name: "Spicy seasoned seafood noodles", price: 2.29, imageSrc: photo1 },
        { id: 2, name: "Salted Pasta with mushroom sauce", price: 2.70, imageSrc: photo2 },
        { id: 3, name: "Beef dumpling in hot and sour soup", price: 2.96, imageSrc: photo3 },
        { id: 4, name: "Healthy noodle with spinach leaf", price: 3.20, imageSrc: photo2 },
        { id: 5, name: "Hot spicy fried rice with omelet", price: 3.05, imageSrc: photo1 },
        { id: 6, name: "Spicy instant noodle with special omelette", price: 5.85, imageSrc: photo3 },
        { id: 7, name: "Garlic Butter Shrimp Pasta", price: 4.52, imageSrc: photo3 },
        { id: 8, name: "Rosemary Citrus Roasted Chicken", price: 4.80, imageSrc: photo1 },
        { id: 9, name: "Smoky Barbecue Beef Brisket", price: 4.10, imageSrc: photo1 },
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

    return (<div>

        <div className="username-and-search-segment">
            <div className="left-top-of-dishes">
                <h2 className="username-of-hello">Hello, <span className="username-of-hello-color">John Doe</span></h2>
                <p className="today-date">{formatDate(currentDateTime)}</p>
            </div>
            <div className="search-bar-container">
                <img className="search-icon-logo" src={searchlogo} alt="" />
                <input type="text" placeholder="Search for food, coffee, etc..." className="search-bar-of-dishes" />
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
                {dishes.map(dish => (
                    <div className="dish-card" key={dish.id}>
                        <img className="dish-image" src={dish.imageSrc} alt={dish.name} />
                        <h3 className="dish-name">{dish.name}</h3>
                        <p className="dish-price">${dish.price}</p>
                    </div>
                ))}
            </div>

        </div>

    </div>);
}
export default DishesMenu