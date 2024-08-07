import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
import './App.css';
import Patients from './components/Patient.jsx';
import Appn from './components/Appn.jsx';
import Diag from './components/Diagnosis.jsx';
import GenExam from './components/GenExam.jsx';
import Abd from './components/Abdominal.jsx';
import ExtG from './components/ExtGentalia.jsx';
import Gyn from './components/Gynaecological.jsx';
import Res from './components/Respiratory.jsx';
import CNS from './components/CNS.jsx';
import CVS from './components/CVS.jsx';
import ENT from './components/ENT.jsx';
import Opth from './components/Opth.jsx';
import Login from './components/Login.jsx';
import DiagNavbar from './components/DiagNavbar';

function MainNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/log-in">Log In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/patients">Patients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/appn">Appointment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/diag">Diagonosis</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const location = useLocation();
  
  const isDiagRoute = location.pathname.startsWith('/gen-exam') || location.pathname.startsWith('/abd') || location.pathname.startsWith('/extg') || location.pathname.startsWith('/gyn') || location.pathname.startsWith('/cns') || location.pathname.startsWith('/cvs') || location.pathname.startsWith('/ent') || location.pathname.startsWith('/opt');

  return (
    <>
      {isDiagRoute ? <DiagNavbar /> : <MainNavbar />}
      <div style={{ marginTop: '60px' }}>
        <Routes>
          <Route path="/log-in" element={<Login />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appn" element={<Appn />} />
          <Route path="/diag" element={<Diag />} />
          <Route path="/gen-exam" element={<GenExam />} />
          <Route path="/abd" element={<Abd />} />
          <Route path="/extg" element={<ExtG />} />
          <Route path="/gyn" element={<Gyn />} />
          <Route path="/res" element={<Res />} />
          <Route path="/cns" element={<CNS />} />
          <Route path="/cvs" element={<CVS />} />
          <Route path="/ent" element={<ENT />} />
          <Route path="/opt" element={<Opth />} />
        </Routes>
      </div>
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
