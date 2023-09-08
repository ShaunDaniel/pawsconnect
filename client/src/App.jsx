import "./App.css";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login"
import User from "./components/User"
import Register from "./components/Register"
import Pets from "./components/Pets";
import MyPets from "./components/MyPets";
import PetAdd from "./components/PetAdd";
import { useState,useEffect } from "react";
import services from "./services/pets";



function App() {


  return (
    <div className="App">
      <div className="h-screen flex flex-col">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pets" element={<Pets/>}></Route>
          <Route path="/mypets" element={<MyPets/>} ></Route>
          <Route path="/petadd" element={<PetAdd/>} ></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/user/:id" element={<User/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
