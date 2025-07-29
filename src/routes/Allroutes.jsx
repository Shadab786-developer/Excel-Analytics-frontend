import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import CartToSelectLogin from "../components/Login/CartToSelectLogin";
import CartToSelect from "../components/Register/CartToSelect";
import AdminRegister from "../components/Register/AdminRegister";
import UserRegistration from "../components/Register/UserRegistration";
import AdminLogin from "../components/Login/AdminLogin";
import UserLogin from "../components/Login/UserLogin";
import VerifyEmail from "../components/VerifyEmail";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register/" element={<CartToSelect />}>
          <Route index element={<AdminRegister />} />
          <Route path="admin" element={<AdminRegister />} />
          <Route path="user" element={<UserRegistration />} />
        </Route>
        <Route path="/login/" element={<CartToSelectLogin />}>
          <Route index element={<AdminLogin />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="user" element={<UserLogin />} />
        </Route>
        <Route path="/verify" element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
