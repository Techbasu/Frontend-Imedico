import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ENT() {
return (
    <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        {/* Header for CVS Findings */}
        <div className="row">
            <div className="col">
                <h2 className="display-3 text-center">Cardio Vascular (CVS) Findings</h2>
            </div>
        </div>
        {/* Last Visit Date input */}
        <div className="row g-3 m-4">
            <div className="col-md">
                <label htmlFor="lastVisitDate" className="form-label">Last Visit Date</label>
                <input type="date" className="form-control" id="lastVisitDate" name="lastVisitDate" disabled />
            </div>
        </div>
        {/* Header for Ear section */}
        <div className="row">
            <div className="col">
                <h2 className="display-8 text-start">Ear</h2>
            </div>
        </div>
        {/* Ear examination inputs */}
        <div className="row g-3 m-4">
            <div className="col-md">
                <label htmlFor="tinnitus" className="form-label">Tinnitus</label>
                <select className="form-select" id="tinnitus" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="discharge" className="form-label">Discharge</label>
                <select className="form-select" id="discharge" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="pinna" className="form-label">Pinna</label>
                <select className="form-select" id="pinna" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
        </div>
        {/* Header for AUROSCOPY section */}
        <div className="row">
            <div className="col">
                <h2 className="display-8 text-start">AUROSCOPY</h2>
            </div>
        </div>
        {/* AUROSCOPY inputs */}
        <div className="row g-3 m-4">
            <div className="col-md">
                <label htmlFor="externalAuditoryCanal" className="form-label">External Auditory Canal</label>
                <select className="form-select" id="externalAuditoryCanal" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="tympanicMembrane" className="form-label">Tympanic Membrane</label>
                <select className="form-select" id="tympanicMembrane" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="perforation" className="form-label">Perforation</label>
                <select className="form-select" id="perforation" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
        </div>
        {/* Hearing tests section */}
        <div className="row g-3 m-4">
            <div className="col-md">
                <label htmlFor="schwabachsTest" className="form-label">SCHWABACH'S TEST</label>
                <select className="form-select" id="schwabachsTest" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="rinniesTestRE" className="form-label">RINNIE'S TEST(R/E)</label>
                <select className="form-select" id="rinniesTestRE" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="rinniesTestLE" className="form-label">RINNIE'S TEST(L/E)(Positive - AC gt BC Negative BC gt AC)</label>
                <select className="form-select" id="rinniesTestLE" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
        </div>
        {/* Additional hearing tests section */}
        <div className="row g-3 m-4">
            <div className="col-md">
                <label htmlFor="webersTest" className="form-label">WEBER'S TEST</label>
                <select className="form-select" id="webersTest" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="conversationnalHearing" className="form-label">Conversationnal Hearing</label>
                <select className="form-select" id="conversationnalHearing" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
        </div>
        {/* Header for Whispering Voice section */}
        <div className="row">
            <div className="col">
                <h2 className="display-8 text-start">Whispering Voice( at 2ft dist.)</h2>
            </div>
        </div>
        {/* Whispering Voice inputs */}
        <div className="row g-3 m-4">
            <div className="col-md">
                <label htmlFor="whisperingVoiceRE" className="form-label">R/E</label>
                <select className="form-select" id="whisperingVoiceRE" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="whisperingVoiceLE" className="form-label">L/E</label>
                <select className="form-select" id="whisperingVoiceLE" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
        </div>
        {/* Header for Nose section */}
        <div className="row">
            <div className="col">
                <h2 className="display-8 text-start">Nose</h2>
            </div>
        </div>
        {/* Nose examination inputs */}
        <div className="row g-3 m-4">
            <div className="col-md">
                <label htmlFor="turbinates" className="form-label">Turbinates</label>
                <select className="form-select" id="turbinates" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="mucousMembrane" className="form-label">Mucous Membrane</label>
                <select className="form-select" id="mucousMembrane" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="nasalSeptum" className="form-label">Nasal Septum</label>
                <select className="form-select" id="nasalSeptum" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="polyp" className="form-label">Polyp</label>
                <select className="form-select" id="polyp" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
        </div>
        {/* Header for Throat section */}
        <div className="row">
            <div className="col">
                <h2 className="display-8 text-start">Throat</h2>
            </div>
        </div>
        {/* Throat examination inputs */}
        <div className="row g-3 m-4">
            <div className="col-md">
                <label htmlFor="pharynx" className="form-label">Pharynx</label>
                <select className="form-select" id="pharynx" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="tonsils" className="form-label">Tonsils</label>
                <select className="form-select" id="tonsils" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
            <div className="col-md">
                <label htmlFor="larynx" className="form-label">Larynx</label>
                <select className="form-select" id="larynx" defaultValue="Nil">
                    <option value="Nil">Nil</option>
                    <option value="Present">Present</option>
                </select>
            </div>
        </div>
        {/* Remark textarea */}
        <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Remark</label>
        </div>
        {/* Buttons for Next, Save, Done */}
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
export default ENT;
