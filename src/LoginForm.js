import { useState } from "react";

const LoginForm=()=>{
const[userName,setUserName]=useState("");
const[password,setPassword]=useState("");
    const userNameHandler=(event)=>{
        setUserName(event.target.value);
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }

    const loginHandler=()=>{
        console.log(userName);
        console.log(password);
    }

    return(
        <div>
            <form onSubmit={loginHandler}> 
            <div>
            <label>UserName</label>
            <input type="text"
             id="userName"
              name="userName"
              onChange={userNameHandler}
              required/ >

            <label>Password</label>
            <input type="password" id="password"
             onChange={passwordHandler}
             required/> 
            <button onClick={loginHandler} >Login</button>  
             </div>
             </form>
        </div>

    );
}
export default LoginForm;