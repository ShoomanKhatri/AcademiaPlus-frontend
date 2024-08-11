"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Login
        </h2>
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-gray-300">Email</label>
          <div className="flex items-center border border-gray-700 rounded-lg px-3 py-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              className="w-full bg-transparent border-none outline-none text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              id="email"
              name="email"
              autoComplete="email"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-gray-300">Password</label>
          <div className="flex items-center border border-gray-700 rounded-lg px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              className="w-full bg-transparent border-none outline-none text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              id="password"
              name="password"
              autoComplete="password"
            />
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-tl from-purple-400 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-purple-500 hover:to-purple-400 transition duration-300"
        >
          Log in
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-300">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-purple-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
