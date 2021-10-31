import React  from 'react';
import "./Settings.css";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Settings() {
    return (
        <div className="settings">
            <div className="settings_container">
                <div className="settings_heading">
                    <Link to='/'>
                        <CloseIcon className="settings_close" />
                    </Link>
                </div>
                <Link to="/checkout">
                    <h2>Cart</h2>
                </Link>
                <h2>History</h2>
                <h2>Login</h2>
                <h2>About</h2>
                <h2>Contact</h2>
               
            </div>
        </div>
    )
}

export default Settings
