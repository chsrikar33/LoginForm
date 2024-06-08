import { useState } from "react";

const LoginForm=()=>{
const[userName,setUserName]=useState("");
const[password,setPassword]=useState("");
const[loggedIn,setLoggedIn]=useState(false);
    const userNameHandler=(event)=>{
        setUserName(event.target.value);
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }


    const loginHandler=(event)=>{
        event.preventDefault();
        console.log(userName);
        console.log(password);
        setLoggedIn(true);
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
             {loggedIn&&<p>Login successful</p>}
        </div>

      

    );
}
export default LoginForm;