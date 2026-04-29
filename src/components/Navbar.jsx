import { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";
import useActiveSection from "../hooks/useActiveSection";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const active = useActiveSection();
  const { theme, toggleTheme } = useTheme();

  // ✅ NEW: scroll state
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false); // 🔽 hide
      } else {
        setShow(true); // 🔼 show
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
  className={`fixed top-0 w-full z-50 transition-transform duration-300
  ${show ? "translate-y-0" : "-translate-y-full"}
  bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm
  border-b border-gray-200 dark:border-gray-800`}
>
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">

        {/* LOGO */}
        <h1 className="font-semibold text-lg tracking-tight text-gray-800 dark:text-white">
          Himanshu Maurya
        </h1>

        {/* NAV LINKS */}
        <div className="flex gap-6 items-center">

          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`relative text-sm capitalize 
              text-gray-600 dark:text-gray-300 
              transition duration-300 
              hover:text-blue-500
              ${active === sec ? "text-blue-500" : ""}`}
            >
              {sec}

              {/* UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 
                transform origin-left transition duration-300
                ${active === sec ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </a>
          ))}

          {/* RESUME */}
          <a
            href="/resume.pdf"
            download
            className="text-sm px-4 py-1.5 rounded-lg 
            bg-blue-500 text-white 
            transition duration-300
            hover:bg-blue-600 
            hover:shadow-[0_6px_18px_rgba(59,130,246,0.35)] 
            hover:-translate-y-0.5"
          >
            Resume
          </a>

          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="text-lg p-1.5 rounded-md 
            border border-gray-300 dark:border-gray-700
            transition duration-300
            hover:border-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

        </div>
      </div>
    </nav>
  );
}