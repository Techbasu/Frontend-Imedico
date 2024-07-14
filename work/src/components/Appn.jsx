import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Apn() {
    return (
        <div className="container mt-10 border border-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <div className="row">
                <div className="col">
                    <h2 className="display-3 text-center">Appointment Form</h2>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="FloatingInputDisabled" name="PatCode" disabled />
                        <label htmlFor="PatCode">Patient Code</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="dt" name="date" disabled />
                        <label htmlFor="date">Date</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="tm" name="time" disabled />
                        <label htmlFor="time">Time</label>
                    </div>
                </div>
            </div>

            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="ptnm" name="PatName" disabled />
                        <label htmlFor="PatName">Patient Name</label>
                    </div>
                </div>

                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="dcn" name="doctorname" disabled />
                        <label htmlFor="doctorname">Doctor Name</label>
                    </div>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>None</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label htmlFor="floatingSelect">Appointment Place</label>
                    </div>
                </div>

                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>None</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label htmlFor="floatingSelect">Appointment Date</label>
                    </div>
                </div>

                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="aptm" name="appntime" disabled />
                        <label htmlFor="appntime">Appointment Time</label>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-primary btn-lg">Save</button>
            </div>
        </div>
    );
}

export default Apn;