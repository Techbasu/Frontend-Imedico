import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gyn() {
  return (
    <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <div className="row">
        <div className="col">
          <h2 className="display-3 text-center">Gynaecological Findings</h2>
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
          <h2 className="display-6 text-start">Menstrual History</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text">Menarche</span>
            <input type="text" className="form-control" aria-label="Menarche" />
            <span className="input-group-text">Years</span>
          </div>
        </div>

        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text">Cycle</span>
            <input type="text" className="form-control" aria-label="Cycle" />
            <span className="input-group-text">Days</span>
          </div>
        </div>

        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text">Duration</span>
            <input type="text" className="form-control" aria-label="Duration" />
            <span className="input-group-text">Days</span>
          </div>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="flowSelect" aria-label="Flow select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="flowSelect">Flow</label>
          </div>
        </div>

        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="painSelect" aria-label="Pain select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="painSelect">Pain</label>
          </div>
        </div>

        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text" id="lmpLabel">L.M.P</span>
            <input type="text" className="form-control" placeholder="Enter LMP" aria-label="LMP" aria-describedby="lmpLabel" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-6 text-start">Obstetric History</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text">Parity</span>
            <input type="text" className="form-control" placeholder="Enter Parity" aria-label="Parity" />
          </div>
        </div>

        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text">Living</span>
            <input type="text" className="form-control" placeholder="Enter Living" aria-label="Living" />
          </div>
        </div>

        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text">L.C.B</span>
            <input type="text" className="form-control" placeholder="Enter LCB" aria-label="LCB" />
          </div>
        </div>

        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="abortionSelect" aria-label="Abortion select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="abortionSelect">History of Abortion</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-6 text-start">Pelvic Examination</h2>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-12 text-start">Inspection</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text">Vulva</span>
            <input type="text" className="form-control" placeholder="Enter Vulva" aria-label="Vulva" />
          </div>
        </div>

        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text">Urethra</span>
            <input type="text" className="form-control" placeholder="Enter Urethra" aria-label="Urethra" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-12 text-start">Per Speculum (P/S)</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <div className="input-group">
            <span className="input-group-text">Vagina</span>
            <input type="text" className="form-control" placeholder="Enter Vagina" aria-label="Vagina" />
          </div>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="cervixSelect" aria-label="Cervix select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="cervixSelect">Cervix</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-12 text-start">Per Vaginal (P/V)</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="cervixSelect" aria-label="Cervix select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="cervixSelect">Cervix</label>
          </div>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="uterusSelect" aria-label="Uterus select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="uterusSelect">Uterus</label>
          </div>
        </div>

        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="fornicesSelect" aria-label="Fornices select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="fornicesSelect">Fornices</label>
          </div>
        </div>

        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="tendernessSelect" aria-label="Tenderness select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="tendernessSelect">Tenderness</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="display-12 text-start">Ovaries</h2>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="ovarySizeSelect" aria-label="Ovary size select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="ovarySizeSelect">Size</label>
          </div>
        </div>

        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="ovaryPositionSelect" aria-label="Ovary position select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="ovaryPositionSelect">Position</label>
          </div>
        </div>

        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="ovaryTendernessSelect" aria-label="Ovary tenderness select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="ovaryTendernessSelect">Tenderness</label>
          </div>
        </div>

        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="papSmartTestSelect" aria-label="PAP Smart Test select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="papSmartTestSelect">PAP Smart Test</label>
          </div>
        </div>

        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="pregnancySelect" aria-label="Pregnancy select">
              <option value="" defaultValue>None</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="pregnancySelect">Pregnancy</label>
          </div>
        </div>
      </div>

      <div className="row g-3 m-4">
        <div className="col-md-12">
          <label htmlFor="remark" className="form-label">Other</label>
          <textarea className="form-control" id="remark" rows="3" placeholder="If any"></textarea>
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

export default Gyn;
