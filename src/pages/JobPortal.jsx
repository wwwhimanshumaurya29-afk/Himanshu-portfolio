import { useState } from "react";
import BackButton from "./BackButton";

export default function JobPortal() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [saved, setSaved] = useState([]);

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Remote", type: "Remote" },
    { title: "React Developer", company: "Amazon", location: "Bangalore", type: "Onsite" },
    { title: "UI Designer", company: "Microsoft", location: "Delhi", type: "Hybrid" },
    { title: "Backend Developer", company: "Flipkart", location: "Remote", type: "Remote" },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || job.type === filter)
  );

  const toggleSave = (job) => {
    if (saved.includes(job.title)) {
      setSaved(saved.filter((j) => j !== job.title));
    } else {
      setSaved([...saved, job.title]);
    }
  };

  const openRealJobs = (type) => {
    let url = "";
    if (type === "Remote") url = "https://www.linkedin.com/jobs/remote-jobs/";
    else if (type === "Onsite") url = "https://www.indeed.com/jobs";
    else url = "https://www.naukri.com/";
    window.open(url, "_blank");
  };

  const applyJob = (job) => {
    const query = `${job.title} ${job.type} jobs`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
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
        className={`w-full max-w-3xl mt-6 p-6 rounded-3xl shadow-[0_20px_60px_rgba(59,130,246,0.25)]
        backdrop-blur-xl border ${
          isDark
            ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20"
            : "bg-white border-gray-200"
        }`}
      >
        <BackButton />

        <h2 className="text-2xl font-bold text-center mb-4">
          💼 Smart Job Portal
        </h2>

        {/* 🔍 Search + Filter */}
        <div className="flex gap-2 mb-4">
          <input
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 rounded-lg bg-white/10 border border-white/20"
          >
            <option>All</option>
            <option>Remote</option>
            <option>Onsite</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* JOB LIST */}
        <div className="space-y-4">
          {filteredJobs.length === 0 && (
            <p className="text-center opacity-60">No jobs found</p>
          )}

          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="
              p-5 rounded-2xl 
              bg-gradient-to-br from-white/10 to-white/5 
              border border-white/10 
              shadow-lg 
              hover:shadow-[0_10px_40px_rgba(59,130,246,0.4)]
              hover:scale-[1.02]
              transition-all duration-300
              flex justify-between
              "
            >
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-sm opacity-80">
                  {job.company} • {job.location}
                </p>

                {/* TYPE */}
                <span
                  onClick={() => openRealJobs(job.type)}
                  className={`text-xs px-2 py-1 rounded mt-1 inline-block cursor-pointer
                  ${
                    job.type === "Remote"
                      ? "bg-green-500"
                      : job.type === "Onsite"
                      ? "bg-red-500"
                      : "bg-purple-500"
                  }
                  hover:opacity-80`}
                >
                  {job.type}
                </span>

                {/* APPLY */}
                <div className="mt-2">
                  <button
                    onClick={() => applyJob(job)}
                    className="
                    px-4 py-1.5 rounded-lg text-white text-sm font-semibold
                    bg-gradient-to-r from-green-500 to-emerald-600
                    hover:from-green-600 hover:to-emerald-700
                    shadow-md hover:shadow-lg
                    transition
                    "
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* SAVE */}
              <button
                onClick={() => toggleSave(job)}
                className={`h-fit px-3 py-1 rounded-lg text-white text-sm font-medium
                ${
                  saved.includes(job.title)
                    ? "bg-gradient-to-r from-red-500 to-pink-500"
                    : "bg-gradient-to-r from-gray-400 to-gray-500"
                }
                hover:scale-105 transition`}
              >
                {saved.includes(job.title) ? "Saved ❤️" : "Save"}
              </button>
            </div>
          ))}
        </div>

        {/* SAVED JOBS */}
        {saved.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Saved Jobs</h3>
            <ul className="text-sm space-y-1">
              {saved.map((job, i) => (
                <li key={i}>• {job}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}