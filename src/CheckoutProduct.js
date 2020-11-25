import React from 'react';
import "./CheckoutProduct.css"

function CheckoutProduct({ id, title, price, rating, image}) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="" />

            <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
                
            </p>
            <div>
                <img className="checkoutProduct_rating" src="https://u.realgeeks.media/anaperezhomes/5-star-review-png-8.png" alt="" />
            </div>
            <button>Remove from basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct;
