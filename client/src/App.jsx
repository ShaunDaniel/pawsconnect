import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {Routes, Route} from "react-router-dom"
import services from "./services/pets";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login"
import Pets from "./components/Pets";
import PetAdd from "./components/PetAdd";


function App() {
  return (
    
    <div className="App">
      <div className="h-screen flex flex-col">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pets" element={<Pets/>}></Route>
          <Route path="/petadd" element={<PetAdd/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
