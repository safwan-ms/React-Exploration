import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className=" font-bold">Contact Page</h1>
      <button
        className="bg-blue-600 rounded-4xl text-xl text-white mr-3 p-2"
        onClick={() => navigate("info")}
      >
        Info
      </button>
      <button
        className="bg-orange-600 rounded-4xl  text-xl text-white mr-3 p-2"
        onClick={() => navigate("form")}
      >
        Form
      </button>
    </div>
  );
};
export default Contact;
