export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* 🔥 HEADER */}
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Let’s Connect
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
          I’m always open to discussing new opportunities, collaborations, or freelance projects. Feel free to reach out!
        </p>

        {/* 🔥 CONTACT CARD */}
        <div
          className="
          mt-10 p-6 rounded-2xl 
          border border-blue-400/30 
          bg-white/90 dark:bg-gray-800/80 
          backdrop-blur-lg
          shadow-[0_10px_30px_rgba(0,0,0,0.1)]
          space-y-4
          "
        >
          
          <p className="text-sm text-gray-700 dark:text-gray-300">
            📱 <span className="font-medium">Phone:</span>{" "}
            <a href="tel:+918840507600" className="text-blue-500 hover:underline">
              +91-8840507600
            </a>
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300">
            📧 <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:www.himanshumaurya29@gmail.com"
              className="text-blue-500 hover:underline"
            >
              www.himanshumaurya29@gmail.com
            </a>
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300">
            💻 <span className="font-medium">GitHub:</span>{" "}
            <a
              href="https://github.com/wwwhimanshumaurya29-afk"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              github.com/wwwhimanshumaurya29-afk
            </a>
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300">
            🔗 <span className="font-medium">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/himanshu-maurya-8922b3329"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/himanshu-maurya
            </a>
          </p>

        </div>

        {/* 🔥 CTA BUTTON */}
        <a
          href="mailto:www.himanshumaurya29@gmail.com?subject=Hiring Opportunity&body=Hello Himanshu,"
          className="
          inline-block mt-8 px-8 py-3 rounded-xl 
          bg-blue-500 text-white font-medium
          transition duration-300

          hover:bg-blue-600 
          hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)] 
          hover:-translate-y-1
          active:scale-95
          "
        >
          📩 Send Message
        </a>

        {/* 🔥 FINAL LINE */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
          Looking forward to building something amazing together 🚀
        </p>

      </div>
    </section>
  );
}