import React, { useRef } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from "../firebase";

function Header() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    const [{ basket, user }, dispatch] = useStateValue();
    console.log(dispatch);
    return (
        <div className="header">
            <div className="header_logo">
                <h2>Cracker Store</h2>
            </div>
            <nav className="header_nav">
                <div className="header_option">
                    <Link className="header_link" to="/">
                        <span className="header_optionLineTwo">
                            Home
                        </span>
                    </Link>
                </div>
                <div className="header_option">
                    <Link className="header_link" to="/orders">
                        <span className="header_optionLineTwo">
                            Orders
                        </span>
                    </Link>
                </div>
                <Link to="/register">
                    <div onClick={handleAuthenticaton} className="header_option">
                        <span className="header_optionLineTwo">
                            {user ? "logout" : "login" }
                        </span>
                    </div>
                </Link>
                
                <div className="header_option">
                    <Link className="header_link" to="/settings">
                        <span className="header_optionLineTwo">
                            settings
                        </span>
                    </Link>
                </div>
                
                
                <div className="header_option">
                    <Link className="header_link" to='/checkout'>
                        <span className="header_optionLineButton">
                            cart {basket.length}
                        </span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
