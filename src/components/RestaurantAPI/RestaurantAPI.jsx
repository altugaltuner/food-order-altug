import "@/components/RestaurantAPI/RestaurantAPI.scss";
import React, { useState, useEffect } from 'react';

function RestaurantAPI() {
    const [products, setProducts] = useState([]); // Use an array to store multiple products
    const id = products.length; // Get the number of products to generate a new ID

    const randomObject = {
        id: id + 1,
        title: "Random Product",
        price: 9.99,
        description: "This is a random product",
        image: "https://m.media-amazon.com/images/I/61766sr8fiL._AC_SX569_.jpg"
    };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data)) // Store the fetched array of products
            .catch(error => console.error('Error fetching products:', error));
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    function handleAddingNewProduct() {
        console.log("Adding new product...");
        setProducts([...products, randomObject]); // Add a new product to the products array
    }

    // Function to truncate text to 100 characters
    const truncateDescription = (description) => {
        if (description.length > 100) {
            return description.substring(0, 100) + '...'; // Truncate and add ellipsis
        }
        return description;
    };

    function deleteFromApi(productId) {
        console.log("deleteFromApi çalıştı");
        setProducts(products.filter(product => product.id !== productId));
        return products;
    };

    console.log(products);

    return (
        <div className="products-api-main">
            {products.length === 0 ? (
                <p className="products-api-loading">Downloading...</p>
            ) : (
                products.slice(0, 25).map((product) => (
                    <div className="products-api-div" key={product.id}>
                        <p className="products-api-product-id">{product.id}</p>
                        <p className="products-api-product-title">{product.title}</p>
                        <p className="products-api-product-price">{product.price}</p>
                        <button className="delete-from-api" onClick={() => deleteFromApi(product.id)}>Delete</button>
                        <p className="products-api-product-description">{truncateDescription(product.description)}</p>
                        <img className="products-api-product-image" src={product.image} alt={product.title} />
                    </div>
                ))
            )}
            <div className="deleting-area-products">
                <button className="products-api-adding-new-item" onClick={handleAddingNewProduct}>EKLE</button>
            </div>

        </div>
    );
}

export default RestaurantAPI;