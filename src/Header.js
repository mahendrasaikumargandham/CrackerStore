import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    console.log(dispatch);
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="/images/Logo.png" alt="" />
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Location</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">View</span>
                    <span className="header_optionLineTwo">More</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Pre</span>
                    <span className="header_optionLineTwo">Items</span>
                </div>
                <Link to='/checkout'>
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Cart {basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
