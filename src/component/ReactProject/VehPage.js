import { Link } from "react-router-dom";
import Car from "../../assets/images/Car.webp"

export default function VehPage() {
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
              <li className="nav-item"><Link to="/" className="nav-link text-white">HOME</Link></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">ABOUT US</a></li>
              {/* <li className="nav-item"><Link to="/login" className="nav-link text-white">LOGIN</Link></li>
              <li className="nav-item"><Link to="/signup" className="nav-link text-white">SIGNUP</Link></li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Card Slider Section */}
      <div className="container mt-5">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-center shadow">
                    <img src={Car} className="card-img-top" alt="Two Wheelers" />
                    <div className="card-body">
                      <h5 className="card-title">Two Wheelers</h5>
                      <Link to="/BidList" className="btn btn-dark">VIEW MORE</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center shadow">
                    <img src={Car} className="card-img-top" alt="Four Wheelers" />
                    <div className="card-body">
                      <h5 className="card-title">Four Wheelers</h5>
                      <Link to="/fourwheelers" className="btn btn-dark">VIEW MORE</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center shadow">
                    <img src={Car} className="card-img-top" alt="Six Wheelers" />
                    <div className="card-body">
                      <h5 className="card-title">Six Wheelers</h5>
                      <Link to="/sixwheelers" className="btn btn-dark">VIEW MORE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
