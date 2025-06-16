import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🌍 Travel Log</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Place</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
