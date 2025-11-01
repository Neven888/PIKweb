import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () =>  {
  return (
    <header class="main-header">
    <div class="top-header-bar">
        <div class="top-header-content">
            <Link to="#" class="join-link">POSTANI ČLAN</Link>
        </div>
    </div>

    <div class="login-button-row">
        <Link to="#" class="login-button">PRIJAVA</Link>
    </div>

    <div class="main-navigation-container">
        <div class="main-navigation-wrapper">
            <nav class="main-nav-left">
                <ul>
                    <li><Link to="#">POČETNA</Link></li>
                    <li><Link to="#">O NAMA</Link></li>
                    <li><Link to="#">EDUKACIJE</Link></li>
                </ul>
            </nav>
            <div class="header-logo">
                <img src="img/pik-header-logo.png" alt="Logo" class="logo" />
            </div>
            <nav class="main-nav-right">
                <ul>
                    <li><Link to="#">ZBIVANJA</Link></li>
                    <li><Link to="#">BLOG</Link></li>
                    <li><Link to="#">KONTAKT</Link></li>
                </ul>
            </nav>
        </div>
    </div>
</header>


);

};

export default Header;
