import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white pt-30 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-7xl font-bold text-gray-800 leading-tight">
            Exel Analytics <br /> Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mt-4">
            Analyze Excel files & generate <br /> 2D/3D charts instantly
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            A MERN stack application to upload Excel data, select axes, and
            visualize it using interactive and downloadable charts.
          </p>
          <button
            className="mt-6 bg-purple-700 text-white px-5 py-2 rounded-md shadow hover:bg-purple-800 text-md md:text-lg"
            onClick={() => navigate("/upload")}
          >
            Try the Platform
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/hero-chart.png" // Replace with your actual image path
            alt="Chart Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
