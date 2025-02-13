import { useContext, useEffect } from "react";
import { DataContext } from "../../components/Data";
import { PropTypes } from 'prop-types';

const ExperienceFilter = ({ Reset }) => {
  const { setExperienceLevel } = useContext(DataContext);
  useEffect(() => {
    if(Reset){
      setExperienceLevel("");
    }
  }, [setExperienceLevel, Reset]);
  return (
    <div className=" w-full">
      <h1 className=" text-xl ">Experience Level</h1>
      <select
        onChange={(e) => setExperienceLevel(e.target.value)}
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

ExperienceFilter.propTypes = {
  Reset: PropTypes.bool.isRequired,
};

export default ExperienceFilter;
