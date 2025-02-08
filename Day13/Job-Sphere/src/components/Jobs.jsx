import { BsBookmark } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { useState } from "react";
const Jobs = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div className=" w-[630px] max-h-[225px] bg-white flex gap-2 shadow-md rounded-3xl p-4 border-1 border-[#87878766] ">
      <div className="max-w-[100px] max-h-[100px]  mt-2 ">
        <img
        className=" w-fll h-full object-top object-contain rounded-lg"
          src="https://logo.clearbit.com/google.com"
          alt="company logo"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex  justify-between">
          <div>
            <h1 className=" font-semibold text-[#1A1A1A] text-[32px]">
              Product Designer
            </h1>
            <h2 className=" text-[#1A1A1A]  text-[20px] mb-1">Binford Ltd.</h2>
            <div className="flex gap-2">
              <p className=" text-[#1A1A1A] text-[20px] font-light  px-2 bg-[#EBEBEB] rounded-sm ">
                Remote
              </p>
              <p className=" text-[#1A1A1A] text-[20px] font-light  px-2 bg-[#EBEBEB] rounded-sm ">
                Part-Time
              </p>
              <p className=" text-[#1A1A1A] text-[20px] font-light  px-2 bg-[#EBEBEB] rounded-sm ">
                $200 - $1,200
              </p>
            </div>
          </div>
          <div className=" h-full flex py-4 px-2 items-start gap-6">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="flex items-center gap-1 text-[#1A1A1A] text-[20px] font-light"
            >
              {isBookmarked ? <FaBookmark size={28} /> : <BsBookmark size={28} />}
            </button>
            <button className="flex items-center gap-1 text-[#1A1A1A] text-[20px] font-light">
              <LuShare2 size={32} />
            </button>
          </div>
        </div>
        <div className=" w-full">
          <p className=" text-[#1A1A1A] text-[14px] font-light">
            Develop and implement user-facing features using HTML, CSS, and
            JavaScript frameworks like React or Angular. Collaborate with UI/UX
            designers to ensure responsive and visually appealing web pages.
            Optimize applications for speed and scalability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
