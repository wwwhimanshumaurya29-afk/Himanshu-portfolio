import profile from "../assets/myphoto.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">

          {/* 🔥 LEFT (BIG IMAGE) */}
          <div className="flex flex-col items-start">
            <img
              src={profile}
              alt="profile"
             className="
             w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[29rem]
             object-cover rounded-2xl
             border border-blue-400/30
             shadow-[0_15px_40px_rgba(59,130,246,0.25)]
             hover:ring-2 hover:ring-blue-500
             transition duration-300 hover:scale-105
             "
            />

            <p className="mt-4 text-sm font-medium text-blue-500">
              Frontend Developer
            </p>
          </div>

          {/* 🔥 RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

            {/* ABOUT */}
            <div className="
              group p-6 rounded-2xl 
              border border-blue-400/30 
              bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg
              hover:border-blue-500 
              hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)]
              transition duration-300 sm:col-span-2
            ">
              <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-white">
                About Me
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications using React and JavaScript.  
                I enjoy turning ideas into real-world products and continuously improving my skills through hands-on projects.
                <br /><br />
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  I believe in writing clean, scalable code and creating seamless user experiences that make a real impact.
                </span>
              </p>
            </div>

            {/* TECHNICAL */}
            <div className="
              group p-5 rounded-xl 
              border border-blue-400/30 
              bg-white/90 dark:bg-gray-800/80 backdrop-blur
              hover:border-blue-500 
              hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]
              transition duration-300
            ">
              <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                Technical Skills
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                HTML, CSS, JavaScript, React, Git, and GitHub with a strong focus on building scalable, maintainable, and efficient web applications.
              </p>
            </div>

            {/* EDUCATION */}
            <div className="
              group p-5 rounded-xl 
              border border-blue-400/30 
              bg-white/90 dark:bg-gray-800/80 backdrop-blur
              hover:border-blue-500 
              hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]
              transition duration-300
            ">
              <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                Education
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Abdul Kalam Technical University <br />
                B.Tech in Computer Science (2024–2028) <br />
                CGPA: 7.9
              </p>
            </div>

            {/* EXPERTISE */}
            <div className="
              group p-5 rounded-xl 
              border border-blue-400/30 
              bg-white/90 dark:bg-gray-800/80 backdrop-blur
              hover:border-blue-500 
              hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]
              transition duration-300 sm:col-span-2
            ">
              <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                Expertise
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Specialized in frontend development with a strong focus on responsive design, modern UI/UX principles, performance optimization, and delivering clean, user-centric digital experiences.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}