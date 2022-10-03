import React from 'react'
import "../themes/themes";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className = "footer-options">
                <div className='opt1'>
                    <h2>Get to Know Us</h2>
                    <Link to = "/">About Us</Link>
                    <Link to = "/">Careers</Link>
                    <Link to = "/">Ekart Science</Link>
                    <Link to = "/">Gift Ekart</Link>
                </div>
                <div className='opt2'>
                    <h2>Connect With Us</h2>
                    <Link to = "/">Facebook</Link>
                    <Link to = "/">Twitter</Link>
                    <Link to = "/">Instagram</Link>
                </div>
                <div className='opt3'>
                    <h2>Make Money with Us</h2>
                    <Link to = "/">Sell on Ekart</Link>
                    <Link to = "/">Sell under Ekart Accelerator</Link>
                    <Link to = "/">Advertise your Products</Link>
                    <Link to = "/">Ekart Pay on Merchants</Link>
                </div>
                <div className='opt4'>
                    <h2>Let Us Help You</h2>
                    <Link to = "/">Your Account</Link>
                    <Link to = "/">Returns Centre</Link>
                    <Link to = "/">100% Purchase Protection</Link>
                    <Link to = "/">Ekart App Download</Link>
                    <Link to = "/">Amazon Assistant Download</Link>
                    <Link to = "/">Help</Link>
                </div>
            </div>
            <h2 className="footer_text">Developed with <span>♥️</span>  by Mahendra Gandham</h2>
        </div>
    )
}

export default Footer
