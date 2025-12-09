import { memo } from "react";
import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = memo(({setValid}) => {
    console.log("Header rendered");
    const[count,setcount]=useState(0);
     const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath,"**********");
    return (
        <header style={{ borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ margin: '10px' }}>Fitness Tracker</h1>
             <button onClick={() => {setcount(c=>c+1)}}>header</button>
            {currentPath!=="/" ?(<nav style={{ margin: "10px",display: 'flex', gap: '20px' }}>
                <Link to="/" onClick={() => setValid(false)}>Login</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/meals">Meals</Link>
                <Link to="/workout">Workout</Link>
            </nav>):(<p>login</p>)}
        </header>
    );
})
export default Header;
