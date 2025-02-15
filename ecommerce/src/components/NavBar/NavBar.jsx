import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MateShop</Link>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/category/mates" className="nav-link">Mates</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/bombillas" className="nav-link">Bombillas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/sets" className="nav-link">Sets</NavLink>
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