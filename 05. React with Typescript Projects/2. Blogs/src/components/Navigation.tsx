import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-black border-2 border-gray-200">
      {/* Center: Search Bar */}
      <div className="flex items-center border-2  rounded-full px-4 py-2 max-w-md ml-[5rem]">
        <span className="mr-2 text-xl">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center mr-[5rem]">
        <span className="mr-2 text-3xl">
          <FaUserCircle />
        </span>
      </div>
    </nav>
  );
};
export default Navigation;
