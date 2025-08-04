import React from 'react'
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
   <>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
