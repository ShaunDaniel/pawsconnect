import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import Pets from './components/Pets'


function App() {

  const url = "http://localhost:3001/api/pets/"
  const [pets,setPets] = useState([{}])


  useEffect(()=>{
    console.log("inside effect")
    axios.get(url).then((result)=>{
      setPets(result.data)
    })
    .catch((error)=>{
      console.error(error)
    })
    
  
  },[])

  return (
    <div className="App">
      <Pets pets={pets}></Pets>
    </div>
  );
}

export default App;
