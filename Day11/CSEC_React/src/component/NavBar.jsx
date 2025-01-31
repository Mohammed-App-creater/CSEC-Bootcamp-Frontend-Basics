export const NavBar = () => {
  return (
    <section className="w-screen bg-transparent text-gray-400 flex items-center justify-center absolute top-0 pb-5 border-b-4 border-transparent rounded-full"
    style={{
        borderImage: "linear-gradient(to right, #4c51bf, #7f4fe1, #f472b6) 1",
    }}
>
      <nav className=" w-full max-w-[1200px] flex justify-between items-center px-4 py-6">
        <h1 className=" text-4xl font-extrabold">React.js</h1>
        <ul className="flex justify-center gap-6 text-xl items-center w-1/2 px-18">
          <li className=" cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:scale-110 p-1 rounded-2xl transition-transform duration-300 ">
            <h1 className="text-white font-semibold text-lg bg-[#0b162b] py-3 px-8 rounded-2xl">
              Home
            </h1>
          </li>
          <li className=" cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:scale-110 p-1 rounded-2xl transition-transform duration-300 ">
            <h1 className="text-white font-semibold text-lg bg-[#0b162b] py-3 px-8 rounded-2xl">
              About
            </h1>
          </li>
          <li className=" cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:scale-110 p-1 rounded-2xl transition-transform duration-300 ">
            <h1 className="text-white font-semibold text-lg bg-[#0b162b] py-3 px-8 rounded-2xl">
              Contact
            </h1>
          </li>
        </ul>
        <div className=" p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full hover:scale-110 active:scale-90 transition-transform duration-300 ">
          <button className=" text-white font-semibold text-lg bg-[#0b162b] py-3 px-8 rounded-full ">
            CSEC-DEV
          </button>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
