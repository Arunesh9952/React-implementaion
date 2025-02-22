import React from "react";
//import "../../assets/Style/min.css"
//import Img from "../../assets/images/Bid.jpg"

const Auction = () => {
  return (
    <div className="auction-platform" >
      <header className="navbar bg-dark text-white p-3">
        <h1 className="navbar-brand mb-0">E-Auction Platform</h1>
        <a href="#home" className="nav-link text-white">HOME</a>
      </header>
       <div className="Auction-banner pb-5  " >
       <div className="auction-banner text-center py-5 mb-5">
      <div className="auction-banner text-center py-4 mb-3 ">
        {/* <h2 className="banner-text text-uppercase">Exciting Auction! Place your bids now!</h2> */}
    
{/* 
      <div className="login-section container text-center"> */}
        {/* <div className="login-card p-4 mx-auto shadow">
          <h3 className="mb-">Login</h3> */}
          <form>
          <div className="d-flex flex-column align-items-center justify-content-center vh-160 bg-light">
 
      <div className="bg-light p-2 rounded shadow-lg text-center" style={{ width: "450px", backgroundColor: "#f8eaea" }}>
    
        <div className="bg-primary text-white py-3 rounded-top" style={{ borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
          <h3 className="m-0">LOGIN</h3>
        </div>

   
        <div className="p-4">
          <input type="text" className="form-control mb-3 text-center" placeholder="username" />
          <input type="password" className="form-control mb-3 text-center" placeholder="password" />
          <button className="btn btn-primary w-100">LOGIN</button>
        </div>

        {/* Signup Link */}
        <p className="mt-2 text-muted">
          Don’t have an account? <a href="#" className="text-primary fw-bold">SIGN UP NOW</a>
        </p>
      </div>
    </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    //   {/* <div className="row ">
    //     <div className="col pb-5" ></div>
        
    //   </div> */}
    //   // </div>
    // // </div>
      );
};

export default Auction;