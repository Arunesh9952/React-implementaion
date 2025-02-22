import React, { useState } from "react";

const BidPage = () => {
  const [bid, setBid] = useState("");

  const handleBid = (amount) => {
    setBid(amount);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white flex justify-between p-4 px-10">
        <h1 className="text-xl font-semibold">E-Auction Platform</h1>
        <div className="space-x-5">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#" className="hover:underline">ABOUT US</a>
        </div>
      </nav>

      {/* Auction Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-6 mt-5 rounded-lg">
        <div className="grid grid-cols-2 gap-5">
          {/* Car Image */}
          <div className="flex flex-col items-center">
            <img 
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/47283/swift-dzire-exterior-right-front-three-quarter-8.jpeg" 
              alt="Maruti Swift Dzire"
              className="rounded-lg shadow-md"
            />
            <h2 className="mt-3 font-semibold text-lg">MARUTI Swift Dzire LDI</h2>
          </div>

          {/* Bidding Section */}
          <div className="border p-5 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold text-gray-800">INR 4,99,999</h2>
              <button className="bg-gray-300 text-black px-3 py-1 rounded-md text-sm">Hang Bell - 3</button>
            </div>

            <p className="text-gray-600 mt-1">2d 1h 53m | 24 Bid</p>

            <h3 className="mt-5 text-lg font-semibold">Place your Bid</h3>

            {/* Quick Bid Buttons */}
            <div className="flex space-x-3 mt-3">
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => handleBid("50000")}
              >
                Bid ₹50,000
              </button>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => handleBid("75000")}
              >
                Bid ₹75,000
              </button>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => handleBid("100000")}
              >
                Bid ₹1,00,000
              </button>
            </div>

            <div className="text-center my-4 text-gray-500">Or</div>

            {/* Manual Bid Input */}
            <div className="flex items-center space-x-3">
              <input 
                type="number" 
                className="border p-2 rounded-md w-full"
                placeholder="Enter Bid Amount"
                value={bid}
                onChange={(e) => setBid(e.target.value)}
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Bid
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BidPage;
