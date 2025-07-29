import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.png" // Replace with actual logo path
              alt="SheetIQ"
              className="h-15 w-40 mr-2"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm text-gray-800 hover:text-purple-600">
              Home
            </a>
            <a
              href="/about"
              className="text-sm text-gray-800 hover:text-purple-600"
            >
              About
            </a>
            <a
              href="/login"
              className="px-4 py-1 rounded-md bg-purple-700 text-white text-sm shadow hover:bg-purple-800"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-4 py-1 rounded-md bg-purple-700 text-white text-sm shadow hover:bg-purple-800"
            >
              Register
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-800">
            Home
          </a>
          <a href="#" className="block text-gray-800">
            About
          </a>
          <a
            href="/login"
            className="block text-center bg-purple-700 text-white py-1 rounded-md shadow hover:bg-purple-800"
          >
            Login
          </a>
          <a
            href="/register"
            className="block text-center bg-purple-700 text-white py-1 rounded-md shadow hover:bg-purple-800"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
