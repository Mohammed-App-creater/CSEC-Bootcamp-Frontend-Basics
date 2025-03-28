import useJobStore from "../../components/store/DataStore";

const ExperienceFilter = () => {
  const { setExperienceLevel } = useJobStore();
  const experienceLevel = useJobStore((state) => state.filters.experienceLevel);
  const handleChange = (e) => {
    setExperienceLevel(e.target.value);
  };

  return (
    <div className="w-full">
      <h1 className="text-xl">Experience Level</h1>
      <select
        value={experienceLevel}
        onChange={handleChange}
        className="p-2 rounded-lg border-[#87878766] border-[0.5px] w-full flex justify-center items-center text-gray-600 mt-2"
      >
        <option value="All">All</option>
        <option value="Entry Level">Entry</option>
        <option value="Mid Level">Intermediate</option>
        <option value="Senior Level">Senior</option>
      </select>
    </div>
  );
};

export default ExperienceFilter;
