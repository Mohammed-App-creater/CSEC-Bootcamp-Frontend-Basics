import useJobStore from "../../components/store/DataStore";

const JobTypeFilter = () => {
  const { setSelectedTypes } = useJobStore();
  const JobTypeFilter = useJobStore((state) => state.filters.selectedTypes);
  

  const handleCheckboxClick = (type) => {
    let updatedTypes = [];

    if (JobTypeFilter.includes(type)) {
      updatedTypes = JobTypeFilter.filter((t) => t !== type);
    } else {
      updatedTypes = [...JobTypeFilter, type];
    }
    setSelectedTypes(updatedTypes);
  };

  return (
    <div className=" w-full">
      <h1 className=" text-xl ">Job Type</h1>
      <div className="flex flex-col  gap-2 rounded-2xl text-[#2F2F2F] border-[#87878766] border-[0.5px] w-full p-2 mt-2">
        {[
          "Full-time",
          "Hybrid",
          "Internship",
          "Contract",
          "Volunteer",
          "Remote",
        ].map((type) => (
          <div key={type} className="flex gap-2">
            <input
              type="checkbox"
              id={type}
              checked={JobTypeFilter.includes(type)}
              onChange={() => handleCheckboxClick(type)}
            />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobTypeFilter;
