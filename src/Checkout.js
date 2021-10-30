import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    console.log(dispatch);
    return (
        <div className="checkout">
            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title">Your Cart Items</h2>
                    <div className="checkout_items">
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                        ))}
                    </div>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
