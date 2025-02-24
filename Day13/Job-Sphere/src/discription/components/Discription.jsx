import { BsBookmark } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import PropTypes from "prop-types";
import stars from "../../assets/Ratings.png";
import logo from "../../assets/Ellipse 1.png";

const Discription = ({ id, isBookMarked, BookMark }) => {
  return (
    <section className=" w-full max-w-[1063px] bg-white  h-fit flex flex-col gap-6 py-2  px-4 items-center rounded-xl shadow-2xl relative">
      <div className=" w-full flex  jeftify-between items-center gap-4">
        <div className="w-full flex gap-4 items-center">
          <div className="w-34 h-34 rounded-full flex justify-center items-center  overflow-hidden ">
            <img src={logo} className=" " alt="company logo" />
          </div>
          <div className="flex flex-col gap-2 items-start  ">
            <h1 className="text-[#1A1A1A] text-4xl  font-semibold">
              {"Product Design"}
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
          <button className=" w-43 py-2 px-6 bg-[#0034D1] text-white rounded-lg hover:scale-110 transition-all">
            Apply now
          </button>
        </div>
      </div>
      <div className=" w-full max-w-[1018px]  flex gap-5 px-5  ">
        <div className=" w-1/4 max-w-[150px] flex flex-col gap-6 items-start">
          <div>
            <h1 className=" text-2xl font-semibold">Job type:</h1>
            <p className=" text-[20px] ">Full Time</p>
          </div>
          <div>
            <h1 className=" text-2xl font-semibold">Location:</h1>
            <p className=" text-[20px]">Full Time</p>
          </div>
          <div>
            <h1 className=" text-2xl font-semibold">Experience:</h1>
            <p className=" text-[20px]">Full Time</p>
          </div>
          <div>
            <h1 className=" text-2xl font-semibold">Number of Applicants:</h1>
            <p className=" text-[20px]">Full Time</p>
          </div>
        </div>
        <div className=" w-full h- ">
          <div className=" w-full max-w-[783px] tracking-wide flex flex-col gap-2 items-start">
            <h1 className=" text-2xl font-semibold ">Job Description</h1>
            <p className="  text-[20px]  leading-8 ">
              We are seeking a highly skilled and creative Senior UI/UX Designer
              to join our dynamic team in Lagos. As a Senior UI/UX Designer, you
              will play a crucial role in designing intuitive and engaging user
              interfaces and enhancing user experience across various digital
              platforms. You will collaborate closely with cross-functional
              teams, including product managers, developers, and stakeholders,
              to bring innovative ideas to life and ensure a seamless user
              journey. If you are passionate about creating top-notch digital
              experiences and have a keen eye for design, we would love to have
              you on board!
            </p>
          </div>
          <div className=" w-full max-w-[783px] tracking-wide flex flex-col gap-2 items-start">
            <h1 className=" text-2xl font-semibold ">Key Responsibilities</h1>
            <ul className=" text-[20px]  leading-8 ">
              <li  className=" list-disc" >Develop intuitive, usable, and engaging interactions</li>
              <li className=" list-disc">Design and develop user-centric interfaces for web and mobile</li>
              <li className=" list-disc">applications. Conduct user research, usability testing, and gather</li>
              <li className=" list-disc">feedback to improve designs. Create wireframes, prototypes, and</li>
              <li className=" list-disc">high-fidelity designs using design tools like Figma, Adobe XD, or</li>
              <li className=" list-disc">Sketch. Collaborate with product managers and developers to ensure</li>
              <li className=" list-disc">design consistency and feasibility. Stay updated with the latest</li>
              <li className=" list-disc">UI/UX trends and best practices to ensure optimal user experience.</li>
              <li className=" list-disc">Lead and mentor junior designers in the team, providing guidance</li>
              <li className=" list-disc">and feedback. Ensure designs are aligned with brand guidelines and</li>
              <li className=" list-disc">project requirements.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
Discription.propTypes = {
  id: PropTypes.string.isRequired,
  isBookMarked: PropTypes.bool.isRequired,
  BookMark: PropTypes.func.isRequired,
};

export default Discription;
