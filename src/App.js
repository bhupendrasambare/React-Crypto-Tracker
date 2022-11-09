import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Crypto from './Pages/Crypto';
import Home from './Pages/Home';

function App() {
  return (
    <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/coin/:id' element={<Crypto/>}/>
            </Routes>
    </div>
  );
}

export default App;
