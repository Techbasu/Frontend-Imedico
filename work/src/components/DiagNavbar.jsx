// src/components/DiagNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported

function DiagNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#diagNavbarNav" aria-controls="diagNavbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="diagNavbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/gen-exam">General Examination</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/abd">Abdominal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/extg">External Genitalia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/gyn">Gynaecological</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cns">Central Nervous System</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cvs">Central Vascular System</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ent">Ear-Nose-Throat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/opt">Opthalmological</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DiagNavbar;
