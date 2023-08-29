import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {Routes, Route} from "react-router-dom"

import Home from "./components/Home";
import Nav from "./components/Nav";
import Pets from "./components/Pets";
import PetAdd from "./components/PetAdd";


function App() {
  const url = "http://localhost:3001/api/pets/";
  const [pets, setPets] = useState([{}]);

  useEffect(() => {
    console.log("inside effect");
    axios
      .get(url)
      .then((result) => {
        setPets(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);





  return (
    
    <div className="App">
      <div className="h-screen flex flex-col">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pets" element={<Pets pets={pets}/>}></Route>
          <Route path="/petadd" element={<PetAdd pets={pets}/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
