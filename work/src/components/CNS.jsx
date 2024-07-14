import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CNS() {
    return (
        <div className="container mt-4 border border-5 shadow-sm p-3 mb-5 bg-light rounded">
            <div className="row">
                <div className="col">
                    <h2 className="display-3 text-center">Central Nervous System (CNS) Findings</h2>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="lastVisitDate" className="form-label">Last visit date</label>
                    <input type="date" className="form-control" id="lastVisitDate" name="lastVisitDate" disabled />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="display-6 text-start">Higher Functions</h2>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="memory" className="form-label">Memory</label>
                    <select className="form-select" id="memory" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="orientation" className="form-label">Orientation of Time & Space</label>
                    <select className="form-select" id="orientation" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="speech" className="form-label">Speech</label>
                    <select className="form-select" id="speech" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="posture" className="form-label">Posture</label>
                    <select className="form-select" id="posture" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="gait" className="form-label">Gait</label>
                    <select className="form-select" id="gait" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="spine" className="form-label">Spine</label>
                    <select className="form-select" id="spine" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="input-group">
                        <span className="input-group-text">Remark</span>
                        <input type="text" className="form-control" placeholder="Enter Remark" aria-label="Remark" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
    <div className="col">
        <h2 className="display-6 text-start">Cranial Nerve Tests</h2>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <div className="input-group">
            <span className="input-group-text">Smell (I)</span>
            <input type="text" className="form-control" placeholder="Enter Remark" aria-label="Remark" />
        </div>
    </div>
    <div className="col-md">
        <label htmlFor="ocularMovements1" className="form-label">Ocular Movements</label>
        <select className="form-select" id="ocularMovements1" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="facialSensation1" className="form-label">Facial Sensation</label>
        <select className="form-select" id="facialSensation1" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <button className="btn btn-primary" type="submit">Next</button>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md-12">
        <textarea className="form-control" id="ocm" rows="3" placeholder="Enter OCM details"></textarea>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="sensoryFaceBuccal" className="form-label">Sensory Face & Buccal mm(V)</label>
        <select className="form-select" id="sensoryFaceBuccal" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="masseterTemporalis" className="form-label">Masseter & Temporalis(V)</label>
        <select className="form-select" id="masseterTemporalis" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="balancing" className="form-label">Balancing(VIII) Romberg's Sign</label>
        <select className="form-select" id="balancing" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="facialMuscle" className="form-label">Facial Muscle</label>
        <select className="form-select" id="facialMuscle" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="facialSensation2" className="form-label">Facial Sensation</label>
        <select className="form-select" id="facialSensation2" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <button className="btn btn-primary" type="submit">Next</button>
    </div>
    <div className="col-md">
        <div className="form-group">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </div>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="tongueMovements" className="form-label">Tongue Movements(XII)</label>
        <select className="form-select" id="tongueMovements" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="taste" className="form-label">Taste(VII A2/3, IX P1/3)</label>
        <select className="form-select" id="taste" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="facialSensation3" className="form-label"></label>
        <select className="form-select" id="taste2" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <button className="btn btn-primary" type="submit">Next</button>
    </div>
    <div className="col-md">
        <div className="form-group">
            <textarea className="form-control" id="exampleFormControlTextarea2" rows="1"></textarea>
        </div>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="palatalMovements" className="form-label">Palatal Movements(IX & X)</label>
        <select className="form-select" id="palatalMovements" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="pharyngealReflex" className="form-label">Pharyngeal Reflex(X)</label>
        <select className="form-select" id="pharyngealReflex" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="sternocleidomastoid" className="form-label">Sternocleidomastoid & Trapezii(XI)</label>
        <select className="form-select" id="sternocleidomastoid" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="facialSensation4" className="form-label"></label>
        <select className="form-select" id="sternocleidomastoid2" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <button className="btn btn-primary" type="submit">Next</button>
    </div>
    <div className="col-md">
        <div className="form-group">
            <textarea className="form-control" id="exampleFormControlTextarea3" rows="1"></textarea>
        </div>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="deglutition" className="form-label">Deglutition(X)</label>
        <select className="form-select" id="deglutition" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="hoarseness" className="form-label">Hoarseness or Aphonia(X)</label>
        <select className="form-select" id="hoarseness" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="dysarthria" className="form-label">Dysarthria</label>
        <select className="form-select" id="dysarthria" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <div className="input-group">
            <span className="input-group-text">Remark on Cranial Nerve</span>
            <input type="text" className="form-control" placeholder="Enter Remark" aria-label="Remark" />
        </div>
    </div>
</div>
<hr />
<div className="row">
                <div className="col">
                    <h2 className="display-6 text-start">Motor Functions</h2>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="memory" className="form-label">Muscle powers(Grade 0 - IV)</label>
                    <select className="form-select" id="memory" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="orientation" className="form-label">Tone of muscles</label>
                    <select className="form-select" id="orientation" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="speech" className="form-label">Fasciculation</label>
                    <select className="form-select" id="speech" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="memory" className="form-label">Involuntory Movements</label>
                    <select className="form-select" id="memory" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="orientation" className="form-label">Muscle Trophic Change</label>
                    <select className="form-select" id="orientation" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="speech" className="form-label">Abnormal Posture</label>
                    <select className="form-select" id="speech" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="speech" className="form-label">Muscle Wasting</label>
                    <select className="form-select" id="speech" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="display-8 text-start">Coordination of Muscle Movements</h2>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="memory" className="form-label">Finger-Nose</label>
                    <select className="form-select" id="memory" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="orientation" className="form-label">Heel-to-Knee</label>
                    <select className="form-select" id="orientation" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="display-8 text-start">Abnormal Movements</h2>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="ocularMovements" className="form-label">Tremors
                    </label>
                    <select className="form-select" id="ocularMovements" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <select className="form-select" id="facialSensation" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <button className="btn btn-primary" type="submit">Next</button>
                </div>
                <div className="col-md">
                <div class="form-group">
  <textarea class="form-control" id="exampleFormControlTextarea3" rows="1"></textarea>
</div>
                </div>
                </div>
                <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="memory" className="form-label">Tremors</label>
                    <select className="form-select" id="memory" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                </div>
                <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="memory" className="form-label">Nystagmus</label>
                    <select className="form-select" id="memory" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="orientation" className="form-label">Clonus Ankle</label>
                    <select className="form-select" id="orientation" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <label htmlFor="speech" className="form-label">Wrist</label>
                    <select className="form-select" id="speech" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
            </div>
            <div className="row g-3 m-4">
                <div className="col-md">
                    <div className="input-group">
                        <span className="input-group-text">Remark on Motor Functions</span>
                        <input type="text" className="form-control" placeholder="Enter Remark" aria-label="Remark" />
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
    <div className="col">
        <h2 className="display-6 text-start">Sensory Functions</h2>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="pain" className="form-label">Pain</label>
        <select className="form-select" id="pain" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="clonusAnkle" className="form-label">Clonus Ankle</label>
        <select className="form-select" id="clonusAnkle" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="temperature" className="form-label">Temperature</label>
        <select className="form-select" id="temperature" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="deepSensibility" className="form-label">Deep Sensibility</label>
        <select className="form-select" id="deepSensibility" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="jointSenses" className="form-label">Joint Senses</label>
        <select className="form-select" id="jointSenses" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="tactileSensation" className="form-label">Tactile Sensation</label>
        <select className="form-select" id="tactileSensation" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="tactileDiscrimination" className="form-label">Tactile Discrimination</label>
        <select className="form-select" id="tactileDiscrimination" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="vibration" className="form-label">Vibration (Using Tuning Fork F128)</label>
        <select className="form-select" id="vibration" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="stereognosis" className="form-label">Stereognosis</label>
        <select className="form-select" id="stereognosis" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
</div>
<hr/>

<div className="row">
    <div className="col">
        <h2 className="display-6 text-start">Jerks</h2>
    </div>
</div>
<div className="row g-3 m-4">
    <div className="col-md">
        <label htmlFor="knee" className="form-label">Knee</label>
        <select className="form-select" id="knee" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="ankle" className="form-label">Ankle</label>
        <select className="form-select" id="ankle" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="biceps" className="form-label">Biceps</label>
        <select className="form-select" id="biceps" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="triceps" className="form-label">Triceps</label>
        <select className="form-select" id="triceps" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="supinator" className="form-label">Supinator</label>
        <select className="form-select" id="supinator" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="mandibular" className="form-label">Mandibular</label>
        <select className="form-select" id="mandibular" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
    <div className="col-md">
        <label htmlFor="jointSenses" className="form-label">Joint Senses</label>
        <select className="form-select" id="jointSenses" defaultValue="Nil">
            <option value="Nil">Nil</option>
            <option value="Present">Present</option>
        </select>
    </div>
</div>
<hr/>

            <div className="row g-3 m-4">
                <div className="col-md">
                    <label htmlFor="ocularMovements" className="form-label">Reflexes
                    </label>
                    <select className="form-select" id="ocularMovements" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <select className="form-select" id="facialSensation" defaultValue="Nil">
                        <option value="Nil">Nil</option>
                        <option value="Present">Present</option>
                    </select>
                </div>
                <div className="col-md">
                    <button className="btn btn-primary" type="submit">Next</button>
                </div>
                <div className="col-md">
                <div class="form-group">
  <textarea class="form-control" id="exampleFormControlTextarea3" rows="1"></textarea>
</div>
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

export default CNS;
