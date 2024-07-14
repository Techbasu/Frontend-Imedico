import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CVS() {
    return (
        <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <div className="row">
                <div className="col">
                    <h2 className="display-3 text-center">Cardio Vascular (CVS) Findings</h2>
                </div>
            </div>

            {/* Row for Last Visit Date */}
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="lastVisitDate" className="form-label">Last visit date</label>
                    <input type="date" className="form-control" id="lastVisitDate" name="Date" disabled />
                </div>
            </div>

            {/* Pulse Information */}
            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="input-group">
                        <span className="input-group-text">Pulse</span>
                        <input type="text" className="form-control" />
                        <span className="input-group-text">/min</span>
                    </div>
                </div>
                <div className="col-md">
                    <label htmlFor="pulseRythm" className="form-label">Pulse Rythm</label>
                    <select className="form-select" id="pulseRythm" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="pulseVolume" className="form-label">Pulse Volume</label>
                    <select className="form-select" id="pulseVolume" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="pulseTension" className="form-label">Pulse Tension</label>
                    <select className="form-select" id="pulseTension" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="peripheralPulse" className="form-label">Peripheral Pulse (Art Dorsalis Pedes)</label>
                    <select className="form-select" id="peripheralPulse" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>

            {/* Blood Pressure and Neck Veins */}
            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="input-group">
                        <span className="input-group-text">Blood Pressure</span>
                        <input type="text" className="form-control" />
                        <span className="input-group-text">mm of Hg</span>
                    </div>
                </div>
                <div className="col-md">
                    <div className="input-group">
                        <span className="input-group-text">Blood Pressure (After Rest)</span>
                        <input type="text" className="form-control" />
                        <span className="input-group-text">mm of Hg</span>
                    </div>
                </div>
                <div className="col-md">
                    <label htmlFor="neckVeins" className="form-label">Neck Veins</label>
                    <select className="form-select" id="neckVeins" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <div className="input-group">
                        <span className="input-group-text">Cyanosis</span>
                        <input type="text" className="form-control" placeholder="Enter Remark" />
                    </div>
                </div>
            </div>

            {/* Inspection */}
            <div className="row">
                <div className="col">
                    <h3 className="display-8 text-start">Inspection</h3>
                </div>
            </div>

            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="visibleApexBeat" className="form-label">Visible Apex Beat</label>
                    <select className="form-select" id="visibleApexBeat" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>

            {/* Palpable Apex Beat */}
            <div className="row">
                <div className="col">
                    <h3 className="display-8 text-start">Palpable Apex Beat</h3>
                </div>
            </div>

            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="palpableApexBeat" className="form-label">Palpable Apex Beat</label>
                    <select className="form-select" id="palpableApexBeat" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="thrill" className="form-label">Thrill</label>
                    <select className="form-select" id="thrill" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="parasternalHeave" className="form-label">Parasternal Heave</label>
                    <select className="form-select" id="parasternalHeave" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>

            {/* Auscultation */}
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="auscultation" className="form-label">Auscultation</label>
                    <select className="form-select" id="auscultation" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <select className="form-select" id="auscultation2" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <button className="btn btn-primary" type="submit">Next</button>
                </div>
                <div className="col-md">
                    <div className="form-group">
                        <textarea className="form-control" id="auscultationRemark" rows="1"></textarea>
                    </div>
                </div>
            </div>

            {/* Adventitious Sound */}
            <div className="row">
                <div className="col">
                    <h3 className="display-8 text-start">Adventitious Sound</h3>
                </div>
            </div>

            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="cardiacMurmur" className="form-label">Cardiac Murmur</label>
                    <select className="form-select" id="cardiacMurmur" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <select className="form-select" id="cardiacmurmur2" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <button className="btn btn-primary" type="submit">Next</button>
                </div>
                <div className="col-md">
                    <label htmlFor="pericardialRub" className="form-label">Pericardial Rub</label>
                    <select className="form-select" id="pericardialRub" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>

            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="form-group">
                        <textarea className="form-control" id="adventitiousSoundRemark" rows="1"></textarea>
                    </div>
                </div>
            </div>

            {/* Cardiac Arrhythmia and Ectopic Beats */}
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="cardiacArrhythmia" className="form-label">Cardiac Arrhythmia</label>
                    <select className="form-select" id="cardiacArrhythmia" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="ectopicBeats" className="form-label">Ectopic Beats</label>
                    <select className="form-select" id="ectopicBeats" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>

            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="form-group">
                        <textarea className="form-control" id="additionalComments" rows="1" placeholder="Any other comments"></textarea>
                    </div>
                </div>
            </div>

            {/* Row for Buttons */}
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

export default CVS;
