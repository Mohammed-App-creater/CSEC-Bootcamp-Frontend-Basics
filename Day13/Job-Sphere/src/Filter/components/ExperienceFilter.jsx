import { useContext } from "react";
import { DataContext } from "../../components/Data";

const ExperienceFilter = () => {
  const { ExperienceLevel } = useContext(DataContext);
  return (
    <div className=" w-full">
      <h1 className=" text-xl ">Experience Level</h1>
      <select
        onChange={(e) => ExperienceLevel(e.target.value)}
        className="p-2 rounded-lg border-[#87878766] border-[0.5px] w-full flex justify-center items-center text-gray-600 mt-2"
      >
        <option value="Entry Level">Entry</option>
        <option value="All">All</option>
        <option value="Mid Level" selected>
          Intermediate
        </option>
        <option value="Senior Level">Senior</option>
      </select>
    </div>
  );
};

export default ExperienceFilter;
