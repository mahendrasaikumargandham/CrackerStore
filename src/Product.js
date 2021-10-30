import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';
import "./Home";
function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    function addToBasket() {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    function addResultFunc() {
        addToBasket()
        // addPopUp()
    }

    return (
            <div className="product">
                <div className="product_info">
                    <p className="product_title">{title}</p>
                    <p className="product_price"><small>₹</small><strong>{price}</strong></p>
                    <div className="product_rating">
                        {Array(rating).fill().map((_,i) => (<p>★</p>))}
                    </div>
                </div>
                
                    <img src={image} alt="" />
                    <div className="product_buttons">
                        <button>Buy now</button>
                        <button onClick={addResultFunc}>Add to cart</button>
                    </div>      
            </div>
        
    )
}

export default Product
