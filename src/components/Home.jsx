import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const projects = [
    { name: "Register", icon: "📝", path: "/register" },
    { name: "Login", icon: "🔐", path: "/login" },
    { name: "Counter", icon: "🔢", path: "/count" },
    { name: "Stopwatch", icon: "⏱️", path: "/stopwatch" },
    { name: "Calculator", icon: "⌨️", path: "/calculator" },
    { name: "Todo App", icon: "📋", path: "/todo" },
    { name: "Weather", icon: "🌦️", path: "/weather" },
    { name: "Map", icon: "🗺️", path: "/map" },
    { name: "Student", icon: "🎓", path: "/student" },

    // 🔥 NEW PROJECTS
    { name: "Job Portal", icon: "💼", path: "/jobs" },
    { name: "Password Generator", icon: "🔐", path: "/password" },
  ];

  return (
    <div
      className="
      min-h-screen pt-28 px-6 
      flex flex-col items-center
      bg-gradient-to-br from-[#0f172a] via-[#0b1a35] to-[#020617]
      text-white
      "
    >

      {/* 🔥 BACK TO PORTFOLIO */}
      <button
        onClick={() => navigate("/")}
        className="
        fixed top-20 left-6 z-50
        flex items-center gap-2
        px-4 py-2 rounded-xl
        backdrop-blur-md
        bg-white/10 border border-white/20
        text-white shadow-md

        transition-all duration-300

        hover:bg-blue-500 hover:text-white
        hover:shadow-[0_10px_30px_rgba(59,130,246,0.5)]
        hover:-translate-y-1
        active:scale-95
        "
      >
        ⬅ Back to Portfolio
      </button>

      {/* 🔥 TITLE */}
      <h1 className="text-3xl md:text-5xl font-bold mb-3 text-center">
        🚀 My Projects Dashboard
      </h1>

      {/* 🔥 IMPROVED TAGLINE */}
      <p className="text-sm text-gray-400 mb-12 text-center max-w-xl">
        A collection of real-world applications showcasing my frontend skills,
        problem-solving ability, and modern UI development expertise.
      </p>

      {/* 🔥 GRID */}
      <div
        className="
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
        gap-6 w-full max-w-6xl
        "
      >
        {projects.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="
              group cursor-pointer 
              p-6 rounded-2xl 
              bg-white/10 backdrop-blur-md 
              border border-white/20

              transition-all duration-300

              hover:-translate-y-2 
              hover:scale-105
              hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)]
              hover:border-blue-500
            "
          >
            {/* ICON */}
            <div className="text-3xl mb-3 group-hover:scale-125 transition duration-300">
              {item.icon}
            </div>

            {/* NAME */}
            <p className="text-sm font-medium group-hover:text-blue-400 transition">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* 🔥 FOOTER LINE */}
      <p className="text-xs text-gray-500 mt-12 text-center max-w-md">
        Continuously building and improving projects to enhance user experience,
        performance, and scalability.
      </p>

    </div>
  );
}