import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData() || [];

  return (
    <div className="flex ">
      {jobsData.map((job) => (
        <Link key={job.id} className="bg-gray-300 m-3 p-2 rounded-xl">
          <h4 className="text-lg font-bold">{job.title}</h4>
          <p className="text-base ">{job.location}</p>
        </Link>
      ))}
    </div>
  );
};
export default Jobs;

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  return res.json();
};
