import { IoLogoPlaystation } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-5  w-full fixed">
      <div className="flex justify-around">
        <IoLogoPlaystation size={50} />
        <ul className="flex gap-4 shadow-lg rounded-full items-center px-5 justify-center">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/jobs"}>Jobs</NavLink>
        </ul>
        <button
          className="bg-black rounded-full text-white px-3 p-2 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Navbar;
