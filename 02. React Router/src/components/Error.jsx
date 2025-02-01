import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-xl font-semibold">An Error occurred</h1>
      <p className="text-base">{error.message}</p>
      <button
        onClick={() => navigate("/")}
        className="text-base bg-black text-white p-1 font-semibold"
      >
        Go to Home Page
      </button>
    </div>
  );
};
export default Error;
