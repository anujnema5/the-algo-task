import { Search } from "lucide-react";
import { FaBell } from "react-icons/fa";

const Header = () => (
    <header className="header">
        <div className="header-primary">
            <select className="header-select">
                <option>Default</option>
            </select>
            <div className="header-search">
                <Search className="search-icon" size={20} />
                <input
                    type="text"
                    placeholder="Search by doctor's name/ specialty etc"
                    className="search-input"
                />
            </div>
        </div>
        <div className="profile">
            <div className="" style={{position: "relative"}}>
                <FaBell className="notification-icon" size={22} />
                <div className="notification-alert-red"></div>
            </div>
            <div style={{ height: "30px", width: "2px", backgroundColor: "#E6E6E6" }}></div>
            <img
                src="https://img.freepik.com/premium-photo/3d-illustration-medical-doctor_864601-353.jpg?w=360"
                className="profile-pic"
                alt="" />
        </div>
    </header>
);

export default Header;