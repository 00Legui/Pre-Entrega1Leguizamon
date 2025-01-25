import React from 'react';
import './NavBar.css';

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Logo</a>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="/productos" className="nav-link">Productos</a>
          </li>
          <li className="nav-item">
            <a href="/contacto" className="nav-link">Contacto</a>
          </li>
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;