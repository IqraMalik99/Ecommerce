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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <HomeNav bg="bg-[#fdfcfb]" />

      {/* MAIN BG */}
      <div className="flex items-center justify-center min-h-screen bg-[#fdfcfb]">
        
        {/* CARD */}
        <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-[#a3704b] border border-white/20">
          
          <h2 className="text-3xl font-bold text-center mb-6 text-[#fff8f2]">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="text-[#e63946] text-sm text-center">{error}</p>
            )}

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
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-[#fff8f2] space-y-2">
            <Link href="/forgot-password" className="block hover:underline">
              Forgot Password?
            </Link>

            <p>
              New here?{" "}
              <Link href="/signup" className="font-semibold underline">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
