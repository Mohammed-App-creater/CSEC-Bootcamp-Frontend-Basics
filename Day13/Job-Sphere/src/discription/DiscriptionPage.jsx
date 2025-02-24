import SearchBar from "../components/SearchBar";
import Discription from "./components/Discription";
import { IoChevronBack } from "react-icons/io5";
import SavedJob from "../components/SavedJob";
import { useNavigate } from "react-router-dom";
const DiscriptionPage = () => {
  const navigate = useNavigate();
  return (
    <section className=" flex flex-col  ">
      <section className="flex flex-col  justify-center items-start gap-4 mt-10 px-24">
        <div className=" w-full max-w-[1063px]  flex justify-between  items-center gap-5">
          <button onClick={ () => navigate("/") } className="text-[#1A1A1A]  text-[20px] flex justify-center items-center font-light">
            <IoChevronBack /> Back
          </button>
          <SearchBar />
        </div>
        <div className=" w-full flex  items-start justify-between pr-10 gap-4">
          <Discription />
        <SavedJob />
        </div>
      </section>
    </section>
  );
};

export default DiscriptionPage;
