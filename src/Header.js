import React, { useState } from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes"; 
import LightModeIcon from '@mui/icons-material/LightMode';

function Header() {

    const [ theme, setTheme ] = useState("dark");

      const themeToggler = () => {
        theme === "light" ? setTheme("dark"): setTheme("light");
      };
    const [{ basket }, dispatch] = useStateValue();
    console.log(dispatch);
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="header">
                <Link to="/">
                    <img className="header_logo" src="/images/logo.png" alt="" />
                </Link>
                <div className="header_search">
                    <input className="header_searchInput" type="text" />
                    <SearchIcon className="header_searchIcon" />
                </div>
                <div className="header_nav">
                    <div className="header_option">
                        {/* <span className="header_optionLineOne">Last</span> */}
                        <span className="header_optionLineTwo" onClick={() => themeToggler()}><LightModeIcon /></span>
                    </div>
                    <div className="header_option">
                        {/* <span className="header_optionLineOne">Your</span> */}
                        <span className="header_optionLineTwo"><LoginIcon /></span>
                    </div>
                    <Link to="/settings">
                        <div className="header_option">
                            {/* <span className="header_optionLineOne">Your</span> */}
                            <span className="header_optionLineTwo"><SettingsIcon /></span>
                        </div>
                    </Link>
                    <Link to='/checkout'>
                        <div className="header_option">
                            {/* <span className="header_optionLineOne">Your</span> */}
                            <span className="header_optionLineTwo"><ShoppingCartIcon/> {basket.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Header
