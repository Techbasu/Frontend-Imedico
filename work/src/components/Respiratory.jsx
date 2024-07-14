import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Res() {
  return (
    <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <div className="row">
        <div className="col">
          <h2 className="display-3 text-center">Respiratory System Findings</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="lastVisitDate" className="form-label">Last visit date</label>
          <input type="date" className="form-control" id="lastVisitDate" name="Date" disabled />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-12 text-start">Inspection</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="chestWallDeformity" className="form-label">Chest Wall Deformity</label>
          <select className="form-select" id="chestWallDeformity" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>

        <div className="col-md">
          <label htmlFor="chestShape" className="form-label">Shape of chest</label>
          <select className="form-select" id="chestShape" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>

        <div className="col-md">
          <label htmlFor="chestMovement" className="form-label">Chest Movement</label>
          <select className="form-select" id="chestMovement" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>

        <div className="col-md">
          <label htmlFor="trachea" className="form-label">Trachea</label>
          <select className="form-select" id="trachea" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-12 text-start">Palpation</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="vocalFramitus" className="form-label">Vocal Framitus (V.F)</label>
          <select className="form-select" id="vocalFramitus" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-12 text-start">Percussion</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="percussionNote" className="form-label">Note</label>
          <select className="form-select" id="percussionNote" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-12 text-start">Auscultation</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="breathSounds" className="form-label">Breath Sounds</label>
          <select className="form-select" id="breathSounds" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>

        <div className="col-md">
          <label htmlFor="vocalResonance" className="form-label">Vocal resonance</label>
          <select className="form-select" id="vocalResonance" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-12 text-start">Adventitious Sounds</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="creps" className="form-label">Creps</label>
          <textarea className="form-control" id="creps" rows="3" placeholder="Enter Creps details"></textarea>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="ronchi" className="form-label">Ronchi</label>
          <textarea className="form-control" id="ronchi" rows="3" placeholder="Enter Ronchi details"></textarea>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="pleuralRub" className="form-label">Pleural Rub</label>
          <textarea className="form-control" id="pleuralRub" rows="3" placeholder="Enter Pleural Rub details"></textarea>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md-4">
          <button className="btn btn-primary" type="submit">Next</button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary" type="submit">Save</button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary" type="submit">Done</button>
        </div>
      </div>
    </div>
  );
}

export default Res;
