"use client";

import React, { useState } from "react";
import HomeNav from "../component/Home/HomeNav";
import axios from "axios";

export default function Page() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await axios.post("/api/auth/register", {
        email,
        password,
        username
      });

      console.log("Signup success:", res.data);
    } catch (error: any) {
      console.log("Signup error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <HomeNav bg={"bg-gray-100/50"} />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md mx-4 sm:mx-0 p-8 rounded-2xl shadow-xl bg-white/30 backdrop-blur-lg border border-white/40">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
            Create Account
          </h2>

          {/* Form */}
          <form className="space-y-4" onSubmit={signup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gray-500/90 text-white font-medium hover:bg-gray-600 transition shadow-md hover:shadow-lg"
            >
              Sign Up
            </button>
          </form>

          {/* Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-gray-800 font-medium hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
