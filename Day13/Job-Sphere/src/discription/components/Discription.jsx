import { BsBookmark } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import PropTypes from "prop-types";
import stars from "../../assets/Ratings.png";
import useJobStore from "../../components/store/DataStore";
import { useEffect, useState } from "react";

const Discription = ({ id }) => {
  const BookMark = useJobStore((state) => state.BookMark);
  const [job, setJob] = useState(null);
  const getJobById = useJobStore((state) => state.getJobById);

  useEffect(() => {
    const fetchJob = async () => {
      const jobData = await getJobById(id); // Wait for data
      setJob(jobData);
    };

    fetchJob();
  }, [id, getJobById]);

  if (!job) {
    return <p>Loading job details...</p>;
  }
  console.log(job.logo);
  return (
    <section className="p-10">
      <div className=" w-full  max-w-[1063px] bg-white   flex flex-col gap-6 py-2  px-4 items-center rounded-xl shadow-2xl relative">
        <div className=" w-full flex  jeftify-between items-center gap-4">
          <div className="w-full flex gap-4 items-center">
            <div className="w-34 h-34 p-2 flex justify-center items-center  overflow-hidden ">
              <img
                src={job.logo}
                className=" w-full h-full "
                alt="company logo"
              />
            </div>
            <div className="flex flex-col gap-2 items-start  ">
              <h1 className="text-[#1A1A1A] text-4xl  font-semibold">
                {job.title}
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-[#1A1A1A] text-2xl font-light">{"Amazon"}</p>
                <img src={stars} alt="rating"></img>
              </div>
            </div>
          </div>
          <div className=" h-34 flex flex-col gap-4 items-end justify-between">
            <div className="  h-full flex py-4 px-2 items-start   gap-6 top-0 ">
              <button
                onClick={() => {
                  BookMark(id, job.isBookMarked);
                }}
                className="flex items-center gap-1 text-[#1A1A1A] text-[20px] font-light"
              >
                {job.isBookMarked ? (
                  <FaBookmark size={28} />
                ) : (
                  <BsBookmark size={28} />
                )}
              </button>
              <button className="flex items-center gap-1 text-[#1A1A1A] text-[20px] font-light">
                <LuShare2 size={32} />
              </button>
            </div>
            <button className=" w-43 py-2 px-6 bg-[#0034D1] text-white rounded-lg hover:scale-110 transition-all">
              Apply now
            </button>
          </div>
        </div>
        <div className=" w-full max-w-[1018px]  flex gap-5 px-5  ">
          <div className=" w-1/4 max-w-[150px] flex flex-col gap-6 items-start">
            <div>
              <h1 className=" text-2xl font-semibold">Job type:</h1>
              <p className=" text-[20px] ">{job.type}</p>
            </div>
            <div>
              <h1 className=" text-2xl font-semibold">Location:</h1>
              <p className=" text-[20px]">{job.location}</p>
            </div>
            <div>
              <h1 className=" text-2xl font-semibold">Experience:</h1>
              <p className=" text-[20px]">{job.experienceLevel}</p>
            </div>
            <div>
              <h1 className=" text-2xl font-semibold">Number of Applicants:</h1>
              <p className=" text-[20px]">40</p>
            </div>
          </div>
          <div className=" w-full max-h-[640px] overflow-y-auto space-y-10 ">
            <div className=" w-full max-w-[783px] tracking-wide flex flex-col gap-2 items-start">
              <h1 className=" text-2xl font-semibold ">Job Description</h1>
              <p className="  text-[20px]  leading-8 ">
                {job.fullDescription.jobDescription}
              </p>
            </div>
            <div className=" w-full max-w-[783px] tracking-wide flex flex-col gap-2 items-start">
              <h1 className=" text-2xl font-semibold ">Key Responsibilities</h1>
              <ul className="list-disc pl-5 text-[20px] leading-8">
                {job.fullDescription.jobResponsibility.map((repo, index) => (
                  <li
                    key={index}
                    className="ml-2"
                  >
                    {repo}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" w-full max-w-[783px] tracking-wide flex flex-col gap-2 items-start">
              <h1 className=" text-2xl font-semibold ">Job Requirement</h1>
              <ul className="list-disc pl-5 text-[20px] leading-8">
                {job.fullDescription.jobRequirement.map((req, index) => (
                  <li
                    key={index}
                    className="ml-2"
                  >
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
Discription.propTypes = {
  id: PropTypes.string,
};

export default Discription;
