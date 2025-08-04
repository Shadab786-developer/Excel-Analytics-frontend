import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const [xAxis, setXAxis] = useState("");
  const [yAxis, setYAxis] = useState("");

  const navigate = useNavigate();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleGenerateChart = async () => {
    if (!file || !xAxis || !yAxis) {
      alert("Please fill in all fields and upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("xAxis", xAxis);
    formData.append("yAxis", yAxis);

    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/upload/uploadFile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful:", response.data);
      alert("Chart generated successfully!");
      navigate(`/chart/${response.data.data._id}`); // Redirect to chart page with ID
      // You can also update state here with the returned chart/image data
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to generate chart. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          {/* <img src="/images/logo.png" alt="SheetIQ" className="h-10 w-29" /> */}
          <h1 className="text-2xl font-bold text-gray-800">
            Excel Analytics Platform
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Upload Section */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="w-full h-40 bg-purple-200 rounded-lg flex shadow-lg items-center justify-center text-gray-700 text-center px-4 cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <div>
                <div className="text-7xl mb-2">📁</div>
                <p className="text-sm font-medium">
                  Drag and Drop a file here,
                  <br /> or click to browse
                </p>
              </div>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Chart Configuration Section */}
          <div className="flex-1 space-y-4">
            <div className="shadow-xl">
              <label className="block font-semibold mb-1 text-gray-700">
                X-Axis:
              </label>
              <input
                type="text"
                value={xAxis}
                onChange={(e) => setXAxis(e.target.value)}
                placeholder="Enter the Name for X -Axis"
                className="w-full p-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none"
              />
            </div>

            <div className="shadow-xl">
              <label className="block font-semibold mb-1 text-gray-700">
                Y-Axis:
              </label>
              <input
                type="text"
                value={yAxis}
                onChange={(e) => setYAxis(e.target.value)}
                placeholder="Enter the Name for Y-Axis"
                className="w-full p-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none"
              />
            </div>

            <button
              onClick={handleGenerateChart}
              className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Generate Chart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
