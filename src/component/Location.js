import React from "react";
import { useState } from "react";
// function Click(){
// const[count,setCount]=useState(0);
// function handle(){
//     setCount(count+1);
// }
// return (
//     <div><button onClick={handle}>Click</button>
//     <p>Name:{count}</p>
//     </div>
// );
// }


function Location(){
    const[isVisible,setIsVisible]=useState(false)
    function ChangeLocation(){
        setIsVisible(!isVisible);
    }
    return(
        <div><button onClick={ChangeLocation}>{
            isVisible?'hide':'show'
        }</button>
        {
            isVisible&&<p>This is Location Message</p>
        }</div>
    )
}

// export default Click;
export default Location;


















