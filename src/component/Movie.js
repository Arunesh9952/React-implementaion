import React from "react";
import Md from "./Md";
const Movie=()=>{
    const list=[{
        title:"the goat",
        year:2024,
        rating:5
    },
{
    title:"marco",
        year:2025,
        rating:4
}
,
{
    
    title:"kalki",
        year:2024,
        rating:3
}]
    return(
        <>
             {list.map((l,i)=>(
                <Md key={i} {...l}/>
             ))}
        </>
    )
}
export default Movie;