import { useNavigate } from "react-router-dom";

export default function BackButton({
  to = "/dashboard",
  label = "⬅ Go to Dashboard",
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // ✅ direct navigation (no check, no popup)
  };

  return (
    <button
      onClick={handleClick}
      className="mb-4 px-4 py-2 rounded-lg text-sm font-semibold 
      border border-blue-500 text-blue-500 
      hover:bg-blue-500 hover:text-white transition"
    >
      {label}
    </button>
  );
}