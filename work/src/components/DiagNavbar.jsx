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
              <Link className="nav-link text-white" to="/gen-exam">Gen Exam</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/abd">Abd</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/extg">Ext G</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/gyn">Gyn</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cns">CNS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cvs">CVS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ent">ENT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/opt">Opt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DiagNavbar;
