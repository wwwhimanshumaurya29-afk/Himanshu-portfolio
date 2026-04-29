import { useState, useEffect } from "react";
import BackButton from "./BackButton";

export default function Stopwatch() {
  const [time, setTime] = useState(0); // milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 10); // 🔥 millisecond precision
      }, 10);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0") +
      "." +
      String(milliseconds).padStart(2, "0")
    );
  };

  const handleLap = () => {
    setLaps([formatTime(time), ...laps]);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setLaps([]);
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
        className={`w-full max-w-md mt-6 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border text-center ${
          isDark
            ? "bg-white/10 border-white/20"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Dashboard */}
        <BackButton />

        <h1 className="text-2xl font-bold mb-4">
          ⏱ Smart Stopwatch
        </h1>

        {/* Time */}
        <h2 className="text-5xl font-mono mb-6">
          {formatTime(time)}
        </h2>

        {/* Controls */}
        <div className="flex gap-2">

          <button
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
            className="flex-1 py-3 rounded-lg bg-green-500 hover:bg-green-600 disabled:opacity-50 transition font-semibold"
          >
            Start
          </button>

          <button
            onClick={() => setIsRunning(false)}
            disabled={!isRunning}
            className="flex-1 py-3 rounded-lg bg-red-500 hover:bg-red-600 disabled:opacity-50 transition font-semibold"
          >
            Stop
          </button>

          <button
            onClick={handleReset}
            className="flex-1 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold"
          >
            Reset
          </button>

        </div>

        {/* Lap Button 🔥 */}
        <button
          onClick={handleLap}
          disabled={!isRunning}
          className="w-full mt-3 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 transition font-semibold"
        >
          Lap
        </button>

        {/* Lap List 🔥 */}
        {laps.length > 0 && (
          <div className="mt-4 max-h-40 overflow-y-auto text-sm text-left">
            {laps.map((lap, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-1 opacity-80"
              >
                <span>Lap {laps.length - index}</span>
                <span>{lap}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}