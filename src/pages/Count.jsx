import { useState } from "react";
import BackButton from "./BackButton";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen pt-28 flex items-start justify-center px-4 ${
        isDark
          ? "bg-gradient-to-br from-[#0f172a] via-[#0b1a35] to-[#020617] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md mt-6 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border text-center ${
          isDark
            ? "bg-white/10 border-white/20"
            : "bg-white border-gray-200"
        }`}
      >
        {/* 🔝 Dashboard */}
        <BackButton />

        <h1 className="text-2xl font-bold mb-4">
          🔢 Smart Counter
        </h1>

        {/* Count Display */}
        <h2 className="text-5xl font-bold mb-6">
          {count}
        </h2>

        {/* Step Control 🔥 */}
        <div className="mb-4">
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="w-full p-2 rounded-lg text-center outline-none bg-white/20"
            placeholder="Step value"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button
            onClick={() => setCount(count - step)}
            className="flex-1 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition font-semibold"
          >
            −
          </button>

          <button
            onClick={() => setCount(count + step)}
            className="flex-1 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition font-semibold"
          >
            +
          </button>

        </div>

        {/* Reset Button 🔥 */}
        <button
          onClick={() => setCount(0)}
          className="w-full mt-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold"
        >
          Reset
        </button>

      </div>
    </div>
  );
}