import React, { useState } from 'react'
import { useEffect } from 'react';
import { db } from "./firebase";
import "./Orders.css";
import Order from "./Order";
import { useStateValue } from './StateProvider';
function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    console.log(basket);
    console.log(dispatch);
    useEffect(() => {
        if(user) {
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => (setOrders(snapshot.docs.map(doc => ({ 
                id: doc.id,
                data: doc.data()
                })))
            ))          
        } else {
            setOrders([])
        }
    }, [user])  
    return (
        <div className="orders">
            <div className="orders_order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
