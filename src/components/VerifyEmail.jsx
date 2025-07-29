import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const inputRefs = useRef([]);

  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length !== 4) {
      setMessage("Please enter all 4 digits.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      const response = await axios.post(
        "https://excel-analytics-backend-kg80.onrender.com/api/v1/userAuth/verify-email",
        { email: email, code: Number(code) }
      );
      setMessage(response.data.message || "Email verified successfully!");
      navigate("/login");
    } catch (error) {
      setMessage(error.response?.data?.message || "Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-purple-600 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Verify Your Email
        </h2>

        <img
          src="/images/mail-verify.png"
          alt="VerifyEmail"
          className="items-center mx-auto mb-6 bg-transparent"
        />

        <p className="text-center text-white mb-4 text-sm">
          Enter the 4-digit code sent to your email.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full bg-white text-black py-2 rounded-md hover:bg-purple-800 transition duration-200"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        {message && (
          <p className="text-center text-sm mt-4 text-red-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
