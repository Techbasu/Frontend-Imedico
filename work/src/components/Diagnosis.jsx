import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    BrowserRouter as Router, Routes, 
    Route, Link
} from "react-router-dom"; 

function Diag() {
    return (
        <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            {/* Header */}
            <div className="row">
                <div className="col">
                    <h2 className="display-3 text-center">Diagnosis Form</h2>
                </div>
            </div>
            {/* Clinic and Doctor information */}
            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="ClinicName" name="ClinicName" disabled />
                        <label htmlFor="ClinicName">Clinic Name</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="DoctorName" name="DoctorName" disabled />
                        <label htmlFor="DoctorName">Doctor Name</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="DateTime" name="DateTime" disabled />
                        <label htmlFor="DateTime">Date and Time</label>
                    </div>
                </div>
            </div>
            {/* Patient information */}
            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="PatientId" name="PatientId" disabled />
                        <label htmlFor="PatientId">Patient Id</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="PatientName" name="PatientName" disabled />
                        <label htmlFor="PatientName">Patient Name</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="Gender" name="Gender" disabled />
                        <label htmlFor="Gender">Gender</label>
                    </div>
                </div>
            </div>
            {/* Complaint details */}
            <div className="row g-3 m-4">
                <div className="col-md-auto">
                    <div className="form-floating">
                        <select id="Complaint" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="Complaint">Complaint</label>
                    </div>
                </div>
                <div className="col-md-auto">
                    <button type="button" className="btn btn-primary mt-3">with</button>
                </div>
                <div className="col-md">
                    <textarea className="form-control" id="ComplaintDetails" rows="3"></textarea>
                </div>
            </div>
            {/* Navigation to other forms */}
            <div className="row g-3 m-4"> 
                <div className="col-md-auto">
                    <a href='/gen-exam'>General examination form</a>
                </div> 
            </div>
            <div className="row g-3 m-4"> 
                <div className="col-md-auto">
                    <a href='/abd'>Abdominal form</a>
                </div> 
            </div>
            {/* Provisional diagnosis */}
            <div className="row g-3 m-4">
                <div className="col-md-4">
                    <div className="form-floating">
                        <select id="ProvisionalDiagnosis" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="ProvisionalDiagnosis">Provisional Diagnosis</label>
                    </div>
                </div>
                <div className="col-md-auto">
                    <button type="button" className="btn btn-primary mt-3">with</button>
                </div>
                <div className="col-md">
                    <textarea className="form-control" id="DiagnosisDetails" rows="3"></textarea>
                </div>
            </div>
            {/* Medicine details */}
            <div className="row">
                <div className="col">
                    <h2 className="display-8 text-start">Medicine</h2>
                </div>
            </div>
            <div className="row g-4 m-4">
                <div className="col-md-4">
                    <div className="form-floating">
                        <select id="MedicineType" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="MedicineType">Medicine Type</label>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-floating">
                        <select id="TradeName" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="TradeName">Trade name</label>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-floating">
                        <div className="input-group">
                            <div className="input-group-text">Dose</div>
                            <input type="text" className="form-control" id="Dose" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-floating">
                        <select id="Day" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="Day">/Day</label>
                    </div>
                </div>
            </div>
            {/* Additional options */}
            <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div className="row">
                    <div className="col-md-auto">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Option 1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Option 2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineRadio3">Option 3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                            <label className="form-check-label" htmlFor="inlineRadio4">Option 4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                            <label className="form-check-label" htmlFor="inlineRadio5">Option 5</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6" />
                            <label className="form-check-label" htmlFor="inlineRadio6">Option 6</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option7" />
                            <label className="form-check-label" htmlFor="inlineRadio7">Option 7</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option8" />
                            <label className="form-check-label" htmlFor="inlineRadio8">Option 8</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Dose input */}
            <div className="row">
                <div className="col-sm-3">
                    <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Dose</label>
                    <div className="input-group">
                        <div className="input-group-text">Dose(/day)</div>
                        <input type="text" className="form-control" id="specificSizeInputGroupUsername" />
                    </div>
                </div>
            </div>
            {/* Action buttons */}
            <div className="row m-4">
                <div className="col-md">
                    <button className="btn btn-primary" type="submit">To Table</button>
                </div>
                <div className="col-md">
                    <button className="btn btn-primary" type="submit">Fresh Table</button>
                </div>
                <div className="col-md">
                    <button className="btn btn-primary" type="submit">Delete</button>
                </div>
                <div className="col-md">
                    <button className="btn btn-primary" type="submit">Discontinue</button>
                </div>
            </div>
            {/* Medicine table */}
            <div className="row m-4">
                <div className="col-md">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S</th>
                                <th scope="col">Type</th>
                                <th scope="col">Trade Name</th>
                                <th scope="col">Generic</th>
                                <th scope="col">Dose</th>
                                <th scope="col">/Day</th>
                                <th scope="col">Adm.at</th>
                                <th scope="col">Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Table rows go here */}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Investigation */}
            <div className="row">
                <div className="col">
                    <h2 className="display-8 text-start">Investigation</h2>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md-4">
                    <div className="form-floating">
                        <select id="Sample" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="Sample">Sample</label>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-floating">
                        <select id="Test" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="Test">Test</label>
                    </div>
                </div>
            </div>
            {/* Investigation action buttons */}
            <div className="row g-2 m-4">
                <div className="col-md">
                    <button className="btn btn-primary" type="submit">To Table</button>
                </div>
                <div className="col-md">
                    <button className="btn btn-primary" type="submit">Delete</button>
                </div>
            </div>
            {/* Investigation table */}
            <div className="row m-4">
                <div className="col-md">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S</th>
                                <th scope="col">Sample Name</th>
                                <th scope="col">Test Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Diet advice */}
            <div className="row g-4 m-4">
                <div className="col-md-4">
                    <div className="form-floating">
                        <select id="DietAdviced" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="DietAdviced">Diet Adviced</label>
                    </div>
                </div>
                <div className="col-md">
                    <input type="text" className="form-control" placeholder="Diet(KCAL/Day)" aria-label="Diet"/>
                </div>
                <div className="col-md">
                    <button className="btn btn-info" type="submit">Go</button>
                </div>
                <div className="col-md-4">
                    <textarea className="form-control" id="Diet" rows="3"></textarea>
                </div>
            </div>
            {/* Other advice */}
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Other Advice</label>
            </div>
            {/* Save and Done buttons */}
            <div className="row m-4">
                <div className="col">
                    <button className="btn btn-success" type="submit">Save</button>
                </div>
            </div>
            <div className="row m-4">
                <div className="col">
                    <button className="btn btn-success" type="submit">Done</button>
                </div>
            </div>
        </div>
    );
}

export default Diag;
