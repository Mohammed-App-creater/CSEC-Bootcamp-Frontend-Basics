import Logo from "./Logo";
const NavBar = () => {
  return (
    <section className=" w-full  h-20 bg-white flex justify-evenly  items-center p-4 shadow-md border-b border-blue-600">
      <Logo />
      <div className=" w-1/2 max-w-[625px]  text-[#2F2F2F] text-[18px]   flex justify-evenly items-center">
        <a className=" text-[#0034D1] underline  " href="#">
          Job Search
        </a>
        <a className="  " href="#">
          My Applications
        </a>
        <a className=" " href="#">
          Companies
        </a>
        <a className=" " href="#">
          Sign Contact Us
        </a>
        <a className=" " href="#">
          Contact Us
        </a>
      </div>
      <div
        className=" w-1/4 max-w-[340px]
      
       flex justify-evenly items-center"
      >
        <button className=" py-2 px-10 bg-[#0034D1] rounded text-white hover:scale-110 transition-all ">
          Login
        </button>
        <button className=" py-2 px-10 rounded blue_border hover:bg-[#0034D1] hover:text-white hover:scale-110 transition-all ">
          Sign In
        </button>
      </div>
      <div className="  md:hidden">
        <img src="/assets/menu.svg" alt="menu" />
      </div>
    </section>
  );
};

export default NavBar;
