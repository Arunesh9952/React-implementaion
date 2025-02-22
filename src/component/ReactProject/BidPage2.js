import React, { useState } from "react";
 import Car from "../../assets/images/Car.webp"

const BidPage2 = () => {
  const [customBid, setCustomBid] = useState("");
  const [currentBid, setCurrentBid] = useState(0);
  const [bidCount, setBidCount] = useState(24);

  // Predefined bid amounts
  const handleBid = (amount) => {
    setCurrentBid(currentBid + amount);
    setBidCount(bidCount + 1);
  };

  // Custom bid submission
  const handleCustomBid = () => {
    const bidValue = parseInt(customBid.replace(/,/g, ""), 10);
    if (!isNaN(bidValue) && bidValue > 0) {
      setCurrentBid(currentBid + bidValue);
      setBidCount(bidCount + 1);
      setCustomBid(""); // Reset input after bidding
    } else {
      alert("Please enter a valid bid amount.");
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark pb-4">
        <div className="container">
          <a className="navbar-brand" href="#">E-Auction Platform</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">HOME</a></li>
              <li className="nav-item"><a className="nav-link" href="#">ABOUT US</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Auction Section */}
      <div className="container">
        <div className="auction-container mx-auto bg-white p-4 mt-4 rounded shadow">
          <div className="row">
            
            {/* Car Image Section */}
            <div className="col-md-6 text-center">
              <h5>MARUTI Swift Dzire LDI</h5>
              <img 
                src={Car}
                className="car-image img-fluid rounded" 
                alt="Car"
              />
            </div>

            {/* Bidding Details */}
            <div className="col-md-6">
              <div className="border p-3">
                <h5><strong>INR {currentBid.toLocaleString()}</strong></h5>
                <p>2d 1h 53m | {bidCount} Bids</p>

                <h6>Place your Bid</h6>
                <div className="row text-center">
                  <div className="col-4">
                    <button className="btn btn-primary w-100" onClick={() => handleBid(50000)}>Bid ₹50,000</button>
                  </div>
                  <div className="col-4">
                    <button className="btn btn-primary w-100" onClick={() => handleBid(75000)}>Bid ₹75,000</button>
                  </div>
                  <div className="col-4">
                    <button className="btn btn-primary w-100" onClick={() => handleBid(100000)}>Bid ₹1,00,000</button>
                  </div>
                </div>

                <hr />
                <div className="text-center">Or</div>
                <hr />

                {/* Custom Bid Input */}
                <div className="text-center">
                  <label className="d-block">INR ₹</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="Enter your bid"
                    value={customBid}
                    onChange={(e) => setCustomBid(e.target.value)}
                  />
                </div>

                <br />

                <button className="btn btn-primary w-100" onClick={handleCustomBid}>Bid</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BidPage2;
