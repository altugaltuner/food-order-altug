
import React, { useState } from 'react'; // useState'i içe aktarın
import './Navbar.scss';

function Navbar() {

    const logoNav = "/src/assets/Logo.png";
    // Seçili nav item'ın ID'sini tutacak state
    const [activeNavId, setActiveNavId] = useState(null);

    const navItems = [
        { id: 'home-nav-id', href: '#Home.html', logo: "/src/assets/Home.png" },
        { id: 'about-nav-id', href: '#Discount.html', logo: "/src/assets/Discount.png" },
        { id: 'services-nav-id', href: '#Graph.html', logo: "/src/assets/Graph.png" },
        // Diğer nav itemlarınızı bu şekilde ekleyebilirsiniz...
        { id: 'contact-nav-id-message', href: '#Message.html', logo: "/src/assets/Message.png" },
        { id: 'contact-nav-id-notification', href: '#Notification.html', logo: "/src/assets/Notification.png" },
        { id: 'contact-nav-id-settings', href: '#Settings.html', logo: "/src/assets/Setting.png" },
        { id: 'contact-nav-id-logout', href: '#Logout.html', logo: "/src/assets/Logout.png" },
    ];

    const handleNavClick = (id) => {
        setActiveNavId(id);
    };

    return (
        <div>
            <nav className='main-nav'>
                <ul className='mainnet-logo-second'>

                    <li className='logo-nav'><img src={logoNav} alt="" /></li>

                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className="single-nav"
                            id={item.id}
                            onClick={() => handleNavClick(item.id)}>
                            <div className={`parent-inner-container-for-nav ${activeNavId === item.id ? 'active' : ''}`}>
                                <div className={`inner-container-for-nav ${activeNavId === item.id ? 'active' : ''}`}>
                                    <a href={item.href} className='a-logo-nav-photo' role="button" tabIndex="0">
                                        <img src={item.logo} alt="" className='other-nav-logo' />
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;