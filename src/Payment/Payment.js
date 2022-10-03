import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from "react-router-dom";
import axios from "../axios";
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import "./Payment.css";
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import { db } from "../firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements(''); 
    console.log(elements);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    console.log(disabled);
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret);
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
        console.log(payload);

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout <Link to="/checkout">{basket.length} items</Link></h1>
                <div className="payment_section">
                    <div className="payment_title"><h2>Address.</h2></div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>D.No: 1-2-3,</p>
                        <p>Your Street, Your Dist.</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title"><h2>Review Items & Delivery</h2></div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                hideButton
                            />
                        ))}
                    </div>
                </div>
                <div className="payment_section">
                        <div className="payment_title">
                            <h2>Payment Method</h2>
                        </div>
                        <div className="payment_details">
                            
                                <form onSubmit={handleSubmit}>
                                    <CardElement onSubmit={handleChange} className="payment_cardElement" />
                                    <div className="payment_priceContainer">
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <h3>Order Total: {value}</h3>
                                            )}
                                            decimalScale={2}
                                            value={getBasketTotal(basket)}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"₹"}
                                            />
                                    </div>
                                    <button disabled={processing || succeeded}><span>{processing ? "Processing" : "Buy Now"}</span></button>
                                    {error && <div>{error}</div>}
                                </form>
                            
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
