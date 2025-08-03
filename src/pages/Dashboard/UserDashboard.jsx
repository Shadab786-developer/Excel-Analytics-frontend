import React from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 bg-white p-4 shadow-md">
        <div className="bg-gray-200 rounded-md p-2 mb-4 flex items-center">
          <div className=" flex items-center ">
            <img src="/images/name (2).png" alt="Person" className="h-8 w-8" />{" "}
            <span className="text-gray-700 text-sm font-bold ml-4"> Name</span>
          </div>
        </div>
        <nav className="space-y-2 text-gray-700 text-sm">
          <div className=" flex items-center bg-gray-200 rounded-md p-2">
            <img src="/images/dashboard.png" alt="Person" className="h-8 w-8" />{" "}
            <span className="text-gray-700 text-sm font-bold ml-4">
              {" "}
              Dashboard
            </span>
          </div>
          <div className=" flex items-center bg-gray-200 rounded-md p-2">
            <img src="/images/upload.png" alt="Person" className="h-8 w-8" />{" "}
            <span className="text-gray-700 text-sm font-bold ml-4">
              {" "}
              Upload Excel
            </span>
          </div>
          <div className=" flex items-center bg-gray-200 rounded-md p-2">
            <img
              src="/images/generate-chat.png"
              alt="Person"
              className="h-8 w-8"
            />{" "}
            <span className="text-gray-700 text-sm font-bold ml-4">
              {" "}
              Generate Chart
            </span>
          </div>
          <div className=" flex items-center bg-gray-200 rounded-md p-2">
            <img src="/images/history.png" alt="Person" className="h-8 w-8" />{" "}
            <span className="text-gray-700 text-sm font-bold ml-4">
              {" "}
              History
            </span>
          </div>
          <div className=" flex items-center bg-gray-200 rounded-md p-2">
            <img src="/images/ai.png" alt="Person" className="h-8 w-8" />{" "}
            <span className="text-gray-700 text-sm font-bold ml-4">
              {" "}
              AI Insights
            </span>
          </div>
          <div className=" flex items-center bg-gray-200 rounded-md p-2">
            <img src="/images/logout.png" alt="Person" className="h-8 w-8" />{" "}
            <span className="text-gray-700 text-sm font-bold ml-4">
              {" "}
              Logout
            </span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Welcome */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome back! <span className="ml-1">👋</span>
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-purple-200 p-4 rounded-md shadow text-center">
            <img
              src="/images/file-upload.png"
              alt="File-upload"
              className="rounded-2xl h-28 w-28"
            />
            <div className="text-xl font-bold">0</div>
            <p className="text-gray-700 text-lg font-bold">Files Uploaded</p>
          </div>
          <div className="bg-rose-200 p-4 rounded-md shadow text-center">
            <img
              src="/images/chart-generate.png"
              alt="File-upload"
              className="rounded-2xl h-28 w-28"
            />
            <div className="text-xl font-bold">0</div>
            <p className="text-gray-700 text-lg font-bold">Chart Generated</p>
          </div>
          <div className="bg-sky-200 p-4 rounded-md shadow text-center">
            <img
              src="/images/last-upload.png"
              alt="File-upload"
              className="rounded-2xl h-28 w-28"
            />
            <div className="text-xl font-bold">0</div>
            <p className="text-gray-700 text-lg font-bold">
              Sales.xlsx Last Uploaded
            </p>
          </div>
          <div className="bg-indigo-300 p-4 rounded-md shadow text-center">
            <img
              src="/images/ai-insights.png"
              alt="File-upload"
              className="rounded-2xl h-28 w-28"
            />
            <div className="text-xl font-bold">0</div>
            <p className="text-gray-700 text-lg font-bold">AI Insights Used</p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-md shadow">
            <h2 className="text-gray-700 text-lg font-bold">Recent Uploads</h2>
            <div className="bg-gray-100 h-32 rounded-md flex items-center justify-center text-gray-400">
              No recent files
            </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h2 className="text-gray-700 text-lg font-bold">
              Last Generated Chart
            </h2>
            <div className="bg-gray-100 h-32 rounded-md flex items-center justify-center text-gray-400">
              <img
                src="/images/hero-chart.png"
                alt="Chart"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Try Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/upload")}
            className="bg-purple-700 text-white px-6 py-2 rounded-md shadow hover:bg-purple-800 transition font-bold text-lg"
          >
            Try The Platform
          </button>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
