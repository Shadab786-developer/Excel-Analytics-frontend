<<<<<<< HEAD
import React from 'react'
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import Register from './components/Register';
import Login from './components/Login';
=======
import React from "react";
import AllRoutes from "./routes/Allroutes";
import Navbar from "./components/Navbar";
>>>>>>> aca2e0cbf68bf94dcd77d319ec0f520bfa2901ca

const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
};

export default App;
