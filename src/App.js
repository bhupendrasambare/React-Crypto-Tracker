import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Crypto from './Pages/Crypto';
import Home from './Pages/Home';

function App() {
  return (
    <div>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/coin/:id' element={<Crypto/>}/>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
