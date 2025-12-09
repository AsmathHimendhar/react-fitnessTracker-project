import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=({ setValid })=>{
const[count,setcount]=useState(0);
    const [input,setInput] = useState({username:"", password:""});
    const [error, setError] = useState([]);
      const navigate = useNavigate();
    let inputs= [
          {label:"Username",name:"username", min:4, type:"text", errorMsg:"Username must be at least 4 characters"},
          {label:"Password",name:"password", min:5, type:"password", errorMsg:"Password must be at least 5 characters"}
                ]
console.log("Login Rendered");
    const handleLogin = () => {
      console.log("handleLogin called");
      let errors=[];
       inputs.
forEach((i)=>{input[i.name]<i.min?errors=[...errors,i.name]:""     
})
//setError(errors||[]);
if(!errors.length){
        setValid(true);
        navigate("/dashboard");
}
    }

    return(
        <div>
            <h2>Login</h2>
             <button onClick={() => setcount(c=>c+1)}>Inlog</button>
            <p>enter details to login</p>
            <div>{inputs.map((i)=><div>
                  <label>{i.label}:</label>
                  <input type={i.type}  value={input[i.name]} onChange={(e) => setInput({...input,[i.name]:e.target.value})} />
                  <span style={{color:"red", display: error.includes(i.name) ? "block" : "none"}}>{i.errorMsg}</span>
                </div>)}
                
                
                <div>
                  <button onClick={() =>(handleLogin(), console.log({ username: input.username, password: input.password }))}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login;
