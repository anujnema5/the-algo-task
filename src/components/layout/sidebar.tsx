import { navItems } from "../../data/data";
import Logo from '../../assets/logo.png'

const Sidebar = () => (
    <aside className="sidebar">
        <img src={Logo} alt="" className="logo" />
        <nav className="menu">
            {navItems.map((item, index) => (
                <a
                    key={item.text}
                    href="#"
                    className={`menu-item ${index === 0 ? "active" : ""}`}
                >
                    <item.Icon className='sidebar-icon' />
                    {item.text}
                </a>
            ))}
        </nav>
    </aside>
);

export default Sidebar;