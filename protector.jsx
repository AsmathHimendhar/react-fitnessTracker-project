import {Navigate} from "react-router-dom";

const ProtectedRoute=({valid, children})=>{
    console.log("ProtectedRoute rendered with",valid,":",children);
    
  if(!valid){
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
