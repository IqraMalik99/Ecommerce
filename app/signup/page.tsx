"use client";

import React, { useState } from "react";
import HomeNav from "../component/Home/HomeNav";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/register", {
        email,
        password,
        username,
      });

      setLoading(false);
      console.log("Signup success:", res.data);
      router.push("/signin"); // redirect to signin
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.error || err.message);
      console.log("Signup error:", err.response?.data || err.message);
    }
  };

  return (
    <>
      <HomeNav bg="bg-[#fdfcfb]" />

      {/* MAIN BG */}
      <div className="flex items-center justify-center min-h-screen bg-[#fdfcfb]">
        {/* CARD */}
        <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-[#a3704b] border border-white/20">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#fff8f2]">
            Create Account
          </h2>

          <form onSubmit={signup} className="space-y-4">
            {error && <p className="text-[#e63946] text-sm text-center">{error}</p>}

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#fdfbf7] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#d4a373] text-black font-semibold hover:bg-[#b9855e] transition disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm text-[#fff8f2] mt-4">
            Already have an account?{" "}
            <a href="/signin" className="font-semibold underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
