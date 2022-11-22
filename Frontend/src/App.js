import './App.css';
import {BrowserRouter as Router, Routes, Navigate, Route} from "react-router-dom";
import { useState } from 'react';
import ModelsPage from './Pages/Model_Selection/ModelsPage';
import Startpage from './Pages/Startpage/Startpage';
import Navbar from './Components/Navbar/navbar';
function App() {

  return (
    <div className="App">
      <div className="wrapper vcenter-item"> 
      <Navbar/>
          <Routes>
            <Route path='/' element={<Startpage/>}/>
            <Route path='/ModelsPage' element={<ModelsPage/>} />
          </Routes>
      </div>
    </div>
  );
}
export default App;
