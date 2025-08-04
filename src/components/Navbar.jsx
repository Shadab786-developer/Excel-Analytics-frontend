import React from 'react';
import logo from '../images/logo.png';

const Navbar = ({ title }) => {
  return (
    <div className="relative px-4 py-2 h-16 flex items-center">
      {/* Logo on the left */}
      <img
        src={logo}
        alt="Logo"
        className="w-24 md:w-32 absolute left-4 top-1/2 -translate-y-1/2"
      />

      {/* Centered Title */}
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg md:text-2xl font-bold text-center">
        {title}
      </h1>
    </div>
  );
};

export default Navbar;
