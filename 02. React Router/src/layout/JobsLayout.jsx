import { Outlet } from "react-router-dom";
import Jobs from "../pages/Jobs";

const JobsLayout = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Job Openings</h2>
      <p className="text-base">List of current job openings in our company.</p>
      <Jobs />
      <Outlet />
    </div>
  );
};
export default JobsLayout;
