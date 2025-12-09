import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import ProtectedRoute from "./protector";
import Meals from "./meals";
import  Workouts from "./workouts";
const Pages = React.memo(({valid,setValid}) => {
    
    console.log("Pages rendered");
    const[count,setcount]=useState(0);
    return (
        <div>
            <button onClick={() => setcount(c=>c+1)}>pages</button>
            {<Routes>
            <Route path="/" element={<Login setValid={setValid} />} />
            <Route path="/dashboard" element={
        <ProtectedRoute valid={valid}>
            <Dashboard />
        </ProtectedRoute>}
            />
            <Route path="/workout" element={
        <ProtectedRoute valid={valid}>
            <Workouts/>
        </ProtectedRoute>}
            />
            <Route path="/meals" element={
        <ProtectedRoute valid={valid}>
            <Meals />
        </ProtectedRoute>}
            />

        </Routes> }
        </div>
    );
})
export default Pages;
