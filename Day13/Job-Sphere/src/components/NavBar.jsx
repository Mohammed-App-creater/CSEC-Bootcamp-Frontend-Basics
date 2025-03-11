import Logo from "./Logo";
import LogOut from "../Authentication/LogOut"
import { Link, useNavigate, Outlet } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const isLogdedIn = localStorage.getItem("LoggedIn");
  return (
    <>
      <section className="w-full h-20  bg-white flex justify-evenly items-center p-4 shadow-md border-b border-blue-600  z-100  ">
        <Logo />
        <div className="w-1/2 max-w-[625px] text-[#2F2F2F] text-[18px] flex justify-evenly items-center">
          <Link className="text-[#0034D1] underline" to="/">
            Job Search
          </Link>
          <Link to="/applications">My Applications</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="w-1/4 max-w-[340px] flex justify-evenly items-center">
          {isLogdedIn? <LogOut /> : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="py-2 px-10 bg-[#0034D1] rounded text-white hover:scale-110 transition-all"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="py-2 px-10 rounded blue_border hover:bg-[#0034D1] hover:text-white hover:scale-110 transition-all"
              >
                Sign In
              </button>
            </>
          )}
        </div>
        <div className="md:hidden">
          <img src="/assets/menu.svg" alt="menu" />
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default NavBar;
