import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-white" /> }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4">

        {/* 🔥 HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Tech Stack
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
            I specialize in modern frontend technologies and tools to build scalable, high-performance, and user-friendly web applications.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="
              group flex items-center gap-3 p-5 rounded-xl 
              border border-blue-400/30 
              bg-white/90 dark:bg-gray-800/80 backdrop-blur-md

              transition duration-300 ease-in-out

              hover:border-blue-500 
              hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]
              hover:-translate-y-1 
              hover:scale-[1.03]
              "
            >
              {/* ICON */}
              <span className="text-2xl transition duration-300 group-hover:rotate-6 group-hover:scale-125">
                {skill.icon}
              </span>

              {/* TEXT */}
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </div>
          ))}

        </div>

        {/* 🔥 EXTRA LINE (IMPACT) */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-10 max-w-lg mx-auto">
          Continuously learning and adapting to new technologies to stay updated with modern development trends and industry standards.
        </p>

      </div>
    </section>
  );
}