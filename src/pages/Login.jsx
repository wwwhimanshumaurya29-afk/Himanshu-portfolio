import { useState } from "react";
import BackButton from "./BackButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      email === savedUser.email &&
      password === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className={`min-h-screen pt-28 flex items-start justify-center px-4 ${
        isDark
          ? "bg-gradient-to-br from-[#0f172a] via-[#0b1a35] to-[#020617] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md mt-6 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border ${
          isDark
            ? "bg-white/10 border-white/20"
            : "bg-white border-gray-200"
        }`}
      >
        {/* 🔝 Dashboard Button */}
        <BackButton />

        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 rounded-lg outline-none ${
              isDark
                ? "bg-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-500"
                : "bg-gray-100 focus:ring-2 focus:ring-blue-500"
            }`}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-3 rounded-lg outline-none ${
              isDark
                ? "bg-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-500"
                : "bg-gray-100 focus:ring-2 focus:ring-blue-500"
            }`}
            required
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6 opacity-80">
          Don’t have an account?{" "}
          <span
            className="underline cursor-pointer text-blue-400"
            onClick={() => (window.location.href = "/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}