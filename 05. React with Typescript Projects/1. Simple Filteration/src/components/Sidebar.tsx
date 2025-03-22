import { FaHome, FaUser, FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
const Sidebar = () => {
  return (
    <aside className="sidebar top-0 left-0 w-16 fixed h-screen border border-[#151515] bg-[#151515] p-4 flex flex-col items-center text-white space-y-8">
      <ul className="p-4 flex flex-col justify-between items-center h-full">
        <div className="top">
          <li className="mb-10">
            <div className="flex items-center">
              <FaHome />
            </div>
          </li>

          <li className="mb-10">
            <div className="flex items-center">
              <FaUser />
            </div>
          </li>

          <li className="mb-10">
            <div className="flex items-center">
              <FaSearch />
            </div>
          </li>
        </div>

        <div className="bottom">
          <li>
            <IoMdSettings size={18} />
            <FaUser size={18} />
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
