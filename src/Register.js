import { useState } from "react"
import { Link } from "react-router-dom";

const Register=()=>{
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[city,setCity]=useState("");
    const[age,setAge]=useState("");
    const [qualification, setQualification] = useState('BTech');
    const[registered,setRegistered]=useState(true); 
    
    const RegisterHandler=(event)=>{
        event.preventDefault();
        console.log(qualification);    
        setRegistered(false); 
       const registeredData={
            firstName:firstName,
            lastName:lastName,
            city:city,
            age:age,

        }
        localStorage.setItem('registredValue', JSON.stringify(registeredData));

    }
    const firstNameHandler=(event)=>{
        setFirstName(event.target.value);
       

    }
    const lastNameHandler=(event)=>{
        setLastName(event.target.value);
        
    }
    const cityHandler=(event)=>{
        setCity(event.target.value);
    }
    const ageHandler=(event)=>{
        setAge(event.target.value);
        
    }
    const qualificationHandler = (event) => {
        setQualification(event.target.value);
    };
    return(
        <div>
          {registered&&<form onSubmit={RegisterHandler}>
          <label>FirstName</label>
          <input type="text" id="text"
          onChange={firstNameHandler}
           required />   

            <label>LastName</label>
          <input type="text" id="text"
          onChange={lastNameHandler}
           required /> 

             <label>City</label>
          <input type="text" id="text"
          onChange={cityHandler}
           required />   

            <label>Age</label>
          <input type="text" id="text"
          onChange={ageHandler}
           required />  

           <label>Qualification</label> 
           <select value={qualification} onChange={qualificationHandler}>
           <option value="BTech">BTech</option>
           <option value="MTech">MTech</option>
           <option value="BSC">BSC</option>
           <option value="Bcom">Bcom</option>
           <option value="Other">Other</option>
           </select>

           <button type="submit">Register</button>

           </form>
}
           {!registered&&<p>Thanks for Registering</p>}

           <Link to="/login">Login</Link>
     
        </div>
    );
   
}
export default Register;