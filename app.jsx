
import { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Pages from "./pages";

const TrackerApp = () => {
    const [valid, setValid] = useState(false);
    const[count,setcount]=useState(0);
    console.log("app Render"); 
    console.log({valid});
    const log = useCallback((a) => {
        setValid(a);
    },[])

    return (
        <div>

            <Header setValid={log} />
            <button onClick={() => setcount(c=>c+1)}>Logout</button>
            <Pages valid={valid} setValid={log}/>
        
    </div>
)
}

export default TrackerApp;
