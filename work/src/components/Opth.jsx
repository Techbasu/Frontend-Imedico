import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Opth() {
    return (
        <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-light rounded">
            <div className="row">
                <div className="col">
                    <h2 className="display-3 text-center">Ophthalmological Findings</h2>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="lastVisitDate" className="form-label">Last Visit Date</label>
                    <input type="date" className="form-control" id="lastVisitDate" name="lastVisitDate" disabled />
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="diplopia" className="form-label">Diplopia</label>
                    <select className="form-select" id="diplopia" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="ptosis" className="form-label">Ptosis</label>
                    <select className="form-select" id="ptosis" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="squint" className="form-label">Squint</label>
                    <select className="form-select" id="squint" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="nystagmus" className="form-label">Nystagmus</label>
                    <select className="form-select" id="nystagmus" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="nyctalopia" className="form-label">Nyctalopia</label>
                    <select className="form-select" id="nyctalopia" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="conjunctiva" className="form-label">Conjunctiva</label>
                    <select className="form-select" id="conjunctiva" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="cornea" className="form-label">Cornea</label>
                    <select className="form-select" id="cornea" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="ocularMovements" className="form-label">Ocular Movements</label>
                    <select className="form-select" id="ocularMovements" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="pupilSize" className="form-label">Pupil(Size)</label>
                    <select className="form-select" id="pupilSize" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="pupilShape" className="form-label">Pupil Shape</label>
                    <select className="form-select" id="pupilShape" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="pupillaryReaction" className="form-label">Pupillary Reaction to Light</label>
                    <select className="form-select" id="pupillaryReaction" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="fieldOfVision" className="form-label">Field of Vision(Clinical Test)</label>
                    <select className="form-select" id="fieldOfVision" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="display-6 text-start">Color Vision</h2>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="pupillaryReaction" className="form-label">Ishihara's Test</label>
                    <select className="form-select" id="ishiharaTest" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="fieldOfVision" className="form-label">Deficiency in</label>
                    <select className="form-select" id="deficiencyIn" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="display-6 text-start">Color Vision</h2>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col">
                    <h3 className="display-8 text-start">Distant Vision</h3>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="distantWithoutGlassesRight" className="form-label">(Without Glasses) Right</label>
                    <input type="text" className="form-control" id="distantWithoutGlassesRight" />
                </div>
                <div className="col-md">
                    <label htmlFor="distantWithoutGlassesLeft" className="form-label">Left</label>
                    <input type="text" className="form-control" id="distantWithoutGlassesLeft" />
                </div>
                <div className="col-md">
                    <label htmlFor="distantWithGlassesRight" className="form-label">(With Glasses) Right</label>
                    <input type="text" className="form-control" id="distantWithGlassesRight" />
                </div>
                <div className="col-md">
                    <label htmlFor="distantWithGlassesLeft" className="form-label">Left</label>
                    <input type="text" className="form-control" id="distantWithGlassesLeft" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h3 className="display-8 text-start">Near Vision</h3>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="nearWithoutGlassesRight" className="form-label">(Without Glasses) Right</label>
                    <input type="text" className="form-control" id="nearWithoutGlassesRight" />
                </div>
                <div className="col-md">
                    <label htmlFor="nearWithoutGlassesLeft" className="form-label">Left</label>
                    <input type="text" className="form-control" id="nearWithoutGlassesLeft" />
                </div>
                <div className="col-md">
                    <label htmlFor="nearWithGlassesRight" className="form-label">(With Glasses) Right</label>
                    <input type="text" className="form-control" id="nearWithGlassesRight" />
                </div>
                <div className="col-md">
                    <label htmlFor="nearWithGlassesLeft" className="form-label">Left</label>
                    <input type="text" className="form-control" id="nearWithGlassesLeft" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h3 className="display-8 text-start">Power of Glasses</h3>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="powerOfGlassesRight" className="form-label">Right</label>
                    <input type="text" className="form-control" id="powerOfGlassesRight" />
                </div>
                <div className="col-md">
                    <label htmlFor="powerOfGlassesLeft" className="form-label">Left</label>
                    <input type="text" className="form-control" id="powerOfGlassesLeft" />
                </div>
                <div className="col-md">
                    <label htmlFor="contactLenses" className="form-label">Contact Lenses</label>
                    <input type="text" className="form-control" id="contactLenses" />
                </div>
                <div className="col-md">
                    <label htmlFor="contactLensesRight" className="form-label">Right</label>
                    <input type="text" className="form-control" id="contactLensesRight" />
                </div>
                <div className="col-md">
                    <label htmlFor="contactLensesLeft" className="form-label">Left</label>
                    <input type="text" className="form-control" id="contactLensesLeft" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h2 className="display-6 text-start">Ophthalmoscopic Examination</h2>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col">
                    <h3 className="display-8 text-start">Retinae</h3>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="retinaeRight" className="form-label">Right</label>
                    <input type="text" className="form-control" id="retinaeRight" />
                </div>
                <div className="col-md">
                    <label htmlFor="retinaeLeft" className="form-label">Left</label>
                    <input type="text" className="form-control" id="retinaeLeft" />
                </div>
                <div className="col-md">
                    <label htmlFor="opticDiscsRight" className="form-label">Optic Discs Right</label>
                    <input type="text" className="form-control" id="opticDiscsRight" />
                </div>
                <div className="col-md">
                    <label htmlFor="opticDiscsLeft" className="form-label">Left</label>
                    <input type="text" className="form-control" id="opticDiscsLeft" />
                </div>
                <div className="col-md">
                    <label htmlFor="pinkPerceptionTest" className="form-label">Pink Perception Test</label>
                    <input type="text" className="form-control" id="pinkPerceptionTest" />
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

export default Opth;
