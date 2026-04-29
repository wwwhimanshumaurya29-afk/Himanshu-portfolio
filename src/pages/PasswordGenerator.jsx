import { useState } from "react";
import BackButton from "./BackButton";

export default function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    number: true,
    symbol: false,
  });

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  const generatePassword = () => {
    let chars = "";
    if (options.upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.number) chars += "0123456789";
    if (options.symbol) chars += "!@#$%^&*()";

    if (!chars) return;

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pass);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Copied!");
  };

  return (
    <div
      className={`min-h-screen pt-28 flex items-start justify-center px-4 ${
        isDark
          ? "bg-gradient-to-br from-[#0f172a] via-[#0b1a35] to-[#020617] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="w-full max-w-md p-6 rounded-2xl backdrop-blur-lg border bg-white/10 border-white/20 shadow-xl">

        <BackButton />

        <h2 className="text-xl font-bold text-center mb-4">
          🔐 Password Generator
        </h2>

        {/* Length */}
        <div className="mb-3">
          <label className="text-sm">Length: {length}</label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          {Object.keys(options).map((key) => (
            <label key={key}>
              <input
                type="checkbox"
                checked={options[key]}
                onChange={() =>
                  setOptions({ ...options, [key]: !options[key] })
                }
              />{" "}
              {key}
            </label>
          ))}
        </div>

        {/* Generate */}
        <button
          onClick={generatePassword}
          className="w-full py-2 bg-blue-500 rounded-lg text-white mb-3"
        >
          Generate
        </button>

        {/* Result */}
        {password && (
          <div className="flex gap-2">
            <input
              value={password}
              readOnly
              className="flex-1 p-2 rounded bg-white/20"
            />
            <button
              onClick={copyPassword}
              className="px-3 bg-green-500 rounded text-white"
            >
              Copy
            </button>
          </div>
        )}

      </div>
    </div>
  );
}