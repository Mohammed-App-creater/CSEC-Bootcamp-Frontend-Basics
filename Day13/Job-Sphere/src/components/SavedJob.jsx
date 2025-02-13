import { useContext } from "react";
import { DataContext } from "./Data";
import { IoMdClose } from "react-icons/io";
const SavedJob = () => {
  const { BookMark, savedJobs } = useContext(DataContext);
  return (
    <section className=" w-85 max-h-[820px]  flex justify-center bg-white rounded-2xl shadow-2xl border-1 border-[#87878766] mt-4 z-10 overflow-x-hidden scrollable-container">
      <div className=" w-full h-fit flex flex-col gap-6 py-6 px-4 items-center">
        <h1 className=" w-full h-12 flex justify-center items-center text-3xl text-[#2F2F2F]  bg-white sticky top-0 font-bold z-20">Saved Jobs</h1>
        { savedJobs && savedJobs.length > 0 ? (
          savedJobs.map((job) => ( 
            <div key={job.id} className=" w-full h-fit flex gap-4  shadow-md border-1 border-[#87878766] rounded-2xl p-4 relative">
              <button onClick={()=> { BookMark(job.id, job.isBookMarked) }} className=" absolute top-5 right-3 text-[#2F2F2F] text-2xl">
                <IoMdClose />
              </button>
              <div className=" w-12 h-12">
                <img src={job.logo} alt="Logo" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className=" text-xl font-semibold">{job.title}</h2>
                <p className="">{job.company}</p>
                <div className="flex gap-2">
                  <p className=" text-[#1A1A1A] text-[14px] font-light  px-2 bg-[#EBEBEB] rounded-sm ">
                    Remote
                  </p>
                  <p className=" text-[#1A1A1A] text-[14px] font-light  px-2 bg-[#EBEBEB] rounded-sm ">
                    $200 - $800
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No saved jobs yet.</p>
        )}
      </div>
    </section>
  );
};

export default SavedJob;
