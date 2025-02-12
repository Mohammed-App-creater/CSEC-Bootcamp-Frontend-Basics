import Logo from "../components/Logo";
import { CiMail } from "react-icons/ci";
import CiLock from "../assets/teenyicons_password-outline.svg";
import singinBG from "../assets/cuate.png";
import user from "../assets/user.svg";
import Auth from "../components/Auth";
const Signup = () => {
  return (
    <section className=" w-screen h-screen flex  ">
      <div className=" w-1/2 h-full bg-white p-8 pr-32 flex items-center  justify-end ">
        <div className=" w-[60%]  flex gap-8 flex-col items-start justify-center ">
          <Logo />
          <h2 className="text-4xl font-bold font-s">Log in to your account</h2>
          <form className="flex flex-col gap-4 mt-4 ">
            <div className=" relative">
              <img
                src={user}
                alt="password"
                className="w-6 h-6 absolute top-3 left-2"
              />
              <input
                type="password"
                placeholder="First Name"
                className=" w-[400px] p-3 border-[1px] border-[#87878762] rounded-xl placeholder:pl-8 placeholder:text-black  "
              />
            </div>
            <div className=" relative">
              <img
                src={user}
                alt="password"
                className="w-6 h-6 absolute top-3 left-2"
              />
              <input
                type="password"
                placeholder="Last Name"
                className=" w-[400px] p-3 border-[1px] border-[#87878762] rounded-xl placeholder:pl-8 placeholder:text-black  "
              />
            </div>
            <div className=" relative">
              <CiMail size={24} className=" absolute top-3 left-2" />
              <input
                type="email"
                placeholder="Email"
                className=" w-[400px] p-3 border-[1px] border-[#87878762] rounded-xl placeholder:pl-8 placeholder:text-black  placeholder:font-light "
              />
            </div>
            <div className=" relative">
              <img
                src={CiLock}
                alt="password"
                className="w-6 h-6 absolute top-3 left-2"
              />
              <input
                type="password"
                placeholder="Password"
                className=" w-[400px] p-3 border-[1px] border-[#87878762] rounded-xl placeholder:pl-8 placeholder:text-black  "
              />
            </div>
            <div className=" relative">
              <img
                src={CiLock}
                alt="password"
                className="w-6 h-6 absolute top-3 left-2"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className=" w-[400px] p-3 border-[1px] border-[#87878762] rounded-xl placeholder:pl-8 placeholder:text-black  "
              />
            </div>
            <button
              type="submit"
              className=" w-[400px] p-2 bg-[#0034D1] rounded-lg text-white text-2xl font-semibold cursor-pointer"
            >
              Create account
            </button>
          </form>
          <div className="flex items-center gap-2">
            <div className=" w-45 h-[1px] bg-[#87878762]"></div>
            <p className="text-lg text-[#2F2F2F] font-semibold">OR</p>
            <div className=" w-45 h-[1px] bg-[#87878762]"></div>
          </div>
          <Auth />
          <p className="text-[#2F2F2F] text-lg font-semibold mt-3">
            Already have an account? &nbsp;
            <span className="text-[#0034D1] cursor-pointer">
              Login
            </span>
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#F2F2F2] flex items-center justify-center shadow-[-2px_0_10px_rgba(166,171,189,25)] z-10">
        <img
          className="max-w-[740px] max-h-[550px]  "
          src={singinBG}
          alt="amazon logo"
        />
      </div>
    </section>
  );
};

export default Signup;
