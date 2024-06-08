import LoginForm from "./LoginForm";
import Register from "./Register";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
    <p>Welcome</p>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/success' element={<LoginForm/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
