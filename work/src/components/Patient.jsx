import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    dob: '',
    age: '',
    gender: 'None'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'dob') {
      const dob = new Date(value);
      const ageDiffMs = Date.now() - dob.getTime();
      const ageDate = new Date(ageDiffMs); // miliseconds from epoch
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
        age: calculatedAge.toString()
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can perform further actions here, like sending the data to a server
  };

  return (
    <div>
      <div className="container border border-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded" style={{ height: '500px', padding: '30px' }}>
        <h1 className="display-4">Opd Patient Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="row g-2 m-4">
            <div className="col-md">
              <div className="form-floating">
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                <label htmlFor="name">Name</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                <label htmlFor="email">Email</label>
              </div>
            </div>
          </div>
          {/* ----------------------------------------- */}
          <div className="row g-2 m-4">
            <div className="col-md">
              <div className="form-floating">
                <input type="text" className="form-control" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} />
                <label htmlFor="contactNo">Contact No</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
                <label htmlFor="dob">DOB</label>
              </div>
            </div>
          </div>
          {/* ----------------- */}
          <div className="row g-2 m-4">
            <div className="col-md">
              <div className="form-floating">
                <input type="text" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} />
                <label htmlFor="age">Age</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="None">None</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
                <label htmlFor="gender">Gender</label>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;