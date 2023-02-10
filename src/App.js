import styles from './App.module.css';
import {useState, useEffect} from "react";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import { Router, Routes, Route } from "react-router-dom";

/* Route는 URL을 의미 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
  )
}

export default App;
