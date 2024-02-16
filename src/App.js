import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './component/Home/Home';
import Contactus from './component/Contact/Contactus';
import About from './component/About/About';
import Servise from './component/Services/Servise';

function App() {
  return (
  <div className="">
    <BrowserRouter>
    <Routes>
      <Route path="/"
      element={<Home/>}
      />
      <Route path="/contactus"
      element={<Contactus/>}
      />
       <Route path="/about"
      element={<About/>}
      />
      <Route path="/services"
      element={<Servise/>}
      />
    </Routes>
    </BrowserRouter>

  </div>
  )
}

export default App

