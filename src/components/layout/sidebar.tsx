import React from 'react';
import { FaHome, FaFlask, FaUserMd, FaHeart, FaPills, FaUserFriends, FaCommentDots, FaMoneyBill, FaCog } from 'react-icons/fa';
import Logo from '../../assets/logo.png'

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="">
                {/* <h2 className='logo'>Medik</h2> */}
                <img src={Logo} alt="" className='logo'/>
                <ul>
                    <li><FaHome /> Home</li>
                    <li><FaFlask /> Lab Tests</li>
                    <li><FaUserMd /> Medicine Order</li>
                    <li><FaHeart /> Favourites</li>
                    <li><FaUserFriends /> Family</li>
                    <li><FaPills /> Prescription</li>
                    <li><FaCommentDots /> Messages</li>
                    <li><FaMoneyBill /> Payments</li>
                    <li><FaCog /> Settings</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
