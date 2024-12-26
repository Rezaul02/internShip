import React from 'react';
import Home from './Pages/Home';
import Sidebar from './Component/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Import the CSS for styling
import About from './Pages/About';
import Resume from './Pages/Resume'
import Protfolio from './Pages/Protfolio';
import Services from './Pages/Services';


const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element ={<About/>} />
            <Route path='/resume' element ={<Resume />} />
            <Route path='/protfolio' element={<Protfolio/>} />
            <Route path='/services' element={<Services/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
