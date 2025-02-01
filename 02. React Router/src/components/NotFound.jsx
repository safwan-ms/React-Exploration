import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>404 | Page Not Found</h2>
      <button
        className="bg-red-700 cursor-pointer animate-fadeIn hover:bg-red-300 text-xl p-3 rounded-full text-white"
        onClick={() => navigate("/")}
      >
        Go to Home Page
      </button>
    </div>
  );
};
export default NotFound;
