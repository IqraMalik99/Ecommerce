"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import HomeNav from "../component/Home/HomeNav";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/"); // redirect after login
    }
  };

  return (
    <>
      {/* Navbar */}
      <HomeNav bg={"bg-gray-100/50"} />

      {/* Container */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md mx-4 sm:mx-0 p-8 rounded-2xl shadow-lg bg-white/30 backdrop-blur-lg border border-white/40">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
            Sign In
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gray-500 text-white font-medium hover:bg-gray-600 transition"
            >
              Sign In
            </button>
          </form>

          {/* Links */}
          <div className="mt-4 text-center text-sm text-gray-600 space-y-2">
            <a
              href="/forgot-password"
              className="block text-gray-500 hover:text-gray-700 hover:underline"
            >
              Forgot Password?
            </a>
            <p>
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-gray-700 font-medium hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
