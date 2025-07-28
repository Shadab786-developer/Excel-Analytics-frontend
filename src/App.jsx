import React from 'react'
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
