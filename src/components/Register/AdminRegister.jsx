// src/pages/AdminRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminRegister() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://excel-analytics-backend-kg80.onrender.com/api/v1/userAuth/signup",
        {
          userName,
          email,
          password,
        }
      );

      const token = response.data.data.accessToken;
      localStorage.setItem("accessToken", token); // Save token
      localStorage.setItem("role", "admin");
      localStorage.setItem("email", response.data.data.user.email);
      localStorage.setItem("UserrName", response.data.data.user.name);
      localStorage.setItem("_id", response.data.data.user._id);
      console.log(response.data);

      // Navigate to dashboard
      navigate("/verify");
    } catch (err) {
      setError("Invalid credentials. Please try again.", err.message);
    }
  };

  return (
    <div className="sm:p-1 flex items-center justify-center bg-white">
      <form
        onSubmit={handleLogin}
        className="bg-purple-800 p-8 rounded-3xl shadow-md w-full max-w-sm text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Registration
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1">User Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border  rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border  rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border  rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black p-2 rounded hover:bg-white transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default AdminRegister;
