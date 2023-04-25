import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [ value,setvalue]= useState(0)
  return (
    <div>
   <h1> Counter App</h1>
   <h2> {value}</h2>
   <button className="btn btn-outline-success" onClick={()=> setvalue(value +1)}>Increment</button>
   <button className="btn btn-outline-danger" onClick={()=> {if (value!=0) {setvalue(value -1 )}}}>Degrement</button>

   <button className="btn btn-outline-secondary" onClick={()=> setvalue(0)}>Reset</button>

    </div>
  );
}

export default App;
