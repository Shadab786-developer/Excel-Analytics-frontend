import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import CartToSelectLogin from "../components/Login/CartToSelectLogin";
import Registration from "../components/Register/Registration.jsx";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import Upload from "../pages/Upload.jsx";
import AdminLogin from "../components/Login/AdminLogin";
import UserLogin from "../components/Login/UserLogin";
import VerifyEmail from "../components/VerifyEmail";
import Chart from "../pages/Chart.jsx";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/login/" element={<CartToSelectLogin />}>
          <Route index element={<AdminLogin />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="user" element={<UserLogin />} />
        </Route>
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/chart/:id" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
