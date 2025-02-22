// import { Link } from "react-router-dom";

// export default function SignUp() {
//   return (
//     <div className="container-fluid vh-100 px-0">
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark pb-4" style={{ backgroundColor: "#343A40" }}>
//         <div className="container">
//           <a className="navbar-brand text-white" href="#">E-Auction Platform</a>
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item"><Link  to="/BidPage1" className="nav-link text-white">HOME</Link></li>
//               <li className="nav-item"><a className="nav-link text-white" href="#">ABOUT US</a></li>
//               <li className="nav-item"><a className="nav-link text-white" href="#">LOGIN</a></li>
//               <li className="nav-item"><a className="nav-link text-warning fw-bold" href="#">SIGNUP</a></li>
//             </ul>
//           </div>
//         </div>
//       </nav>
      
//       {/* Signup Form */}
//       <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#FFFFFF" }}>
//         <div className="p-4 rounded-1 text-center" style={{ backgroundColor: "#1E2560", width: "350px" }}>
//           <div className="py-3 fw-bold rounded-top" style={{ backgroundColor: "#F7E6E6" }}>SIGN UP</div>
//           <div className="p-4">
//             <input type="text" className="form-control mb-3 rounded-pill" placeholder="username" />
//             <input type="password" className="form-control mb-3 rounded-pill" placeholder="password" />
//             <input type="password" className="form-control mb-3 rounded-pill" placeholder="Re-enter password" />
//             <button className="btn text-dark w-100 rounded-pill" style={{ backgroundColor: "#F7E6E6" }}>SIGN UP</button>
//             <p className="mt-3 text-white">Already have an account? <span className="fw-bold text-light" style={{ cursor: "pointer" }}>LOGIN</span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark pb-4" style={{ backgroundColor: "#343A40" }}>
        <div className="container">
          <a className="navbar-brand text-white" href="#">E-Auction Platform</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link to="/" className="nav-link text-white">HOME</Link></li>
              <li className="nav-item"><Link to="/VehPage" className="nav-link text-white">ABOUT US</Link></li>
              <li className="nav-item"><Link to="BidPage" className="nav-link text-white">LOGIN</Link></li>
              <li className="nav-item"><Link to="/VehPage" className="nav-link text-white">SIGNUP</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Signup Form - Centered */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="p-4 rounded text-center shadow" style={{ backgroundColor: "#1E2560", maxWidth: "350px", width: "100%" }}>
          <div className="py-3 fw-bold rounded-top" style={{ backgroundColor: "#F7E6E6" }}>SIGN UP</div>
          <div className="p-4">
            <input type="text" className="form-control mb-3 rounded-pill" placeholder="Username" />
            <input type="password" className="form-control mb-3 rounded-pill" placeholder="Password" />
            <input type="password" className="form-control mb-3 rounded-pill" placeholder="Re-enter Password" />
            <button className="btn text-dark w-100 rounded-pill" style={{ backgroundColor: "#F7E6E6" }}>SIGN UP</button>
            <p className="mt-3 text-white">Already have an account? <span className="fw-bold text-light" style={{ cursor: "pointer" }}>LOGIN</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
