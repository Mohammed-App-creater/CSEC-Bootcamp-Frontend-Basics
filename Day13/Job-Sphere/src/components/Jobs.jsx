import { BsBookmark } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import PropTypes from "prop-types";

const Jobs = ({
  id,
  Logo,
  title,
  company,
  location,
  Type,
  isBookMarked,
  BookMark,
  description,
}) => {
  return (
    <div className=" w-[630px] max-h-[225px] bg-white flex gap-2 shadow-md rounded-2xl py-2 px-4 border-1 border-[#87878766] relative ">
      <div className="max-w-[55px] max-h-[55px] mt-2   mr-2 ">
        <img
          className=" w-fll h-full object-top object-contain rounded-lg"
          src={Logo}
          alt="company logo"
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <div className="flex  justify-between">
          <div>
            <h1 className=" font-semibold text-[#1A1A1A] text-[32px]">
              {title}
            </h1>
            <h2 className=" text-[#1A1A1A]  text-[20px] mb-1">{company}</h2>
            <div className="flex gap-2">
              <p className=" text-[#1A1A1A] text-[20px] font-light  px-2 bg-[#EBEBEB] rounded-sm  ">
                {location}
              </p>
              <p className=" text-[#1A1A1A] text-[20px] font-light  px-2 bg-[#EBEBEB] rounded-sm ">
                {Type}
              </p>
              <p className=" text-[#1A1A1A] text-[20px] font-light  px-2 bg-[#EBEBEB] rounded-sm ">
                $200 - $1,200
              </p>
            </div>
          </div>
          <div className=" h-full flex py-4 px-2 items-start   gap-6 absolute right-2">
            <button
              onClick={() => {
                BookMark(id, isBookMarked);
              }}
              className="flex items-center gap-1 text-[#1A1A1A] text-[20px] font-light"
            >
              {isBookMarked ? (
                <FaBookmark size={28} />
              ) : (
                <BsBookmark size={28} />
              )}
            </button>
            <button className="flex items-center gap-1 text-[#1A1A1A] text-[20px] font-light">
              <LuShare2 size={32} />
            </button>
          </div>
        </div>
        <div className=" w-full">
          <p className=" text-[#1A1A1A] text-[14px] font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
Jobs.propTypes = {
  id: PropTypes.string.isRequired,
  Logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  isBookMarked: PropTypes.bool.isRequired,
  BookMark: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default Jobs;
