"use client";
export const ssr = false;

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setMsg("Passwords do not match!");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (!data.success) {
      setMsg("User already exists!");
      return;
    }

    setMsg("Registration successful!");
    setTimeout(() => router.push("/login"), 1000);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-10"
      style={{
        background: "linear-gradient(to bottom right, #f7faff, #eef2ff)",
      }}
    >
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md mt-10 mb-16">

        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Create Account
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Join GadgetShop today
        </p>

        {msg && (
          <p className="text-center text-red-600 font-semibold mt-4">{msg}</p>
        )}

        <form onSubmit={handleRegister} className="mt-10 space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full p-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full p-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg 
              font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
