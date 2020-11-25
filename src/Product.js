import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      //add items to basket...
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id: id,
              title: title,
              price: price,
              rating: rating,
              image: image
          }
      })
    };
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                <img className="rating_img" src="https://u.realgeeks.media/anaperezhomes/5-star-review-png-8.png" alt="" />
            </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}><strong>Add to basket</strong></button>
            
        </div>
    );
}

export default Product;
