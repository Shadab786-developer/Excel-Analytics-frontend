import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as THREE from "three";

function Chart() {
  const { id } = useParams();
  const [chartData, setChartData] = useState(null);
  const mountRef = useRef(null);

  useEffect(() => {
    const { labels, datasets } = chartData;
    const data = datasets[0].data;

    const width = mountRef.current.clientWidth;
    const height = 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const material = new THREE.MeshStandardMaterial({ color: 0x4bc0c0 });
    const barWidth = 0.5;

    // Create bars
    data.forEach((value, index) => {
      const geometry = new THREE.BoxGeometry(barWidth, value / 100, barWidth);
      const bar = new THREE.Mesh(geometry, material);
      bar.position.x = index - data.length / 2;
      bar.position.y = value / 200;
      scene.add(bar);
    });

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 10, 10);
    scene.add(light);

    camera.position.z = 10;
    camera.position.y = 5;
    camera.lookAt(0, 0, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [chartData]);

  const fetchAnalysis = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:7000/api/v1/upload/analyze/${id}`
      );

      setChartData(res.data);
      console.log("Chart data:", res.data);
    } catch (error) {
      console.error("Analysis error:", error);
      alert("Failed to analyze chart");
    }
  };

  useEffect(() => {
    fetchAnalysis(id);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold text-center mb-4">3D Sales Chart</h2>
      <div ref={mountRef} className="w-full h-[400px]" />
    </div>
  );
}

export default Chart;
