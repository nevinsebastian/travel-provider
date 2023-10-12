import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/add-activity" className="nav-button">Add Activity</Link>
      </div>
      <div className="navbar-right">
        <Link to="/logout" className="nav-button">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
