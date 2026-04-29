import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center 
      bg-white dark:bg-gray-900 
      text-gray-900 dark:text-white"
    >
      <div className="text-center max-w-3xl px-4">

        {/* HEADING */}
        <h1 className="text-4xl md:text-6xl font-semibold opacity-0 animate-fadeUp delay-100">
          Hi, I'm{" "}
          <span className="text-blue-500">Himanshu Maurya</span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 opacity-0 animate-fadeUp delay-300">
          Frontend Developer
        </p>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-500 dark:text-gray-400 opacity-0 animate-fadeUp delay-500">
          I build responsive and user-friendly web applications using React,
          JavaScript, and modern UI technologies.
        </p>

        {/* 🔥 PREMIUM BUTTONS */}
        <div className="mt-8 flex justify-center gap-5 opacity-0 animate-fadeUp delay-700">

          {/* ✅ VIEW PROJECTS (ROUTER LINK) */}
          <Link
            to="/dashboard"
            className="px-6 py-2.5 rounded-lg 
            bg-blue-500 text-white 
            transition duration-300
            hover:bg-blue-600 
            hover:shadow-[0_8px_25px_rgba(59,130,246,0.35)] 
            hover:-translate-y-1"
          >
            View Projects
          </Link>

          {/* CONTACT */}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-lg 
            border border-gray-300 dark:border-gray-700 
            text-gray-800 dark:text-gray-200
            transition duration-300
            hover:border-blue-500 
            hover:text-blue-500
            hover:shadow-[0_6px_20px_rgba(59,130,246,0.2)] 
            hover:-translate-y-1"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}