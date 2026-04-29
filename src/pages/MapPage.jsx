import { useState } from "react";
import BackButton from "./BackButton";

export default function MapPage() {
  const [location, setLocation] = useState("Delhi");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  // 🔍 Search handler
  const handleSearch = () => {
    if (!search) return;
    setLoading(true);
    setTimeout(() => {
      setLocation(search);
      setLoading(false);
    }, 500);
  };

  // 📍 Get current location (GPS)
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation(`${latitude},${longitude}`);
        setLoading(false);
      },
      () => {
        alert("Unable to fetch location");
        setLoading(false);
      }
    );
  };

  const presetCities = ["Delhi", "Mumbai", "London", "New York"];

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
        {/* 🔝 Dashboard */}
        <BackButton />

        <h2 className="text-2xl font-bold text-center mb-4">
          📍 Smart Map Explorer
        </h2>

        {/* 🔍 Search */}
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Search location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 rounded-lg outline-none bg-white/20"
          />
          <button
            onClick={handleSearch}
            className="px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
          >
            Go
          </button>
        </div>

        {/* 📍 Current Location */}
        <button
          onClick={getCurrentLocation}
          className="w-full mb-3 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white"
        >
          📍 Use My Location
        </button>

        {/* 🌍 Quick Cities */}
        <div className="flex gap-2 flex-wrap mb-3">
          {presetCities.map((city) => (
            <button
              key={city}
              onClick={() => setLocation(city)}
              className="px-3 py-1 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-sm"
            >
              {city}
            </button>
          ))}
        </div>

        {/* 🔄 Loading */}
        {loading && (
          <p className="text-center text-sm mb-2">Loading map...</p>
        )}

        {/* 🗺️ Map */}
        <iframe
          title="map"
          width="100%"
          height="300"
          className="rounded-lg border"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${location}&output=embed`}
        ></iframe>
      </div>
    </div>
  );
}