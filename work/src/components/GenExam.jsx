import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function GenExam() {
  return (
    <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      {/* Header section */}
      <div className="row">
        <div className="col">
          <h2 className="display-3 text-center">General Examination</h2>
        </div>
      </div>
      {/* Date and Time fields */}
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" className="form-control" id="date" name="Date" />
        </div>
        <div className="col-md">
          <label htmlFor="time" className="form-label">Time</label>
          <input type="time" className="form-control" id="time" name="Time" />
        </div>
      </div>
      {/* Pulse, Blood Pressure, Temperature fields */}
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="pulse" className="form-label">Pulse</label>
          <div className="input-group">
            <input type="text" className="form-control" id="pulse" />
            <span className="input-group-text">/min</span>
          </div>
        </div>
        <div className="col-md">
          <label htmlFor="bloodPressure" className="form-label">Blood Pressure</label>
          <input type="text" className="form-control" id="bloodPressure" placeholder="mm of Hg" />
        </div>
        <div className="col-md">
          <label htmlFor="temperature" className="form-label">Temperature</label>
          <input type="text" className="form-control" id="temperature" placeholder="°F" />
        </div>
      </div>
      {/* Icterus, Anaemia, Cyanosis fields */}
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="icterus" className="form-label">Icterus</label>
          <select className="form-select" id="icterus" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="anaemia" className="form-label">Anaemia</label>
          <select className="form-select" id="anaemia" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="cyanosis" className="form-label">Cyanosis</label>
          <select className="form-select" id="cyanosis" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>
      {/* Jugular Vein Pulse, Tongue, Pharynx fields */}
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="jugularVeinPulse" className="form-label">Jugular Vein Pulse</label>
          <div className="input-group">
            <input type="text" className="form-control" id="jugularVeinPulse" />
            <span className="input-group-text">/min</span>
          </div>
        </div>
        <div className="col-md">
          <label htmlFor="tongue" className="form-label">Tongue</label>
          <select className="form-select" id="tongue" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="pharynx" className="form-label">Pharynx</label>
          <select className="form-select" id="pharynx" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>
      {/* Tonsils, Oedema, Clubbing fields */}
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="tonsils" className="form-label">Tonsils</label>
          <select className="form-select" id="tonsils" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="oedema" className="form-label">Oedema</label>
          <select className="form-select" id="oedema" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="clubbing" className="form-label">Clubbing</label>
          <select className="form-select" id="clubbing" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>
      {/* Blood Group and RH Factor fields */}
      <div className="row g-3 m-4">
        <div className="col-md-6">
          <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
          <select className="form-select" id="bloodGroup" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="rhFactor" className="form-label">RH Factor</label>
          <select className="form-select" id="rhFactor" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
          </select>
        </div>
      </div>
      {/* Lymph Node field */}
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="lymphNode" className="form-label">Lymph Node</label>
          <select className="form-select" id="lymphNode" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>
      {/* GO field */}
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="go" className="form-label">GO</label>
          <input type="text" className="form-control" id="go" defaultValue="Nil" />
        </div>
      </div>
      {/* Past History field */}
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="pastHistory" className="form-label">Past History</label>
          <textarea className="form-control" id="pastHistory" rows="3" placeholder="Enter past history" />
        </div>
      </div>
      {/* Drug Allergy field */}
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="drugAllergy" className="form-label">Drug Allergy</label>
          <textarea className="form-control" id="drugAllergy" rows="3" placeholder="Enter drug allergy details" />
        </div>
      </div>
      {/* Other Allergy field */}
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="otherAllergy" className="form-label">Other Allergy</label>
          <textarea className="form-control" id="otherAllergy" rows="3" placeholder="Enter other allergy details" />
        </div>
      </div>
      {/* Any Other Info field */}
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="otherInfo" className="form-label">Any Other Info</label>
          <textarea className="form-control" id="otherInfo" rows="3" placeholder="Enter any other information" />
        </div>
      </div>
      {/* Submit button */}
      <div className="row g-3 m-4">
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default GenExam;