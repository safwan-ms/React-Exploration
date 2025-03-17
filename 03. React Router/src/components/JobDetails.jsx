import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetail = useLoaderData();
  // const { id } = useParams();
  return (
    <div className="text-xl font-semibold max-w-[800px] ">
      <p>
        <b>Job Title:</b>
        {jobDetail.title}
      </p>
      <p>
        <b> Salary:</b>
        {jobDetail.salary}
      </p>
      <p>
        <b>Job Location: </b>
        {jobDetail.location}
      </p>
      <p>
        <b>Job Description:</b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo aut
        quos nesciunt
      </p>
      <button className="p-2 px-3 mt-4 mr-4 font-normal text-white bg-black cursor-pointer">
        Apply Now
      </button>
      <Link to={"/jobs"}>
        <button className="p-2 px-3 mt-4 font-normal text-white bg-gray-800 cursor-pointer ack">
          Go Back
        </button>
      </Link>
    </div>
  );
};
export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5000/jobs/" + id);
  if (!res.ok) {
    throw Error("Could Not found job details");
  }
  return res.json();
};
