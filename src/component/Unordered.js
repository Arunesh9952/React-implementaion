import React from "react";
import Image1 from "../assets/images/Mango.webp"
import Imager2 from "../assets/images/Apple.jpeg"
import Imager3 from "../assets/images/Grape.jpeg"
function Unordered(){
    return(
        <div>
                 <div className="n">Favourite Fruits</div>
          <ul>
            <li>Mango</li>
            <li>Apple</li>
            <li>Grapes</li>
            <li><img className="rounded-circle" style={{height:"140px", width:"140px"}}src={Image1} alt="Mango"></img></li>
            <li><img src={Imager2}></img></li>
            <li><img src={Imager3}></img></li>
          </ul>
        </div>
    )
}
export default Unordered;