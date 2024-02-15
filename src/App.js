import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './component/Home/Home';
import Contactus from './component/Contact/Contactus';

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
    </Routes>
    </BrowserRouter>

  </div>
  )
}

export default App

