import { useState } from "react";
import BackButton from "./BackButton";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  const getWeather = async (query) => {
    if (!query) return;

    try {
      setLoading(true);
      setError("");

      const res = await fetch(`https://wttr.in/${query}?format=j1`);
      const result = await res.json();

      setData(result);
    } catch {
      setError("Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Enter key
  const handleKey = (e) => {
    if (e.key === "Enter") getWeather(city);
  };

  // 📍 Current location
  const getLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = `${pos.coords.latitude},${pos.coords.longitude}`;
        getWeather(loc);
      },
      () => alert("Location access denied")
    );
  };

  const weather = data?.current_condition?.[0];

  return (
    <div
      className={`min-h-screen pt-28 flex items-start justify-center px-4 ${
        isDark
          ? "bg-gradient-to-br from-[#0f172a] via-[#0b1a35] to-[#020617] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md mt-6 p-6 rounded-2xl shadow-2xl backdrop-blur-lg border text-center ${
          isDark
            ? "bg-white/10 border-white/20"
            : "bg-white border-gray-200"
        }`}
      >
        <BackButton />

        <h2 className="text-2xl font-bold mb-4">
          🌦 Smart Weather App
        </h2>

        {/* Input */}
        <div className="flex gap-2 mb-3">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Enter city..."
            className="flex-1 p-2 rounded-lg outline-none bg-white/20"
          />
          <button
            onClick={() => getWeather(city)}
            className="px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            Go
          </button>
        </div>

        {/* Location Button */}
        <button
          onClick={getLocationWeather}
          className="w-full mb-3 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white"
        >
          📍 Use My Location
        </button>

        {/* Loading */}
        {loading && <p className="text-sm">Loading...</p>}

        {/* Error */}
        {error && <p className="text-red-400 text-sm">{error}</p>}

        {/* Result */}
        {weather && (
          <div className="mt-4 p-4 rounded-xl bg-white/20">

            <h3 className="text-xl font-semibold mb-2">
              {city || "Your Location"}
            </h3>

            {/* Icon */}
            <img
              src={weather.weatherIconUrl[0].value}
              alt="weather"
              className="mx-auto"
            />

            <p className="text-lg font-bold">
              🌡 {weather.temp_C}°C
            </p>

            <p className="opacity-80">
              {weather.weatherDesc[0].value}
            </p>

            {/* Extra Info 🔥 */}
            <div className="mt-3 text-sm grid grid-cols-2 gap-2">
              <p>💧 Humidity: {weather.humidity}%</p>
              <p>💨 Wind: {weather.windspeedKmph} km/h</p>
              <p>🤒 Feels: {weather.FeelsLikeC}°C</p>
              <p>🌍 Region: {data.nearest_area[0].region[0].value}</p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}