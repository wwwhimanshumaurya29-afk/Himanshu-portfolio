import { useState } from "react";
import BackButton from "./BackButton";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "/dashboard";
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
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg outline-none ${
              isDark
                ? "bg-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-500"
                : "bg-gray-100 focus:ring-2 focus:ring-blue-500"
            }`}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg outline-none ${
              isDark
                ? "bg-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-500"
                : "bg-gray-100 focus:ring-2 focus:ring-blue-500"
            }`}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg outline-none ${
              isDark
                ? "bg-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-500"
                : "bg-gray-100 focus:ring-2 focus:ring-blue-500"
            }`}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg outline-none ${
              isDark
                ? "bg-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-500"
                : "bg-gray-100 focus:ring-2 focus:ring-blue-500"
            }`}
            required
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-6 opacity-80">
          Already registered?{" "}
          <span
            className="underline cursor-pointer text-blue-400"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}