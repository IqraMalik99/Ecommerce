"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import HomeNav from "../component/Home/HomeNav";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      router.push("/");
    }
  };

  return (
    <>
      <HomeNav bg="bg-gray-100/50" />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white/30 backdrop-blur-lg border">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gray-600 text-white hover:bg-gray-700"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600 space-y-2">
            <Link href="/forgot-password" className="block hover:underline">
              Forgot Password?
            </Link>

            <p>
              Don’t have an account?{" "}
              <Link href="/signup" className="font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
