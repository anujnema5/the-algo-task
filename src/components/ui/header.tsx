import React from 'react';
import { FaBell } from 'react-icons/fa';
// import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-left">
                <select className="header-select">
                    <option>Default</option>
                </select>
                <input type="text" placeholder="Search by doctor’s name/ speciality etc" className="search-input" />
            </div>
            <div className="header-right">
                <FaBell />
                <img src="https://via.placeholder.com/30" alt="Profile" className="profile-pic" />
            </div>
        </header>
    );
};

export default Header;
