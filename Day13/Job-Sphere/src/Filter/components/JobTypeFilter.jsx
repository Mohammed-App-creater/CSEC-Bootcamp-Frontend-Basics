import { useState, useContext } from "react";
import { DataContext } from "../../components/Data";

const JobTypeFilter = () => {
  const { JobType } = useContext(DataContext);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleCheckboxClick = (type) => {
    let updatedTypes = [];

    if (selectedTypes.includes(type)) {
      updatedTypes = selectedTypes.filter((t) => t !== type);
    } else {
      updatedTypes = [...selectedTypes, type];
    }

    setSelectedTypes(updatedTypes);
    JobType(updatedTypes);
  };
  return (
    <div className=" w-full">
      <h1 className=" text-xl ">Job Type</h1>
      <div className="flex flex-col  gap-2 rounded-2xl text-[#2F2F2F] border-[#87878766] border-[0.5px] w-full p-2 mt-2">
        {["Full-Time", "Part Time", "Internship", "Contract", "Volunteer"].map(
          (type) => (
            <div key={type} className="flex gap-2">
              <input
                type="checkbox"
                id={type}
                checked={selectedTypes.includes(type)}
                onChange={() => handleCheckboxClick(type)}
              />
              <label htmlFor={type}>{type}</label>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default JobTypeFilter;
