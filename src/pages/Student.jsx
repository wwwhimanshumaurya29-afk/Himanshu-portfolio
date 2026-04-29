import { useState } from "react";
import BackButton from "./BackButton";

export default function Student() {
  const [form, setForm] = useState({ name: "", roll: "", marks: "" });
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getGrade = (marks) => {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    if (marks >= 60) return "C";
    return "F";
  };

  const handleSubmit = () => {
    if (!form.name || !form.roll || !form.marks) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = form;
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, form]);
    }

    setForm({ name: "", roll: "", marks: "" });
  };

  const handleEdit = (index) => {
    setForm(students[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
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
        className={`w-full max-w-2xl mt-6 p-6 rounded-2xl shadow-2xl backdrop-blur-lg border ${
          isDark
            ? "bg-white/10 border-white/20"
            : "bg-white border-gray-200"
        }`}
      >
        <BackButton />

        <h2 className="text-2xl font-bold text-center mb-4">
          🎓 Student Management System
        </h2>

        {/* Form */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="p-2 rounded-lg outline-none bg-white/20"
          />
          <input
            name="roll"
            placeholder="Roll No"
            value={form.roll}
            onChange={handleChange}
            className="p-2 rounded-lg outline-none bg-white/20"
          />
          <input
            name="marks"
            type="number"
            placeholder="Marks"
            value={form.marks}
            onChange={handleChange}
            className="p-2 rounded-lg outline-none bg-white/20"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold mb-4"
        >
          {editIndex !== null ? "Update Student" : "Add Student"}
        </button>

        {/* Table */}
        {students.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border rounded-lg">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-2">Name</th>
                  <th className="p-2">Roll</th>
                  <th className="p-2">Marks</th>
                  <th className="p-2">Grade</th>
                  <th className="p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-2">{s.name}</td>
                    <td className="p-2">{s.roll}</td>
                    <td className="p-2">{s.marks}</td>
                    <td className="p-2">{getGrade(s.marks)}</td>
                    <td className="p-2 flex gap-2 justify-center">
                      <button
                        onClick={() => handleEdit(index)}
                        className="px-2 py-1 bg-yellow-500 rounded text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="px-2 py-1 bg-red-500 rounded text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}