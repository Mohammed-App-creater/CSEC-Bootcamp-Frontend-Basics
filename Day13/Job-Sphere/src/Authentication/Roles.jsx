import Logo from "../components/Logo";
import company from "../assets/Screenshot 2025-03-11 103417.png";
import JobSeeker from "../assets/Screenshot 2025-03-11 103617.png";
import { motion } from "framer-motion";
import {  useNavigate } from "react-router-dom";

const Roles = () => {
  const navigate = useNavigate();
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-100">
      <div className=" max-w-[60%] h-fit bg-white rounded-xl p-8 shadow-lg">
        <div className="space-y-4 text-center">
          <Logo />
          <h1 className="text-3xl font-bold">Welcome to Job-Sphere</h1>
          <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
            Connect with{" "}
            <span className="font-semibold text-[#0034D1]">
              the right opportunities
            </span>
            . Whether you&apos;re a
            <span className="font-semibold text-[#0034D1]">
              {" "}
              company looking for top talent
            </span>{" "}
            or a
            <span className="font-semibold text-[#0034D1]">
              {" "}
              job seeker ready for your next big role
            </span>
            ,<span className="italic text-gray-800"> Job-Sphere</span> is here
            to guide you every step of the way!
          </p>
        </div>

        <div className="w-full h-fit mt-6 flex gap-6 justify-center items-center">
          <motion.div
            onClick={() => navigate("/CompanySignup")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-60 h-80 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col justify-between overflow-hidden"
          >
            <img
              src={company}
              className="w-full h-3/4 object-cover"
              alt="company image"
            />
            <button
              onClick={() => navigate("/CompanySignup")}
              className="w-full py-3 bg-[#0034D1] text-white rounded-b-xl hover:scale-105 transition-all"
            >
              As Company
            </button>
          </motion.div>

          <motion.div
            onClick={() => navigate("/signup")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-60 h-80 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col justify-between overflow-hidden"
          >
            <img
              src={JobSeeker}
              className="w-full h-3/4 object-cover"
              alt="Job Seeker image"
            />
            <button
              onClick={() => navigate("/signup")}
              className="w-full py-3 bg-[#0034D1] text-white rounded-b-xl hover:scale-105 transition-all"
            >
              As Job Seeker
            </button>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Not sure where to start?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Learn more about Job-Sphere.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roles;
