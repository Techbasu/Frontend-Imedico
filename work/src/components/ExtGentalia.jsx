import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExtG(){
    return (
        <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className="row">
          <div className="col">
            <h2 className="display-3 text-center">External Genitalia Examination</h2>
          </div>
        </div>
        <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="lastVisitDate" className="form-label">Last visit date</label>
          <input type="date" className="form-control" id="lastVisitDate" name="Date"  disabled/>
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="movementWithRespiration" className="form-label">Penis</label>
          <select className="form-select" id="movementWithRespiration" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="chest" className="form-label">External Urethral Meatus</label>
          <select className="form-select" id="chest" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="swellingArea" className="form-label">Prepuce</label>
          <select className="form-select" id="swellingArea" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="swellingArea" className="form-label">Spermatic Cord</label>
          <select className="form-select" id="swellingArea" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="movementWithRespiration" className="form-label">Testis</label>
          <select className="form-select" id="movementWithRespiration" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="chest" className="form-label">Testiculer Sensation</label>
          <select className="form-select" id="chest" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="swellingArea" className="form-label">Hydrocole</label>
          <select className="form-select" id="swellingArea" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="swellingArea" className="form-label">Evidence of STD</label>
          <select className="form-select" id="swellingArea" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="remark" className="form-label">Remark</label>
          <textarea className="form-control" id="remark" rows="3" placeholder="If any" />
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md-4">
        <button className="btn btn-primary" type="submit">next</button>
        </div>
        <div className="col-md-4">
        <button className="btn btn-primary" type="submit">save</button>
        </div>
        <div className="col-md-4">
        <button className="btn btn-primary" type="submit">done</button>
        </div>
        </div>
        </div>
    )
}

export default ExtG;