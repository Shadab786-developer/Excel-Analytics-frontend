import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import ChartJS from "chart.js/auto"; // Chart.js for 2D chart

function Chart() {
  const { id } = useParams();
  const [chartData, setChartData] = useState(null);
  const mountRef = useRef(null);
  const [chartType, setChartType] = useState("bar"); // can be 'bar', 'pie', or 'line'
  const chart2dRef = useRef(null);
  const chartInstanceRef = useRef(null); // To avoid multiple instances
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  // Fetch data from backend
  const fetchAnalysis = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:7000/api/v1/upload/analyze/${id}`
      );
      setChartData(res.data.chartData); // assuming the data has .chartData inside
    } catch (error) {
      console.error("Analysis error:", error);
      alert("Failed to analyze chart");
    }
  };

  useEffect(() => {
    fetchAnalysis(id);
  }, [id]);

  // Chart.js 2D Chart
  useEffect(() => {
    if (chartData && chart2dRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Destroy previous chart if any
      }

      chartInstanceRef.current = new ChartJS(chart2dRef.current, {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Monthly Sales Chart (2D)",
            },
          },
        },
      });
    }
  }, [chartData]);

  // Three.js 3D Chart
  useEffect(() => {
    if (!chartData || !mountRef.current) return;
    // Clean previous chart (important if changing chartType)
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    const { datasets } = chartData;
    const data = datasets[0].data;

    const width = mountRef.current.clientWidth;
    const height = 400;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 5, 15);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0x404040));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Grid (optional)
    const gridHelper = new THREE.GridHelper(20, 20);
    scene.add(gridHelper);

    // Draw chart based on selected type
    if (chartType === "bar") {
      data.forEach((value, index) => {
        const geometry = new THREE.BoxGeometry(0.5, value / 100, 0.5);
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(`hsl(${index * 30}, 70%, 50%)`),
          roughness: 0.4,
          metalness: 0.3,
        });
        const bar = new THREE.Mesh(geometry, material);
        bar.position.x = index - data.length / 2;
        bar.position.y = value / 200;
        scene.add(bar);
      });
    } else if (chartType === "pie") {
      const total = data.reduce((acc, val) => acc + val, 0);
      let startAngle = 0;

      data.forEach((value, index) => {
        const angle = (value / total) * Math.PI * 2;

        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.absarc(0, 0, 5, startAngle, startAngle + angle, false);
        shape.lineTo(0, 0);

        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 1,
          bevelEnabled: false,
        });

        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(`hsl(${index * 30}, 70%, 60%)`),
        });

        const pieSlice = new THREE.Mesh(geometry, material);
        pieSlice.rotation.x = -Math.PI / 2;
        scene.add(pieSlice);

        startAngle += angle;
      });
    } else if (chartType === "line") {
      const points = data.map(
        (val, i) => new THREE.Vector3(i - data.length / 2, val / 100, 0)
      );
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0x00aaff });
      const line = new THREE.Line(geometry, material);
      scene.add(line);

      // Optional: add points
      points.forEach((point, index) => {
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 16, 16),
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(`hsl(${index * 30}, 100%, 50%)`),
          })
        );
        sphere.position.copy(point);
        scene.add(sphere);
      });
    }

    // Animate & render
    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [chartData, chartType]);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-white rounded shadow space-y-10 mt-10">
      {/* Dropdown for selecting chart type */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Chart Type:</span>
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          className="mt-2 w-40 px-3 py-2 text-sm border rounded-md shadow-sm bg-white border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="bar">3D Bar</option>
          <option value="pie">3D Pie</option>
          <option value="line">3D Line</option>
        </select>
      </div>
      <h2 className="text-2xl font-semibold text-center mb-6">Sales Chart</h2>

      {/* Chart.js 2D */}
      <div className="bg-gray-100 p-4 rounded shadow">
        <h3 className="text-lg font-medium mb-2 text-center">
          Chart.js (2D Line Chart)
        </h3>
        <canvas ref={chart2dRef} className="w-full h-[300px]" />
      </div>

      {/* Three.js 3D */}
      <div className="bg-gray-100 p-4 rounded shadow">
        <button
          onClick={() => {
            const canvas = renderer.domElement; // ✅ get canvas from Three.js
            const link = document.createElement("a");
            link.download = "3d-chart.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
          }}
          className="mt-2 mb-4 px-4 py-2 bg-blue-600 text-white text-sm rounded shadow hover:bg-blue-700"
        >
          Download 3D Chart as PNG
        </button>

        <h3 className="text-lg font-medium mb-2 text-center">
          Three.js (3D Bar Chart)
        </h3>
        <div ref={mountRef} className="w-full h-[400px]" />
      </div>
    </div>
  );
}

export default Chart;
