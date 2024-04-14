import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link komponentini import edin
import './Navbar.scss';

function Navbar() {
    const logoNav = "/src/assets/Logo.png";
    const [activeNavId, setActiveNavId] = useState(null);

    const navItems = [
        { id: 'home-nav-id', to: '/homepage', logo: "/src/assets/Home.png" },
        { id: 'about-nav-id', to: '/dashboard', logo: "/src/assets/Discount.png" },
        { id: 'services-nav-id', to: '/settings', logo: "/src/assets/Graph.png" },
        // Diğer nav itemlarınızı buraya ekleyin...
        { id: 'contact-nav-id-message', to: '/homepage', logo: "/src/assets/Message.png" },
        { id: 'contact-nav-id-notification', to: '/dashboard', logo: "/src/assets/Notification.png" },
        { id: 'contact-nav-id-settings', to: '/settings', logo: "/src/assets/Setting.png" },
        { id: 'contact-nav-id-logout', to: '/login', logo: "/src/assets/Logout.png" },
    ];

    const handleNavClick = (id) => {
        setActiveNavId(id);
    };

    return (
        <nav className='mainnet-logo-second'>
            <li className='logo-nav'>
                <Link to="/homepage"><img src={logoNav} alt="Site Logo" /></Link>
            </li>
            {navItems.map(item => (
                <li key={item.id} className="single-nav" id={item.id} onClick={() => handleNavClick(item.id)}>
                    <Link to={item.to} className={`parent-inner-container-for-nav ${activeNavId === item.id ? 'active' : ''}`}>
                        <div className={`inner-container-for-nav ${activeNavId === item.id ? 'active' : ''}`}>
                            <a className='a-logo-nav-photo' role="button" tabIndex="0">
                                <img src={item.logo} alt="" className='other-nav-logo' />
                            </a>
                        </div>
                    </Link>
                </li>
            ))}
        </nav>
    );
}

export default Navbar;
