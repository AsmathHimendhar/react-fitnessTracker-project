import React, { useState } from "react";
const Meals =()=>{
    const[count,setcount]=useState(0);

    console.log("Meals rendered");
    
    return(<div> <button onClick={() => setcount(c=>c+1)}>meals</button></div>)
}

export default Meals;
