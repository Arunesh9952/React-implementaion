import React from "react";
const DateT=()=>{
    let date=new Date();
    let cur=date.getTime()
    return(
        <div><h3>Display the Date of Today:{cur}</h3></div>
    )
}
export default DateT;