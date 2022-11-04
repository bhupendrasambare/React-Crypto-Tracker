import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Crypto from './Pages/Crypto';
import Home from './Pages/Home';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/:id' element={<Crypto/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
