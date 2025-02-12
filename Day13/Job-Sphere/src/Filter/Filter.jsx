import { useContext } from "react";
import { DataContext } from "../../src/components/Data";
import DateFilter from "./components/DateFilter";
import JobTypeFilter from "./components/JobTypeFilter";
import LocationFilter from "./components/LocationFilter";
import ExperienceFilter from "./components/ExperienceFilter";
import SalaryFilter from "./components/SalaryFilter";
import CurrencyFilter from "./components/CurrencyFilter";
const Filter = () => {
  const { JobType, salarySpan } = useContext(DataContext);

  const Reset = () => {
    JobType([]);
    salarySpan(1000, 500000);
  };

  return (
    <section className="  h-fit flex justify-center items-center p-4">
      <div className=" w-90  border-[#87878766] border-[0.5px] p-4 rounded-2xl flex flex-col justify-center items-center gap-2 drop-shadow-lg bg-white">
        <h1 className=" text-2xl font-semibold mb-2">Filter</h1>
        <DateFilter />
        <JobTypeFilter />
        <LocationFilter />
        <ExperienceFilter />
        <SalaryFilter />
        <CurrencyFilter />
        <button
          onClick={Reset}
          className=" w-[80%] bg-[#0034D1] text-white p-2 rounded-lg mt-4"
        >
          Reset all Filters
        </button>
      </div>
    </section>
  );
};

export default Filter;
