import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const Navbar = () => {
  return (
    <Nav className="navbar">
      <Nav.Item className="navbar-left">
        <Link to="/add-activity" className="nav-button">Add Activity</Link>
      </Nav.Item>
      <Nav.Item className="navbar-right">
        <Link to="/logout" className="nav-button">Logout</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;