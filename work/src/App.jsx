import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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

function App() {
  return (
    <Router>
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
                <Link className="nav-link text-white" to="/appn">Appn</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/diag">Diag</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
    </Router>
  );
}

export default App;
