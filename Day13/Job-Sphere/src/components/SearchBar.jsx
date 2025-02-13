import { IoMdSearch } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import  { useContext } from "react";
import { DataContext } from "./Data";
const SearchBar = () => {
  const { setSearchQuery }  = useContext(DataContext); 
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };
  return (
    <div className=" w-full flex gap-1 bg-white  py-2 px-4 rounded-2xl drop-shadow-lg mb-10">
      <div className=" w-85 flex  items-center">
        <IoMdSearch onClick={handleSearch} size={25} />
        <input onChange={handleSearch} className=" w-[90%] -ml-1 outline-none placeholder:text-black  placeholder:text-lg placeholder:font-light p-2" type="text" placeholder="Job title, Keywords, or Company name" />
      </div>
      <div className="flex items-center border-l-[1.5px] border-[#C1C1C1]   ">
        <MdOutlineLocationOn size={25} />
        <input className="w-24 placeholder:text-black outline-none placeholder:text-lg placeholder:font-light py-2" type="text" placeholder="Location" />
      </div>
      <button className=" bg-[#0034D1] text-white py-1 px-7 text-xl rounded-lg" >Search</button>
    </div>
  );
};

export default SearchBar;
