import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Upload = () => {
  const [formData, setFormData] = useState({
    name: "",
    manufactureYear: "",
    location: "",
    fuelType: "",
    kmDriven: "",
    vehicleType: "Two Wheelers",
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">E-Auction Platform</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">HOME</a></li>
              <li className="nav-item"><a className="nav-link" href="#">ABOUT US</a></li>
              {/* <li className="nav-item"><a className="nav-link" href="#">LOGIN</a></li>
              <li className="nav-item"><a className="nav-link" href="#">SIGNUP</a></li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <div className="form-container container mt-5 p-4 rounded" style={{ background: "linear-gradient(to right, #0052D4, #A445B2)", color: "white", maxWidth: "600px" }}>
        <div className="text-end mb-3">
          <label className="me-2">TYPE:</label>
          <select className="btn btn-light btn-sm" name="vehicleType" value={formData.vehicleType} onChange={handleChange}>
            <option>Two Wheelers</option>
            <option>Four Wheelers</option>
          </select>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">NAME:</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">MANUFACTURE YEAR:</label>
            <input type="text" className="form-control" name="manufactureYear" value={formData.manufactureYear} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">LOCATION:</label>
            <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">FUEL TYPE:</label>
            <input type="text" className="form-control" name="fuelType" value={formData.fuelType} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">KM DRIVEN:</label>
            <input type="text" className="form-control" name="kmDriven" value={formData.kmDriven} onChange={handleChange} />
          </div>
          
          {/* File Upload Section */}
          <div className="file-upload text-center p-3 mt-3 rounded" style={{ background: "rgba(255, 255, 255, 0.2)", cursor: "pointer" }}>
            <label>
              <img src="https://cdn-icons-png.flaticon.com/512/109/109612.png" width="30" alt="Upload" />
              <br />
              <span className="text-primary">Click to add photos</span>
              <br />
              <small>or drag and drop</small>
              <input type="file" onChange={handleFileChange} hidden />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;