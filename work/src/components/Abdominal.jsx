import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Abd() {
  return (
    <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <div className="row">
        <div className="col">
          <h2 className="display-3 text-center">Abdominal Examination</h2>
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="lastVisitDate" className="form-label">Last visit date</label>
          <input type="date" className="form-control" id="lastVisitDate" name="Date" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="display-8 text-start">Investigation</h2>
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="movementWithRespiration" className="form-label">Movement with respiration</label>
          <select className="form-select" id="movementWithRespiration" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="chest" className="form-label">Chest</label>
          <select className="form-select" id="chest" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="swellingArea" className="form-label">Swelling Area</label>
          <select className="form-select" id="swellingArea" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="abnormalVenousProminence" className="form-label">Abnormal venous Prominence</label>
          <textarea className="form-control" id="abnormalVenousProminence" rows="3" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="display-8 text-start">Palpation</h2>
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="lump" className="form-label">Lump</label>
          <select className="form-select" id="lump" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="area" className="form-label">Area</label>
          <select className="form-select" id="area" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="size" className="form-label">Size</label>
          <input type="text" className="form-control" id="size" />
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="liver" className="form-label">Liver</label>
          <textarea className="form-control" id="liver" rows="3" placeholder="Enter past history" />
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="spleen" className="form-label">Spleen</label>
          <textarea className="form-control" id="spleen" rows="3" placeholder="Enter drug allergy details" />
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="kidney" className="form-label">Kidney</label>
          <textarea className="form-control" id="kidney" rows="3" placeholder="Enter other allergy details" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="display-8 text-start">Auscultation</h2>
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md">
          <label htmlFor="ips" className="form-label">IPS</label>
          <select className="form-select" id="ips" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="hernialOrifices" className="form-label">Hernial Orifices</label>
          <select className="form-select" id="hernialOrifices" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="hernia" className="form-label">Hernia</label>
          <select className="form-select" id="hernia" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
          </select>
        </div>
      </div>
      <div className="row g-3 m-4">
        <div className="col-md-4">
          <button className="btn btn-primary w-100" type="submit">Ok</button>
        </div>
        <div className="col-md-8">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
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
  );
}

export default Abd;
