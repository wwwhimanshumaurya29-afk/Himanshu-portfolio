import { featuredProjects, miniProjects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* 🔥 HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Projects
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
            A collection of real-world applications and experiments that reflect my problem-solving skills, creativity, and understanding of modern web development.
          </p>
        </div>

        {/* 🔥 FEATURED */}
        <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">
          🚀 Featured Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {featuredProjects.map((p, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="
              group p-6 rounded-2xl 
              border border-blue-400/30 
              bg-white/90 dark:bg-gray-800/80 
              backdrop-blur-lg
              transition duration-300

              hover:border-blue-500 
              hover:shadow-[0_15px_40px_rgba(59,130,246,0.35)] 
              hover:-translate-y-1
              "
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>

              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex gap-4 mt-4 text-sm">
                <a
                  href={p.live}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  🔗 Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  className="text-gray-700 dark:text-gray-300 hover:underline"
                >
                  💻 Source Code
                </a>
              </div>
            </div>
          ))}

        </div>

        {/* 🔥 MINI PROJECTS */}
        <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">
          ⚡ Mini Projects & Practice Work
        </h3>

        <p className="text-xs text-gray-600 dark:text-gray-400 mb-6 max-w-lg">
          These projects highlight my consistency in learning, experimenting with new ideas, and strengthening core concepts through hands-on practice.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

          {miniProjects.map((p, i) => (
            <div
              key={i}
              className="
              p-4 text-center rounded-xl 
              border border-blue-400/30 
              bg-white dark:bg-gray-800

              text-gray-800 dark:text-gray-200

              transition duration-300

              hover:border-blue-500 
              hover:shadow-[0_10px_25px_rgba(59,130,246,0.25)]
              hover:-translate-y-1
              hover:bg-blue-50 dark:hover:bg-gray-700
              "
            >
              {p.title}
            </div>
          ))}

        </div>

        {/* 🔥 FINAL IMPACT LINE */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-12 max-w-xl mx-auto">
          I continuously build and refine projects to improve performance, user experience, and scalability — aiming to deliver real-world impactful solutions.
        </p>

      </div>
    </section>
  );
}