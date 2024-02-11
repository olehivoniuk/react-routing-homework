// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar-styles.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/pages/ultimateWrapper">Form Imitation</Link>
        <Link to="/pages/wrapper/shoplistWrapper">Shoplist</Link>
        <Link to="/pages/assigment/buttonPage">Buttons Page</Link>
        <Link to="/pages/catalog/catalogWrapper">Catalog Page</Link>
      </div>
    </div>
  );
}

export default Navbar;
