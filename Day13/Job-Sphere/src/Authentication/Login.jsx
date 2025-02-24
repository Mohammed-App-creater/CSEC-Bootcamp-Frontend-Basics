import Logo from "../components/Logo";
import { CiMail } from "react-icons/ci";
import CiLock from "../assets/teenyicons_password-outline.svg";
import singinBG from "../assets/rafiki.png";
import Auth from "../components/Auth";
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const navigator = useNavigate();

  return (
    <section className=" w-screen h-screen flex  ">
      <div className="w-1/2 h-full bg-[#F2F2F2] flex items-center justify-center shadow-[2px_0_5px_rgb(166,171,189)] z-10">
        <img
          className="max-w-[740px] max-h-[550px]  "
          src={singinBG}
          alt="amazon logo"
        />
      </div>
      <div className=" w-1/2 h-full bg-white p-8 pl-32 flex items-center  justify-start ">
        <div className=" w-[60%]  flex gap-8 flex-col items-start justify-center ">
          <Logo />
          <h2 className="text-4xl font-bold font-s">Log in to your account</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              setLoading(true);
              setTimeout(() => {
                console.log("Form Submitted:", values);
                setLoading(false);
              }, 2000);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-9 mt-4 "
              >
                <div className="relative">
                  <CiMail size={24} className="absolute top-3 left-2" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-[400px] pl-9 p-3 focus:outline-[#0034D1] border-[1px] ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-[#87878762]"
                    } rounded-xl placeholder:text-black placeholder:font-light`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="relative">
                  <img
                    src={CiLock}
                    alt="password"
                    className="w-6 h-6 absolute top-3 left-2"
                  />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`w-[400px] pl-9 focus:outline-[#0034D1] p-3 border-[1px] ${
                      errors.password && touched.password
                        ? " border- border-red-500"
                        : "border-[#87878762]"
                    } rounded-xl placeholder:text-black`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-[400px] p-2 bg-[#0034D1] ${
                    loading ? "bg-[#698cf4] animate-pulse" : null
                  } rounded-lg text-white text-2xl font-semibold cursor-pointer`}
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </form>
            )}
          </Formik>

          <div className="flex items-center gap-2">
            <div className=" w-45 h-[1px] bg-[#87878762]"></div>
            <p className="text-lg text-[#2F2F2F] font-semibold">OR</p>
            <div className=" w-45 h-[1px] bg-[#87878762]"></div>
          </div>
          <Auth />
          <p className="text-[#2F2F2F] text-lg font-semibold mt-3">
            Don&apos;t have an account?
            <span onClick={() => navigator('/signup')} className="text-[#0034D1] cursor-pointer">
              {" "}
              Create account
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
