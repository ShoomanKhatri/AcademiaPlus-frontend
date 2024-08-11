"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    // Handle signup logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 gap-x-2 pt-8">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
        
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-gray-300">Username</label>
          <div className="flex items-center border border-gray-700 rounded-lg px-3 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              className="w-full bg-transparent border-none outline-none text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
        </div>
        
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
          onClick={handleSignup}
          className="w-full bg-gradient-to-tl from-purple-400 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-purple-500 hover:to-purple-400 transition duration-300"
        >
          Sign up
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-gray-300">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-400 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
