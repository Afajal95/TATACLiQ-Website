import React from 'react';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">

          {basket?.length === 0 ? (
            <div>
            <h2>Your  shopping Basket is empty</h2>
            <p>
                    You have no items in your basket. To shop with us , click "Add to Basket" button next to the item.<br></br>
                    Happy Shopping!!!
                </p>
            </div>
         ) : (
            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2><hr></hr>
                
                {/* List out all of the checkout Products */}
                {basket.map(item => (
                  <CheckoutProduct
                  item={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
            </div>
          )}
        </div>
            
        );
    }
        

export default Checkout;

