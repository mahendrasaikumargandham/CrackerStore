import React from 'react'
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import "./Menu.css";

function Menu() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div class = "menu">
        <Link to = "/">Home</Link>
        <Link to = "/orders">Orders</Link>
        <Link to = "/register">Login</Link>
        <Link to = "/settings">Settings</Link>
        <Link to = "/checkout" className='btn'>Cart {basket.length}</Link>
    </div>
  )
}

export default Menu