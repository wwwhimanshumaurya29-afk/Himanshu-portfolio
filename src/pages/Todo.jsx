import { useState, useEffect } from "react";
import BackButton from "./BackButton";

export default function Todo() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Work");
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const theme = localStorage.getItem("theme") || "dark";
  const isDark = theme === "dark";

  // 🔥 Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved);
  }, []);

  // 🔥 Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!task) return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex].text = task;
      updated[editIndex].category = category;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([
        ...todos,
        { text: task, completed: false, category },
      ]);
    }

    setTask("");
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setTask(todos[index].text);
    setCategory(todos[index].category);
    setEditIndex(index);
  };

  const filteredTodos = todos.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div
      className={`min-h-screen pt-28 flex items-start justify-center px-4 ${
        isDark
          ? "bg-gradient-to-br from-[#0f172a] via-[#0b1a35] to-[#020617] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-lg mt-6 p-6 rounded-2xl shadow-2xl backdrop-blur-lg border ${
          isDark
            ? "bg-white/10 border-white/20"
            : "bg-white border-gray-200"
        }`}
      >
        <BackButton />

        <h2 className="text-2xl font-bold text-center mb-4">
          📝 Smart Todo App
        </h2>

        {/* Input */}
        <div className="flex gap-2 mb-3">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 p-2 rounded-lg outline-none bg-white/20"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-lg bg-white/20"
          >
            <option>Work</option>
            <option>Personal</option>
          </select>

          <button
            onClick={handleAdd}
            className="px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* Search */}
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-3 rounded-lg outline-none bg-white/20"
        />

        {/* Progress 🔥 */}
        <div className="text-sm mb-3">
          Completed: {completedCount} / {todos.length}
        </div>

        {/* List */}
        <div className="space-y-2 max-h-60 overflow-y-auto">

          {filteredTodos.length === 0 && (
            <p className="text-center opacity-60">No tasks found</p>
          )}

          {filteredTodos.map((t, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 rounded-lg bg-white/20"
            >
              <div>
                <p
                  className={`${
                    t.completed ? "line-through opacity-50" : ""
                  }`}
                >
                  {t.text}
                </p>
                <span className="text-xs opacity-70">
                  {t.category}
                </span>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => toggleComplete(index)}
                  className="px-2 bg-green-500 rounded text-white"
                >
                  ✔
                </button>

                <button
                  onClick={() => editTodo(index)}
                  className="px-2 bg-yellow-500 rounded text-white"
                >
                  ✏
                </button>

                <button
                  onClick={() => deleteTodo(index)}
                  className="px-2 bg-red-500 rounded text-white"
                >
                  ❌
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}