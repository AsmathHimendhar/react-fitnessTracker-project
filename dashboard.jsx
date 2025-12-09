import { useMemo, useState } from "react";

const Dashboard=()=>{
    console.log("Dashboard rendered");
     const[count,setcount]=useState(0);
    const havy=useMemo(()=>{
        console.log("heavy computation++++++++++");
        
        let num=0
        for(let i=0;i<=50000000;i++){
           for(let j=0;j<=5;j++){
            num++
        }
        }
        return num
    },[])
    return(<div>dashboard
        <p>{havy}</p>
        <button onClick={() => setcount(c=>c+1)}>dash</button>
    </div>)
}
export default Dashboard;
