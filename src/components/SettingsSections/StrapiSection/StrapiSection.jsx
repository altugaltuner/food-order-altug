import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StrapiSection.scss';

function StrapiSection() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/restaurants?populate[image]=*&populate[comments]=*')
            .then(response => {
                setRestaurants(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching restaurants:', error);
            });
    }, []);

    // Veri yapısını daha iyi anlamak için description alanını konsola yazdırma
    useEffect(() => {
        if (restaurants.length > 0) {
            // console.log('Description example:', restaurants[0].attributes.description[0].children[0].text);
            // console.log('Name example:', restaurants[0].attributes.name);
            console.log('Image example:', restaurants[0])
            // console.log('Image URL example:', restaurants[0].attributes.image.data[0].attributes.url);
        }
    }, [restaurants]);

    return (
        <div className='strapi-main'>
            {restaurants.length > 0 ? (
                restaurants.map(restaurant => (
                    <div className='restaurants-of-strapi' key={restaurant.id}>
                        {restaurant.attributes.image && restaurant.attributes.image.data ? (
                            restaurant.attributes.image.data.map((img, index) => (
                                <img className='strapi-restaurant-image' key={index} src={`http://localhost:1337${img.attributes.url}`} alt={restaurant.attributes.name} />
                            ))
                        ) : (
                            <p>No image available</p>
                        )}
                        <h2 className='restaurant-name-strapi'>{restaurant.attributes.name}</h2>
                        {restaurant.attributes.description.map((desc, index) => (
                            <p className='restaurant-desc-strapi' key={index}>{desc.children[0].text}</p>
                        ))}
                        <div>------</div>



                    </div>
                ))
            ) : (
                <p>No restaurants found!</p>
            )}

        </div>
    );
}

export default StrapiSection;
