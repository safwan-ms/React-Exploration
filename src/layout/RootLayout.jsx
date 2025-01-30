import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container flex justify-around items-center h-screen text-5xl">
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
