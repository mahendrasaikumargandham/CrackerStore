import React, { useState } from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes"; 
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { auth } from "./firebase";


function Header() {
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

    const [ theme, setTheme ] = useState("dark");

      const themeToggler = () => {
        theme === "light" ? setTheme("dark"): setTheme("light");
      };
    const [{ basket, user }, dispatch] = useStateValue();
    console.log(dispatch);
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="header">
                {/* <Link to="/"> */}
                    <img className="header_logo" src="/images/logo.png" alt="" />
                {/* </Link> */}
                <div className="header_search">
                    <input className="header_searchInput" type="text" />
                    <SearchIcon className="header_searchIcon" />
                </div>
                <div className="header_nav">
                    <div className="header_option">
                        <Link className="header_link" to="/">
                            <span className="header_optionLineTwo">
                            <span class="tooltiptext">Home</span> 
                                <HomeIcon /> 
                            </span>
                        </Link>
                    </div>
                    
                    <div className="header_option">
                        <span className="header_optionLineTwo" onClick={() => themeToggler()}>
                        <span class="tooltiptext">Theme</span> 
                            <LightModeIcon />  
                        </span>
                    </div>
                    <div className="header_option">
                        <Link className="header_link" to="/orders">
                            <span className="header_optionLineTwo">
                                <span class="tooltiptext">Orders</span>
                                <ReceiptIcon />
                            </span>
                        </Link>
                    </div>
                    <Link to="/register">
                        <div onClick={handleAuthenticaton} className="header_option">
                            <span className="header_optionLineTwo">
                                <span class="tooltiptext">{user ? "Signout" : "sign in" }</span> 
                                {user ? <LogoutIcon /> : <LoginIcon /> }  
                            </span>
                        </div>
                    </Link>
                    
                    <div className="header_option">
                        <Link className="header_link" to="/settings">
                            <span className="header_optionLineTwo">
                                <span class="tooltiptext">Settings</span>
                                <SettingsIcon />
                            </span>
                        </Link>
                    </div>
                    
                    
                    <div className="header_option">
                        <Link className="header_link" to='/checkout'>
                            <span className="header_optionLineTwo">
                                <span class="tooltiptext">Cart</span>
                                <ShoppingCartIcon/> {basket.length}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Header
