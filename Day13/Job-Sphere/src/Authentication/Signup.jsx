import Logo from "../components/Logo";
import { CiMail } from "react-icons/ci";
import CiLock from "../assets/teenyicons_password-outline.svg";
import singinBG from "../assets/cuate.png";
import user from "../assets/user.svg";
import Auth from "../components/Auth";
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const navigate = useNavigate();

  return (
    <section className="w-screen h-screen flex">
      <div className="w-1/2 h-full bg-white p-8 pr-32 flex items-center justify-end">
        <div className="w-[60%] flex gap-8 flex-col items-start justify-center">
          <Logo />
          <h2 className="text-4xl font-bold font-s">Create your account</h2>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              // Handle form submission
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-4"
              >
                <div className="relative">
                  <img
                    src={user}
                    alt="user"
                    className="w-6 h-6 absolute top-3 left-2"
                  />
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className={`w-[400px] p-3 pl-10 border-[1px] ${
                      errors.firstName && touched.firstName
                        ? "border-red-500"
                        : "border-[#87878762]"
                    } rounded-xl  placeholder:text-black`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="relative">
                  <img
                    src={user}
                    alt="user"
                    className="w-6 h-6 absolute top-3 left-2"
                  />
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className={`w-[400px] p-3 pl-10 border-[1px] ${
                      errors.lastName && touched.lastName
                        ? "border-red-500"
                        : "border-[#87878762]"
                    } rounded-xl  placeholder:text-black`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="relative">
                  <CiMail size={24} className="absolute top-3 left-2" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-[400px] p-3 pl-10 border-[1px] ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-[#87878762]"
                    } rounded-xl  placeholder:text-black placeholder:font-light`}
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
                    className={`w-[400px] p-3 pl-10 border-[1px] ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-[#87878762]"
                    } rounded-xl  placeholder:text-black`}
                  />
                  <ErrorMessage
                    name="password"
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
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={`w-[400px] p-3 pl-10 border-[1px] ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-500"
                        : "border-[#87878762]"
                    } rounded-xl  placeholder:text-black`}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-[400px] p-2 bg-[#0034D1] rounded-lg text-white text-2xl font-semibold cursor-pointer"
                >
                  Create account
                </button>
              </form>
            )}
          </Formik>
          <div className="flex items-center gap-2">
            <div className="w-45 h-[1px] bg-[#87878762]"></div>
            <p className="text-lg text-[#2F2F2F] font-semibold">OR</p>
            <div className="w-45 h-[1px] bg-[#87878762]"></div>
          </div>
          <Auth />
          <p className="text-[#2F2F2F] text-lg font-semibold mt-3">
            Already have an account? &nbsp;
            <span
              onClick={() => navigate("/login")}
              className="text-[#0034D1] cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#F2F2F2] flex items-center justify-center shadow-[-2px_0_10px_rgba(166,171,189,25)] z-10">
        <img
          className="max-w-[740px] max-h-[550px]"
          src={singinBG}
          alt="signup background"
        />
      </div>
    </section>
  );
};

export default Signup;
