import { useState } from "react";
import BackButton from "./BackButton";

export default function Calculator() {
  const [input, setInput] = useState("");

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  const handleClick = (val) => setInput((prev) => prev + val);
  const clear = () => setInput("");
  const backspace = () => setInput((prev) => prev.slice(0, -1));

  const calculate = () => {
    try {
      const result = Function(`return ${input}`)();
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  // 🔥 Advanced math
  const sqrt = () => setInput(Math.sqrt(Number(input)).toString());
  const square = () => setInput((Number(input) ** 2).toString());
  const cube = () => setInput((Number(input) ** 3).toString());
  const reciprocal = () => setInput((1 / Number(input)).toString());
  const log = () => setInput(Math.log10(Number(input)).toString());

  // 🔥 Prime
  const checkPrime = () => {
    const num = Number(input);
    if (num <= 1) return setInput("Not Prime");
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return setInput("Not Prime");
    }
    setInput("Prime");
  };

  // 🔥 Armstrong
  const checkArmstrong = () => {
    const num = Number(input);
    const str = num.toString();
    const power = str.length;
    const sum = str
      .split("")
      .reduce((acc, d) => acc + Math.pow(Number(d), power), 0);

    setInput(sum === num ? "Armstrong" : "Not Armstrong");
  };

  // 🔥 NEW: Palindrome
  const checkPalindrome = () => {
    const str = input.toString();
    const reversed = str.split("").reverse().join("");
    setInput(str === reversed ? "Palindrome" : "Not Palindrome");
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
        className={`w-full max-w-md mt-6 p-6 rounded-2xl shadow-2xl backdrop-blur-lg border ${
          isDark
            ? "bg-white/10 border-white/20"
            : "bg-white border-gray-200"
        }`}
      >
        <BackButton />

        <h2 className="text-2xl font-bold text-center mb-4">
          🧮 Smart Calculator
        </h2>

        {/* Display */}
        <input
          value={input}
          readOnly
          className={`w-full p-4 text-right text-xl rounded-lg mb-4 outline-none ${
            isDark ? "bg-white/20 text-white" : "bg-gray-200 text-black"
          }`}
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2 text-sm">

          {/* Basic */}
          <button className="btn-special" onClick={clear}>AC</button>
          <button className="btn-special" onClick={backspace}>⌫</button>
          <button className="btn-op" onClick={() => handleClick("%")}>%</button>
          <button className="btn-op" onClick={() => handleClick("/")}>÷</button>

          {[7,8,9].map(n => (
            <button key={n} className="btn" onClick={() => handleClick(n)}>{n}</button>
          ))}
          <button className="btn-op" onClick={() => handleClick("*")}>×</button>

          {[4,5,6].map(n => (
            <button key={n} className="btn" onClick={() => handleClick(n)}>{n}</button>
          ))}
          <button className="btn-op" onClick={() => handleClick("-")}>−</button>

          {[1,2,3].map(n => (
            <button key={n} className="btn" onClick={() => handleClick(n)}>{n}</button>
          ))}
          <button className="btn-op" onClick={() => handleClick("+")}>+</button>

          <button className="btn" onClick={() => handleClick("0")}>0</button>
          <button className="btn" onClick={() => handleClick(".")}>.</button>
          <button className="btn-equal col-span-2" onClick={calculate}>=</button>

          {/* Advanced */}
          <button className="btn-adv" onClick={sqrt}>√</button>
          <button className="btn-adv" onClick={square}>x²</button>
          <button className="btn-adv" onClick={cube}>x³</button>
          <button className="btn-adv" onClick={reciprocal}>1/x</button>

          <button className="btn-adv" onClick={log}>log</button>
          <button className="btn-adv" onClick={checkPrime}>Prime</button>
          <button className="btn-adv" onClick={checkArmstrong}>Armstrong</button>
          <button className="btn-adv" onClick={checkPalindrome}>Palindrome</button>

        </div>
      </div>

      {/* 🔥 Better Color System */}
      <style>{`
        .btn {
          padding: 12px;
          border-radius: 10px;
          background: #e5e7eb;
          color: #111827;
          font-weight: 500;
        }

        .dark .btn {
          background: #374151;
          color: #f9fafb;
        }

        .btn-op {
          background: #3b82f6;
          color: white;
          padding: 12px;
          border-radius: 10px;
        }

        .btn-special {
          background: #8b5cf6;
          color: white;
          padding: 12px;
          border-radius: 10px;
        }

        .btn-equal {
          background: #10b981;
          color: white;
          padding: 12px;
          border-radius: 10px;
          font-weight: bold;
        }

        .btn-adv {
          background: #f59e0b;
          color: black;
          padding: 10px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}