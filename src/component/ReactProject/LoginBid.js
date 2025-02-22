// import { Link } from "react-router-dom";


// export default function LoginBid() {
//   return (
//     <div className="container-fluid vh-100 px-0">
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark pb-4" style={{ backgroundColor: "#343A40" }}>
//         <div className="container">
//           <a className="navbar-brand text-white" href="#">E-Auction Platform</a>
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item"><Link  to="/signup" className="nav-link text-white" >HOME</Link></li>
//               <li className="nav-item"><a className="nav-link text-white" href="#">ABOUT US</a></li>
//               <li className="nav-item"><Link  to="/BidPage1" className="nav-link text-warning fw-bold">LOGIN</Link></li>
//               <li className="nav-item"><Link  to=""  className="nav-link text-white" href="#">SIGNUP</Link></li>
//             </ul>
//           </div>
//         </div>
//       </nav>
      
//       {/* Login Form */}
//       <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#FFFFFF" }}>
//         <div className="p-4 rounded-2 text-center" style={{ backgroundColor: "#F7E6E6", width: "350px" }}>
//           <div className="py-3 text-white fw-bold rounded-top" style={{ backgroundColor: "#1E2560" }}>LOGIN</div>
//           <div className="p-4">
//             <input type="text" className="form-control mb-3 rounded-pill" placeholder="username" />
//             <input type="password" className="form-control mb-3 rounded-pill" placeholder="password" />
//             <button className="btn text-white w-100 rounded-pill" style={{ backgroundColor: "#1E2560" }}>LOGIN</button>
//             <p className="mt-3 text-dark">Don’t have an account? <span className="fw-bold text-primary" style={{ cursor: "pointer" }}>SIGN UP NOW</span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function LoginBid() {
  return (
    <div className="vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark pb-4" style={{ backgroundColor: "#343A40" }}>
        <div className="container">
          <a className="navbar-brand text-white" href="#">E-Auction Platform</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link to="#" className="nav-link text-white">HOME</Link></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">ABOUT US</a></li>
              <li className="nav-item"><Link to="#" className="nav-link text-warning fw-bold">LOGIN</Link></li>
              <li className="nav-item"><Link to="/signup" className="nav-link text-white">SIGNUP</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Form - Centered */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="p-4 rounded shadow text-center" style={{ backgroundColor: "#F7E6E6", maxWidth: "350px", width: "100%" }}>
          <div className="py-3 text-white fw-bold rounded-top" style={{ backgroundColor: "#1E2560" }}>LOGIN</div>
          <div className="p-4">
            <input type="text" className="form-control mb-3 rounded-pill" placeholder="Username" />
            <input type="password" className="form-control mb-3 rounded-pill" placeholder="Password" />
            <button className="btn text-white w-100 rounded-pill" style={{ backgroundColor: "#1E2560" }}><Link to="/VehPage" className="nav-link text-white">LOGIN
            </Link></button>
            <p className="mt-3 text-dark">
              Don’t have an account? <Link to="/signup" className="fw-bold text-primary" style={{ cursor: "pointer" }}>SIGN UP NOW</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
