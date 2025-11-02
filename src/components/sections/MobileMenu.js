import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
    // Dodajemo klasu 'mobile-menu-open' ako je izbornik otvoren
    const menuClass = isOpen ? 'mobile-menu-open' : '';

    return (
        // Uklonite 'main-nav-left' i 'main-nav-right' klase
        <nav className={`mobile-nav-full ${menuClass}`}>
            <ul className="mobile-nav-list">
                {/* Ovdje spajamo sve linkove iz Lijeve i Desne navigacije */}
                <li><Link to="#" className="mobile-link" onClick={onClose}>POČETNA</Link></li>
                <li><Link to="#" className="mobile-link" onClick={onClose}>O NAMA</Link></li>
                <li><Link to="#" className="mobile-link" onClick={onClose}>EDUKACIJE</Link></li>
                
                {/* Dodajte separator ako želite */}
                <li className="mobile-separator"></li>
                
                <li><Link to="#" className="mobile-link" onClick={onClose}>ZBIVANJA</Link></li>
                <li><Link to="#" className="mobile-link" onClick={onClose}>BLOG</Link></li>
                <li><Link to="#" className="mobile-link" onClick={onClose}>KONTAKT</Link></li>
                
                {/* Možete dodati i link za prijavu ovdje */}
                <li className="mobile-login"><Link to="#" className="login-button" onClick={onClose}>PRIJAVA</Link></li>
            </ul>
        </nav>
    );
};

export default MobileMenu;