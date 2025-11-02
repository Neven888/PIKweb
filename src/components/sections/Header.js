import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu'; // Uvoz nove komponente

const Header = () =>  {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // NE TREBA nam menuClass ovdje jer se mobilni izbornik kontrolira
    // izravno preko komponente MobileMenu.

    return (
        <header className="main-header">
            <div className="top-header-bar">
                <div className="top-header-content">
                    <Link to="#" className="join-link">POSTANI ČLAN</Link>
                </div>
            </div>

            <div className="login-button-row">
                <Link to="#" className="login-button">PRIJAVA</Link>
            </div>

            <div className="main-navigation-container">
                <div className="main-navigation-wrapper">
                    
                    {/* 1. Hamburger Gumb: Vidljiv samo na mobitelu (CSS kontrola) */}
                    <button 
                        className={`hamburger-button ${isMenuOpen ? 'is-active' : ''}`} 
                        onClick={toggleMenu} 
                        aria-expanded={isMenuOpen} 
                        aria-label="Izbornik"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                    
                    {/* 2. Desktop Navigacija (Lijevo): Skriva se na mobitelu (CSS kontrola) */}
                    <nav className="main-nav-left">
                        <ul>
                            <li><Link to="#">POČETNA</Link></li>
                            <li><Link to="#">O NAMA</Link></li>
                            <li><Link to="#">EDUKACIJE</Link></li>
                        </ul>
                    </nav>
                    
                    <div className="header-logo">
                        <img src="img/pik-header-logo.png" alt="Logo" className="logo" />
                    </div>
                    
                    {/* 3. Desktop Navigacija (Desno): Skriva se na mobitelu (CSS kontrola) */}
                    <nav className="main-nav-right">
                        <ul>
                            <li><Link to="#">ZBIVANJA</Link></li>
                            <li><Link to="#">BLOG</Link></li>
                            <li><Link to="#">KONTAKT</Link></li>
                        </ul>
                    </nav>

                    {/* 4. Mobilna Navigacija: Vidljiva samo kada se aktivira i samo na mobitelu (CSS i JS kontrola) */}
                    <MobileMenu 
                        isOpen={isMenuOpen} 
                        // Prosljeđujemo funkciju za zatvaranje (ako klikne link)
                        onClose={toggleMenu}
                    />

                </div>
            </div>
        </header>
    );
};

export default Header;