import React from 'react';
import "./RestaurantParams.scss";
import restaurantImg from "@/assets/restaurant.jpg";

function RestaurantParams() {

    return (
        <main className="restaurant-main">
            <h1>Restaurant Page</h1>
            <img src={restaurantImg} alt="" srcSet="" />
        </main>
    );
}

export default RestaurantParams;
