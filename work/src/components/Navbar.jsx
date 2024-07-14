// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You'll create this CSS file for styling the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/log-in">Login</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/appn">Appointments</Link></li>
        <li><Link to="/diag">Diagnosis</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
