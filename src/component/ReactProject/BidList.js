import { Link } from "react-router-dom";
import Car from "../../assets/images/Car.webp"

export default function BidList() {
  return (
    <div className="container-fluid px-0">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark pb-4" style={{ backgroundColor: "#343A40" }}>
        <div className="container">
          <a className="navbar-brand text-white" href="#">E-Auction Platform</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link text-white" href="#">HOME</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">ABOUT US</a></li>
              {/* <li className="nav-item"><a className="nav-link text-white" href="#">LOGIN</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">SIGNUP</a></li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Auction Cards */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Car 1 */}
          <div className="col-md-5 m-2">
            <div className="card text-center shadow-lg" style={{ backgroundColor: "#E5E5E5", borderRadius: "15px" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">MARUTI Swift Dzire LDI</h5>
                <img src={Car} className="img-fluid rounded mb-3" alt="Maruti Swift Dzire" style={{ borderRadius: "15px" }} />
                <p><i className="bi bi-gear-wide-connected"></i> <b>Manufacture Year:</b> 2016</p>
                <p><i className="bi bi-geo-alt-fill"></i> Coimbatore, Tamil Nadu</p>
                <p><i className="bi bi-fuel-pump"></i> Petrol</p>
                <p><i className="bi bi-speedometer2"></i> 78,000 KM</p>
                <button className="btn btn-dark w-100"><Link to="/BidPage2" className="nav-link text-white">BID NOW</Link></button>
              </div>
            </div>
          </div>

          {/* Car 2 */}
          <div className="col-md-5 m-2">
            <div className="card text-center shadow-lg" style={{ backgroundColor: "#E5E5E5", borderRadius: "15px" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">AUDI Q3 35 TDI</h5>
                <img src={Car} className="img-fluid rounded mb-3" alt="Audi Q3" style={{ borderRadius: "15px" }} />
                <p><i className="bi bi-gear-wide-connected"></i> <b>Manufacture Year:</b> 2012</p>
                <p><i className="bi bi-geo-alt-fill"></i> Chennai, Tamil Nadu</p>
                <p><i className="bi bi-fuel-pump"></i> Petrol</p>
                <p><i className="bi bi-speedometer2"></i> 84,000 KM</p>
                <button className="btn btn-dark w-100"><Link to="/BidPage2" className="nav-link text-white">BID NOW</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
