import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    console.log("Token", token);

    try {
      const response = await axios.post(
        "https://excel-analytics-backend-kg80.onrender.com/api/v1/userAuth/login",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem("role", "admin");
      console.log(response.data);
      // Navigate to dashboard
      navigate("/");
    } catch (err) {
      console.log("Error for login admin User :-", err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white py-3 px-4 sm:px-6 lg:px-8 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full mx-auto space-y-8 bg-purple-800 text-white p-8 rounded-3xl shadow-2xl "
      >
        {/* Header Section */}
        <div className="text-center">
          <motion.h2
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-3xl font-extrabold "
          >
            Welcome
          </motion.h2>
          <p className="mt-2 text-sm ">Please LogIn as an Admin</p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium ">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border 
                         border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 
                         focus:outline-none focus:ring-green-500 focus:border-green-500 
                         focus:z-10 sm:text-sm"
                placeholder="Enter your email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium ">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border 
                         border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 
                         focus:outline-none focus:ring-green-500 focus:border-green-500 
                         focus:z-10 sm:text-sm"
                placeholder="Enter your password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 
                         border-gray-300 rounded cursor-pointer accent-white"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm ">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium ">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border 
                       border-transparent text-sm font-medium rounded-lg text-black 
                       bg-white hover:bg-white focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-white transition-colors 
                       duration-200"
            >
              Login
            </motion.button>
          </div>
        </form>

        {/* Footer Section */}
        <div className="text-center text-sm">
          <span className="text-black">Don't have an account? </span>
          <Link
            to="/register"
            className="font-medium text-white hover:text-white"
          >
            Sign up
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminLogin;
